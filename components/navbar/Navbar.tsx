"use client"
import React from 'react';
import {navbarLinks} from '@/types/allTypes';
import Link from 'next/link';
import styles from './navbar.module.scss';
import Toggle from '../toggle/toggle';
const links:navbarLinks[]=[
  {
    id: 1,
    title: "Home",
    url: "/"
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio"
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog"
  },
  {
    id: 4,
    title: "About",
    url: "/about"
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact"
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard"
  }
]
const Navbar = () => {
  return (
    <div className={`${styles.container} w-full flex flex-row items-center justify-between`}>
      <Link href={"/"} className={`font-bold text-2xl`}>Nextian</Link>
      <div className={`flex flex-row items-center ${styles.links}`}>
        <Toggle/>
        {links.map((item:navbarLinks)=>{
          return (
            <Link href={item.url} key={item.id}>{item.title}</Link>
          )
        })}
        <button className={styles.logout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar;