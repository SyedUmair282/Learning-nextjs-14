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
        <div className={styles.main}>
          <div className={styles.imgCon}>
            <Image className={styles.img} src={"https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} fill alt=''/>
          </div>
          <span className='w-2/3'>Hello There is a title of blog</span>
          <span className='mr-5'>x</span>
        </div>
        <div className={styles.main}>
          <div className={styles.imgCon}>
            <Image className={styles.img} src={"https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} fill alt=''/>
          </div>
          <span className='w-2/3'>Hello There is a title of blog</span>
          <span className='mr-5'>x</span>
        </div>
        <div className={styles.main}>
          <div className={styles.imgCon}>
            <Image className={styles.img} src={"https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} fill alt=''/>
          </div>
          <span className='w-2/3'>Hello There is a title of blog</span>
          <span className='mr-5'>x</span>
        </div>
        <div className={styles.main}>
          <div className={styles.imgCon}>
            <Image className={styles.img} src={"https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} fill alt=''/>
          </div>
          <span className='w-2/3'>Hello There is a title of blog</span>
          <span className='mr-5'>x</span>
        </div>
      </div>
      <form className={styles.right}>
          <input className={styles.input} type="text" placeholder='name' name="" id="" />
          <input className={styles.input} type="email" placeholder='email' name="" id="" />
          <textarea className={styles.input} name="" id="" placeholder='message' cols={30} rows={10}></textarea>
          <button className={styles.btn}>Save</button>
        </form>
    </div>
  )
}

export default Dashboard;