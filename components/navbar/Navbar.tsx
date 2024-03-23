"use client"
import React,{useState,useEffect} from 'react';
import {navbarLinks} from '@/types/allTypes';
import Link from 'next/link';
import styles from './navbar.module.scss';
import Toggle from '../toggle/toggle';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
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
  const [loggedIn , setLoggedIn] = useState<boolean>(false);
  const router=useRouter();
  const user_id = Cookies.get('user_id');
  const user_name = Cookies.get('user_name');

  useEffect(()=>{
    if(user_id && user_name){
      setLoggedIn(true);
    }
  },[user_id,user_name])

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
        {loggedIn ? <button className={styles.logout} onClick={()=>{
          Cookies.remove('user_id');
          Cookies.remove('user_name');          
          window.location.reload();          
        }}>
          Logout
        </button> :
        <button className={styles.logout} onClick={()=>router.push('/dashboard/login')}>
          Login
        </button>}
      </div>
    </div>
  )
}

export default Navbar;