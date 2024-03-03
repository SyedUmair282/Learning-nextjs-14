"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { getDatabase, ref, set, query, orderByChild, equalTo, get, push, child } from "firebase/database";
import { app } from '@/firebase/config';
import { userInfo } from '@/types/allTypes';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [userData,setUserData] = useState<userInfo|null>(null)
  const [loading,setLoading] = useState<boolean>(false)
  const [error,setError] = useState<boolean>(false)
  const router = useRouter();

  const login = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    if (
      userData !== null &&
      userData.email &&      
      userData.password
    ) {
      const db = getDatabase(app);
      const userQuery = query(
        ref(db, "users"),
        orderByChild("email"),
        equalTo(userData.email)
      );
      const snapshot = await get(userQuery);
      if (snapshot.val() !== null) {        
        let user_id = Object.keys(snapshot.val());
        let user_data = snapshot.val()[user_id[0]];
        if(user_data?.password === userData.password){
          Cookies.set('user_id',user_id[0]);
          Cookies.set('user_name',user_data?.username);        
          router.push("/", {shallow:false});
          router.refresh();
          setUserData(null);
        }else{
          alert("Incorrect email or password!");  
        }        
      } else {
        alert("Incorrect email or password!");
      }
      setLoading(false);
    }
    
  }


  return (
    <div>
      <form className='flex flex-col gap-4 w-80 mx-auto'>
        <span className='text-3xl font-semibold text-center'>Welcome back</span>
        <input placeholder='email address' className='bg-transparent outline-none text-gray-300 border-2 border-solid border-gray-300 p-2 text-base font-bold rounded' type="email" name="email" id="email" onChange={(e)=>setUserData({...userData,email:e.target.value})} />
        <input placeholder='password' className='bg-transparent outline-none border-2 border-solid border-gray-300 p-2 text-base font-bold rounded' type="password" name="password" id="password" onChange={(e)=>setUserData({...userData,password:e.target.value})} />
        <button className='bg-green-500 rounded p-2	border-0 text-xs' onClick={login} disabled={loading}>{!loading ? "Login" : "Loading..."}</button>
        <span className='text-sm text-center'>Don't have an account? <Link href={'/dashboard/register'} className='underline text-blue-700'>Register</Link></span>
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

export default Login;