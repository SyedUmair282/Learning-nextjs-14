"use client"
import React, {useState,useEffect} from 'react'
import Image from 'next/image'
// import { db } from '@/firebase/config'
import { getDatabase, ref, set, query, orderByChild, equalTo, get, push, child } from "firebase/database";
import { app } from '@/firebase/config';
import { userInfo } from '@/types/allTypes';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Register:React.FC = () => {
  const [userData,setUserData] = useState<userInfo|null>(null)
  const [loading,setLoading] = useState<boolean>(false)
  const router = useRouter();

  const register = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    if (
      userData !== null &&
      userData.email &&
      userData.username &&
      userData.password
    ) {
      const db = getDatabase(app);
      const userQuery = query(
        ref(db, "users"),
        orderByChild("email"),
        equalTo(userData.email)
      );
      const snapshot = await get(userQuery);
      if (snapshot.val() === null) {
        const newUserKey:any = push(child(ref(db), "users")).key;
        const user = await set(ref(db, "users/" + newUserKey), {
          username: userData?.username,
          email: userData?.email,
          password: userData?.password,
        });
        Cookies.set('user_id',newUserKey);
        Cookies.set('user_name',userData?.username);        
        router.push("/dashboard",{shallow:false});
        router.refresh(); 
        
      } else {
        alert("This email is already registered");
      }
      setLoading(false);
      setUserData(null);
    }
    
  }
  

  return (
    <div>
      <form className='flex flex-col gap-4 w-80 mx-auto' onSubmit={register}>
        <span className='text-3xl font-semibold text-center'>Register Yourself</span>
        <input required placeholder='username' onChange={(e)=>setUserData({...userData,username:e.target.value})} className='bg-transparent outline-none text-gray-300 border-2 border-solid border-gray-300 p-2 text-base font-bold rounded' type="text" name="username" id="username" />
        <input required placeholder='email address' onChange={(e)=>setUserData({...userData,email:e.target.value})} className='bg-transparent outline-none text-gray-300 border-2 border-solid border-gray-300 p-2 text-base font-bold rounded' type="email" name="email" id="email" />
        <input required placeholder='password' onChange={(e)=>setUserData({...userData,password:e.target.value})} className='bg-transparent outline-none border-2 border-solid border-gray-300 p-2 text-base font-bold rounded' type="password" name="password" id="password" />
        <button type='submit' className='bg-green-500 rounded p-2	border-0 text-xs' disabled={loading}>{!loading ? "Register" : "Loading..."}</button>        
        <span className='text-sm text-center'>Already have an account? <Link href={'/dashboard/login'} className='underline text-blue-700'>Signin</Link></span>
        <div className='flex items-center justify-center'>
          <div className='border border-solid border-gray-300 flex-1'/>
          <span className='text-sm text-center px-2'>OR</span>
          <div className='border border-solid border-gray-300 flex-1'/>
        </div>
        <div className='bg-transparent border-2 border-gray-300 rounded p-2 text-xs text-left flex gap-2 cursor-pointer'>
          <Image src={"/5.png"} alt="yt" width={15} className="cursor-pointer" height={15} />
          Continue with Google
        </div>
      </form>
    </div>
  )
}

export default Register;