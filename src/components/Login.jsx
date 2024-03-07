import React, {useState} from 'react'
import loginImage from '../assets/Login/login.png'
import { useAuth } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const { login } = useAuth()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "test@test.pl",
        password: "password"
    })
    const handleChange = ({target}) => {
        setUser(prev => ({
            ...prev,
            [target.name] : target.value,
        }))
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        if(user.email === "" || user.password === ""){
            console.log('123')
            return
        }

        try{
            setLoading(true)
            const {
                data,
                error
              } = await login(user.email, user.password)
              if (error) {
                console.log(error.message)
              }
              if (data.user && data.session){
                console.log('Success!')
                setTimeout(() => {
                    navigate("/dashboard")
                }, 1500)
              } 

        }catch(error){
            console.log(error)
        }
        setLoading(false)
    }

    return (
        <div className='flex h-screen flex-col lg:flex-row'>
            <div className='h-[40%] lg:h-auto lg:flex-1 rounded-b-3xl lg:rounded-r-3xl overflow-hidden'>
                <img src={loginImage} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='flex-1 flex flex-col items-center justify-center bg-[#F8F7EC] text-[#7A4924]'>
                <h2 className='text-3xl mb-4'>Sing in</h2>

                <form onSubmit={handleLogin} className='flex flex-col w-[50%] gap-3'>
                    <input value={user.email} onChange={handleChange} type="email" placeholder='email' className='border border-[#7A4924] bg-[#E8D7BD] rounded-xl py-3 px-5 outline-none placeholder-[#7A4924AA]'/>
                    <input value={user.password} onChange={handleChange} type="password" placeholder='password' className='border border-[#7A4924] bg-[#E8D7BD] rounded-xl py-3 px-5 outline-none placeholder-[#7A4924AA]'/>
                    <input type="submit" className='text-md border border-[#7A4924] bg-[#E8D7BD] rounded-xl py-3 px-5 outline-none text-' disabled={loading} value='Sign in'/>
                </form>
                <a href="" className='text-center mt-2'>I forgot my password</a>
 
            </div>
        </div>
    )
}