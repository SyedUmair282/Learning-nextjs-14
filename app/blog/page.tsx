import React from 'react'
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href={'/blog/1'} className={`flex flex-row gap-6 mb-6`}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={'https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='image' fill={true}/>
        </div>
        <div className={styles.content}>
          <span className='font-bold text-2xl mb-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id blanditiis sit. Id blanditiis sit.</span>
          <span className='font-light text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores modi rem tenetur architecto. 
            Dolore rem minus quisquam delectus perferendis voluptas, laudantium hic animi, 
            a officia, voluptatum adipisci iste. Earum. Laudantium hic animi, 
            a officia, voluptatum adipisci iste. Earum.
          </span>
        </div>
      </Link>

      <div className={`flex flex-row gap-6 mb-6`}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='image' fill={true}/>
        </div>
        <div className={styles.content}>
          <span className='font-bold text-2xl mb-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id blanditiis sit. Id blanditiis sit.</span>
          <span className='font-light text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores modi rem tenetur architecto. 
            Dolore rem minus quisquam delectus perferendis voluptas, laudantium hic animi, 
            a officia, voluptatum adipisci iste. Earum. Laudantium hic animi, 
            a officia, voluptatum adipisci iste. Earum.
          </span>
        </div>
      </div>
      <div className={`flex flex-row gap-6 mb-6`}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={'https://images.pexels.com/photos/715134/pexels-photo-715134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='image' fill={true}/>
        </div>
        <div className={styles.content}>
          <span className='font-bold text-2xl mb-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id blanditiis sit. Id blanditiis sit.</span>
          <span className='font-light text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores modi rem tenetur architecto. 
            Dolore rem minus quisquam delectus perferendis voluptas, laudantium hic animi, 
            a officia, voluptatum adipisci iste. Earum. Laudantium hic animi, 
            a officia, voluptatum adipisci iste. Earum.
          </span>
        </div>
      </div>
      
      
    </div>
  )
}

export default Blog;