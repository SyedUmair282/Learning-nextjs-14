import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import ContactImg from '@/public/contact.png'
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className='text-center text-4xl font-bold' style={{marginBottom:"70px"}}>Let's Keep in Touch</h1>
      <div className={`flex flex-row items-center`}>
        <div className={styles.imgContainer}>
          <Image src={ContactImg} alt='contact img' className={styles.pic} fill={true}/>
        </div>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder='name' name="" id="" />
          <input className={styles.input} type="email" placeholder='email' name="" id="" />
          <textarea className={styles.input} name="" id="" placeholder='message' cols={30} rows={10}></textarea>
          <button className={styles.btn}>Save</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;