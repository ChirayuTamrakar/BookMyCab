import React from 'react'
import HomePageLogo from '../assets/HomePageLogo.png' 
import { Link } from 'react-router-dom'
import { useState } from 'react'

function CaptainLogin() {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[captainData, setCaptainData] = useState({
    email: '',
    password:''
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password:password
    })
    console.log("captain data ------->", captainData);
    setEmail('')
    setPassword('')

  }
  return (
    <div className='flex flex-col items-center mt-9 h-screen justify-between mx-9'>
      <form  onSubmit={submitHandler} className=' w-full flex flex-col '>
        <img src={HomePageLogo} className="h-30 w-30 " alt="" />
        <h3 className='text-lg  mb-2'>What's your email</h3>
        <input 
        className='bg-[#eeeeee] mb-7 border-1 border-white rounded-sm text-lg placeholder:text-base w-full py-1 px-4'
        required 
        value={email}
        onChange={(e) => {setEmail(e.target.value); }}
        type="email" 
        placeholder="Enter your email" />
        <h3 className='text-lg mb-2'>Enter Password</h3>
        <input 
        className='bg-[#eeeeee] border-1 border-white rounded-sm text-lg placeholder:text-base w-full py-1 px-4' 
        required 
        type="password" 
        value={password}
        onChange={(e) => {setPassword(e.target.value); }}
        placeholder="Enter your password" />
        <button className='w-full flex justify-center border-2 rounded-md mt-7 text-xl font-bold py-2 bg-black text-white' type="Login">Login</button>
        <p className='text-sm mt-1'>Join a fleet? <Link to="/captain-signup" className='text-blue-500'>Register as a Captain</Link></p>
      </form>
      <Link to="/login" className='w-full  mb-7 flex justify-center border-2 rounded-md mt-7 text-lg font-bold py-2   bg-blue-500  text-white'>Sign In an User</Link>
    </div>
  )
}

export default CaptainLogin