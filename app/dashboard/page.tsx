"use client"
import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.main}>
          <div className={styles.imgCon}>
            <Image className={styles.img} src={"https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} fill alt=''/>
          </div>
          <span className='w-2/3'>Hello There is a title of blog</span>
          <span className='mr-5'>x</span>
        </div>        
      </div>
      <form className={styles.right}>
          <input className={styles.input} type="text" placeholder='Title' name="" id="" />
          <input className={styles.input} type="text" placeholder='Image url' name="" id="" />
          <input className={styles.input} type="text" placeholder='Category' name="" id="" />
          <textarea className={styles.input} name="text" id="" placeholder='Description...' cols={30} rows={10}></textarea>
          <textarea className={styles.input} name="text" id="" placeholder='Detail...' cols={30} rows={10}></textarea>
          <div className='flex row justify-end'>
            <button className={styles.btn}>Save</button>
            <button className={`${styles.btn} ml-2`}>Clear</button>
          </div>
        </form>
    </div>
  )
}

export default Dashboard;