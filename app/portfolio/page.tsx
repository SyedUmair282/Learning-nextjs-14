import React from 'react'
import Link from 'next/link'
import styles from './page.module.scss'
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className='text-2xl font-bold mt-3'>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href={'/portfolio/illustration'} className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href={'/portfolio/websites'} className={styles.item}>
        <span className={styles.title}>Websites</span>
        </Link>
        <Link href={'/portfolio/application'} className={styles.item}>
        <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio;