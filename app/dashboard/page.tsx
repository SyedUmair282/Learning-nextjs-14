"use client"
import React, {useState , useEffect} from 'react'
import styles from './page.module.scss'
import Image from 'next/image';
import { blogData, blogsType } from '@/types/allTypes';
import Cookies from 'js-cookie';
import { getDatabase, ref, set, query, orderByChild, equalTo, get, push, child, onValue } from "firebase/database";
import { app } from '@/firebase/config';
const Dashboard = () => {
  const [formData, setFormData] = useState<blogData>({
    title:'',
    img:'',
    category:'',
    desc:'',
    detail:'',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<blogsType[]>([]);
  const db = getDatabase(app);
  const user_id: string|null = Cookies.get('user_id') || null;
  const user_name: string|null = Cookies.get('user_name') || null;

  const handleChange = (e:any) => {
    setFormData({...formData, [e.target.name]: e.target.value} as blogData)
  }

  const clearForm = () => {
    setFormData({
      title:'',
      img:'',
      category:'',
      desc:'',
      detail:'',
    });
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    const newBlogKey:any = push(child(ref(db), "blogs")).key;
    const user = await set(ref(db, "blogs/" + newBlogKey), {
      id:newBlogKey,
      user_id,
      user_name,
      title: formData.title,
      img: formData.img,
      category: formData.category,
      desc: formData.desc,
      detail: formData.detail,
    });
    setFormData({
      title:'',
      img:'',
      category:'',
      desc:'',
      detail:'',
    });
    setLoading(false);
  }

  useEffect(() => {
    getUserBlogs();
  }, [])

  const getUserBlogs = async () => {
    const blogQuery = query(
      ref(db, "blogs"),
      orderByChild("user_id"),
      equalTo(user_id)
    );
    onValue(blogQuery, (snapshot) => {
      const blogsData:{ [key: string]: any } = snapshot.val();
      if(blogsData !== null && typeof blogsData === 'object'){
        setBlogs(Object.values(blogsData));
      }
    });
  }
  
  console.log("check blogs ==> ",blogs);

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        {blogs && blogs.length > 0 ? blogs.map((value,index)=>{
         return (<div className={styles.main} key={index}>
          <div className={styles.imgCon}>
            <Image className={styles.img} src={value.img} fill alt=''/>
          </div>
          <span className='w-2/3'>{value.title}</span>
          <span className='mr-5'>x</span>
        </div>)
      }):"No blogs available"}        
      </div>
      <form className={styles.right} onSubmit={(e)=>handleSubmit(e)}>
          <input className={styles.input} type="text" placeholder='Title' name="title" id="" value={formData.title} onChange={(e)=>handleChange(e)} />
          <input className={styles.input} type="text" placeholder='Image url' name="img" id="" value={formData.img} onChange={(e)=>handleChange(e)} />
          <input className={styles.input} type="text" placeholder='Category' name="category" id="" value={formData.category} onChange={(e)=>handleChange(e)} />
          <textarea className={styles.input} name="desc" id="" placeholder='Description...' cols={30} rows={10} value={formData.desc} onChange={(e)=>handleChange(e)}></textarea>
          <textarea className={styles.input} name="detail" id="" placeholder='Detail...' cols={30} rows={10} value={formData.detail} onChange={(e)=>handleChange(e)}></textarea>
          <div className='flex row justify-end'>
            <button type='submit' className={styles.btn} disabled={loading}>{loading ? "Loading..." : "Save"}</button>
            <button type='button' onClick={clearForm} className={`${styles.btn} ml-2`}>Clear</button>
          </div>
        </form>
    </div>
  )
}

export default Dashboard;