"use client"
import React, {useState} from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import ContactImg from '@/public/contact.png'
import { getDatabase, ref, set, push, child } from "firebase/database";
import { app } from '@/firebase/config';
import { messageType } from '@/types/allTypes'
const Contact:React.FC = () => {
  const [newMessage,setNewMessage] = useState<messageType|null>(null);
  const handleChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage({...newMessage,[e.target.name]:e.target.value} as messageType);
  }

  const save = async (e:any) => {
    e.preventDefault();
    if(newMessage?.name && newMessage?.email && newMessage?.message){
      const db = getDatabase(app);
      const newUserKey = push(child(ref(db), "messages")).key;
      await set(ref(db, "messages/" + newUserKey), {
        name:newMessage.name,
        email:newMessage.email,
        message: newMessage.message
      });
      alert("Thankyou! for contact with us.")
      setNewMessage(null);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className='text-center text-4xl font-bold' style={{marginBottom:"70px"}}>Let's Keep in Touch</h1>
      <div className={`flex flex-row items-center`}>
        <div className={styles.imgContainer}>
          <Image src={ContactImg} alt='contact img' className={styles.pic} fill={true}/>
        </div>
        <form className={styles.form} onSubmit={(e)=>save(e)}>
          <input className={styles.input} required type="text" placeholder='name' name="name" value={newMessage?.name} id="" onChange={(e)=>handleChange(e)} />
          <input className={styles.input} required type="email" placeholder='email' name="email" id="" value={newMessage?.email} onChange={(e)=>handleChange(e)} />
          <textarea className={styles.input} required name="message" id="" placeholder='message' value={newMessage?.message} cols={30} rows={10} onChange={(e)=>handleChange(e)}></textarea>
          <button className={styles.btn} type='submit'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;