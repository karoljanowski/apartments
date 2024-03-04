import React from 'react'
import login from '../assets/Login/login.png'

export const Login = () => {
    return (
        <div className='flex h-screen'>
            <div className='flex-1 rounded-r-3xl overflow-hidden'>
                <img src={login} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='flex-1 flex flex-col items-center justify-center bg-[#F8F7EC] text-[#7A4924]'>
                <h2 className='text-3xl mb-4'>Sing in</h2>
                <div className='flex flex-col w-[50%] gap-3'>

                    <input type="text" placeholder='email' className='border border-[#7A4924] bg-[#E8D7BD] rounded-xl py-3 px-5 outline-none placeholder-[#7A4924AA]'/>
                    <input type="password" placeholder='password' className='border border-[#7A4924] bg-[#E8D7BD] rounded-xl py-3 px-5 outline-none placeholder-[#7A4924AA]'/>
                    <input type="button" className='text-md border border-[#7A4924] bg-[#E8D7BD] rounded-xl py-3 px-5 outline-none text-' value='Sign in'/>
                    <a href="" className='text-center'>I forgot my password</a>
                </div>
            </div>
        </div>
    )
}
// #E8D7BD #7A4924