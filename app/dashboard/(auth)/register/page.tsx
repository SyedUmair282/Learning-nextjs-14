import React from 'react'
import Image from 'next/image'

const Register = () => {
  return (
    <div>
      <form className='flex flex-col gap-4 w-80 mx-auto'>
        <span className='text-3xl font-semibold text-center'>Register Yourself</span>
        <input required placeholder='username' className='bg-transparent outline-none text-gray-300 border-2 border-solid border-gray-300 p-2 text-base font-bold rounded' type="text" name="username" id="username" />
        <input required placeholder='email address' className='bg-transparent outline-none text-gray-300 border-2 border-solid border-gray-300 p-2 text-base font-bold rounded' type="email" name="email" id="email" />
        <input required placeholder='password' className='bg-transparent outline-none border-2 border-solid border-gray-300 p-2 text-base font-bold rounded' type="password" name="password" id="password" />
        <button className='bg-green-500 rounded p-2	border-0 text-xs'>Register</button>
        <span className='text-sm text-center'>Already have an account? Signin</span>
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