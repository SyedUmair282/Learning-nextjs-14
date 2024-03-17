import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import { useRouter,useParams } from 'next/navigation'
const BlogPost = ({params}:any) => {
  // const router = useRouter();
  console.log("check rou=>",params.id)
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.firstContainer}>
          <div className={styles.left}>
            <div className='font-bold text-3xl'>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='text-sm font-light'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At nulla voluptas rerum id aspernatur,
                animi culpa facilis vitae ducimus commodi minima quibusdam exercitationem aperiam aliquid enim ullam nostrum reprehenderit eligendi?
                Lorem ipsum dolor sit amet consectetur adipisicing elit?
              </p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <div className='h-10 w-10 rounded-full relative'>
                <Image src={'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='img'
                fill={true}
                className={styles.avatar}
                />
              </div>
              <span className='text-xs'>John Doe</span>
            </div>
          </div>
          <div className={styles.right}>
            <Image className={styles.img} src={'https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='image' fill={true}/>
          </div>
        </div>
        <div className={`${styles.secondContainer} font-light`}>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At nulla voluptas rerum id aspernatur,
            animi culpa facilis vitae ducimus commodi minima quibusdam exercitationem aperiam aliquid enim ullam nostrum reprehenderit eligendi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime quod excepturi, eius similique dignissimos, quia tempore distinctio quo
            maiores quas consequatur eveniet possimus consectetur inventore iste. Quos ipsa aperiam inventore!
          </span>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At nulla voluptas rerum id aspernatur,
            animi culpa facilis vitae ducimus commodi minima quibusdam exercitationem aperiam aliquid enim ullam nostrum reprehenderit eligendi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At nulla voluptas rerum id aspernatur,
            animi culpa facilis vitae ducimus commodi minima quibusdam exercitationem aperiam aliquid enim ullam nostrum reprehenderit eligendi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime quod excepturi, eius similique dignissimos, quia tempore distinctio quo
            maiores quas consequatur eveniet possimus consectetur inventore iste. Quos ipsa aperiam inventore!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At nulla voluptas rerum id aspernatur,
            animi culpa facilis vitae ducimus commodi minima quibusdam exercitationem aperiam aliquid enim ullam nostrum reprehenderit eligendi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
      </div>
    </div>
  )
}

export default BlogPost;