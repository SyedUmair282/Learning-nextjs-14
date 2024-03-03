import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src='https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' fill={true} alt='About Image'/>
        <div className={styles.imgText}>
          <h1 className={styles.title}>Digital Storytellers</h1>
          <h2 className={styles.desc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <br />
      <div className={`flex flex-row justify-between`}>
        <div className={`${styles.leftItem}`}>
          <h1 className={`${styles.textTitle}`}>Who Are We?</h1>
          <p className={`${styles.desc} mt-2`}>Every business has an origin story worth telling, and usually, one that justifies why you even do business and have clients.</p>
          <p className={`${styles.desc} mt-2`}>Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future.</p>
          <p className={`${styles.desc} mt-2`}>Of course, you have a homepage and dedicated pages for your products, but summarizing your offerings on the About Us page is crucial to tie them in with brand values in your messaging.</p>
        </div>
        <div className={`${styles.rightItem}`}>
          <h1 className={`${styles.textTitle}`}>What We Do?</h1>
          <p className={`${styles.desc} mt-2`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sapiente velit atque? Repudiandae id saepe voluptatibus libero quod labore, suscipit aspernatur reprehenderit eius quia unde facilis ad? Deserunt, eum fuga!</p>
          <p className={`${styles.desc} mt-2`}>- Creative Illustration</p>
          <p className={`${styles.desc} mt-2`}>- Dynamic Websites</p>
          <p className={`${styles.desc} mt-2 mb-2`}>- Fast and Handy Mobile Apps</p>
          <Link href={"/contact"} className={`${styles.contactBtn} w-max cursor-pointer`}>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default About;