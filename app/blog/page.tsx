'use client'
import React,{useEffect,useState} from 'react'
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { getDatabase, ref, set, query, orderByChild, equalTo, get, push, child, onValue } from "firebase/database";
import { app } from '@/firebase/config';
import {blogsType} from '@/types/allTypes'
const Blog = () => {
  const [blogs,setBlogs] = useState<blogsType[]|null>(null);

  useEffect(() => {
    getAllBlogs();
  }, [])

  const getAllBlogs = async () => {
    const db = getDatabase(app);
    const allBlogs = ref(db, 'blogs');
    onValue(allBlogs, (snapshot) => {
      const blogsData:{ [key: string]: any } = snapshot.val();
      if(blogsData !== null){        
        setBlogs(Object.values(blogsData));
      }
    });
  }
  
  return (
    <div className={styles.container}>
      {blogs !== null && blogs?.length > 0 &&  blogs.map((value,index)=>{
        return <Link href={`/blog/${value.id}`} key={index} className={`flex flex-row gap-6 mb-6`}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={value.img} alt='image' fill={true}/>
        </div>
        <div className={styles.content}>
          <span className='font-bold text-2xl mb-1'>{value.title}</span>
          <span className='font-light text-sm'>
            {value.desc}
          </span>
        </div>
      </Link>
      }) 
      }
    </div>
  )
}

export default Blog;