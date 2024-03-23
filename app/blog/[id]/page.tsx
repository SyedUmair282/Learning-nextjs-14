'use client'
import React, {useEffect, useState} from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '@/firebase/config';
import { blogsType } from '@/types/allTypes';

type param={
  params:{
    id:string
  }
}

const BlogPost:React.FC<param> = (ctx:param) => {
  const {params} = ctx;
  const [user,setUser] = useState<blogsType|null>(null)

  useEffect(() => {
    const db = getDatabase(app);
    const user = ref(db, "blogs/" + params.id);
    onValue(user, (snapshot) => {
      const data = snapshot.val();
      setUser(data)
    });
  }, [])
  
  return (
    <div className={styles.container}>
      {user !== null && <div>
        <div className={styles.firstContainer}>
          <div className={styles.left}>
            <div className='font-bold text-3xl'>
              <p>{user.title}</p>
            </div>
            <div className='text-sm font-light'>
              <p>
                {user.desc}
              </p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <div className='h-10 w-10 rounded-full relative'>
                <Image src={'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='img'
                fill={true}
                className={styles.avatar}
                />
              </div>
              <span className='text-xs'>{user.user_name}</span>
            </div>
          </div>
          <div className={styles.right}>
            <Image className={styles.img} src={user.img} alt='image' fill={true}/>
          </div>
        </div>
        <div className={`${styles.secondContainer} font-light`}>
          <span>
            {user.detail}
          </span>          
        </div>
      </div>}
    </div>
  )
}

export default BlogPost;