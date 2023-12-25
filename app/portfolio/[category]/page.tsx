import React from 'react'
import styles from './page.module.scss';
import Image from 'next/image';
type param={
  params:{
    category:string
  }
}
const CategoryName = (ctx:param) => {
  const {params} = ctx;
  return (
    <div className={styles.container}>
      <h1 className={`text-2xl font-medium mt-1 ${styles.title}`}>{params.category}</h1>
      <div className={styles.section}>
        <div className={styles.textContainer}>
          <span className='text-4xl font-bold'>Creative Portfolio</span>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore culpa temporibus error laborum officiis accusantium, quia pariatur quo ea non voluptatibus ex, autem, reiciendis cumque quod molestiae modi at! Nemo.</span>
          <button className={styles.btn}>See More</button>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={'https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='img' fill={true}/>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.textContainer}>
          <span className='text-4xl font-bold'>Minimal Single Product</span>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore culpa temporibus error laborum officiis accusantium, quia pariatur quo ea non voluptatibus ex, autem, reiciendis cumque quod molestiae modi at! Nemo.</span>
          <button className={styles.btn}>See More</button>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='img' fill={true}/>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.textContainer}>
          <span className='text-4xl font-bold'>Creative Portfolio</span>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore culpa temporibus error laborum officiis accusantium, quia pariatur quo ea non voluptatibus ex, autem, reiciendis cumque quod molestiae modi at! Nemo.</span>
          <button className={styles.btn}>See More</button>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={'https://images.pexels.com/photos/458381/pexels-photo-458381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='img' fill={true}/>
        </div>
      </div>
    </div>
  )
}

export default CategoryName;