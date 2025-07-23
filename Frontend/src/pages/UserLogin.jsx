import React from 'react'
import HomePageLogo from '../assets/HomePageLogo.png' 
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'


function UserLogin() {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const { user, setUser}  = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
      const userData = {
        email: email,
        password: password
      }

    try{
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
      if(response.status == 201||200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else{
        console.log("-->Login failed:", response.data);
        alert("-->Login failed. Please check your credentials.");
      }
    } catch (err){
      console.log("-->Login error:", err.response?.data || err.message);
      alert("-->Login failed. Please check your credentials.");
    }

    console.log("userData-------->",userData);
    setEmail('')
    setPassword('')

  }
  return (
    <div className='flex flex-col items-center mt-9 h-screen justify-between mx-9'>
      <form  onSubmit={submitHandler}className=' w-full flex flex-col '>
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
        <p className='text-sm mt-1 flex justify-self-center'>NewHere? <Link to="/signup" className='text-blue-500'>Create a account.</Link></p>
      </form>
      <Link to="/captain-login" className='w-full  mb-7 flex justify-center border-2 rounded-md mt-7 text-lg font-bold py-2   bg-green-500  text-white'>Sign In an Captain</Link>
    </div>
  )
}

export default UserLogin