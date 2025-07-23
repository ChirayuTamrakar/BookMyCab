import React from 'react'
import HomePageLogo from '../assets/HomePageLogo.png' 
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';
import { useContext } from 'react';


function UserSignup() {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');  

  const navigate = useNavigate();

  const {user, setUser} = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname:{
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password
    }
    console.log("------->", newUser);
    try{
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
      if(response.status == 200){
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token)
        console.log("Registration successful: @UserSignup", data);
        alert("Registration successful! You can now login.");
        navigate('/home')
      }
    } catch (error){
      console.log("Registration error: @UserSignup", error.response?.data || error.message);
    }
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }
  return (
    <div className='flex flex-col items-center mt-9 h-screen justify-between mx-9'>
      <form  onSubmit={submitHandler}className=' w-full flex flex-col '>

        <h3 className='text-base font-medium mb-2'>What's your name</h3>
        <div className='flex gap-2 mb-7'>
          <input 
          className='bg-[#eeeeee]  border-1 border-white rounded-sm text-lg placeholder:text-base w-full py-1 px-4'
          required 
          value={firstName}
          onChange={(e) => {setFirstName(e.target.value); }}
          type="text" 
          placeholder="firstname" />

          <input 
          className='bg-[#eeeeee] border-1 border-white rounded-sm text-lg placeholder:text-base w-full py-1 px-4' 
          required 
          type="text" 
          value={lastName}
          onChange={(e) => {setLastName(e.target.value); }}
          placeholder="lastname" />
        </div>

        <h3 className='text-base font-medium mb-2'>What's your email</h3>
        <input 
        className='bg-[#eeeeee] mb-7 border-1 border-white rounded-sm text-lg placeholder:text-base w-full py-1 px-4'
        required 
        value={email}
        onChange={(e) => {setEmail(e.target.value); }}
        type="email" 
        placeholder="example@email.com" />

        <h3 className='text-base font-medium mb-2'>Enter Password</h3>
        <input 
        className='bg-[#eeeeee] border-1 border-white rounded-sm text-lg placeholder:text-base w-full py-1 px-4' 
        required 
        type="password" 
        value={password}
        onChange={(e) => {setPassword(e.target.value); }}
        placeholder="password" />

        <button className='w-full flex justify-center border-2 rounded-md mt-7 text-xl font-bold py-2 bg-black text-white' type="Login">Create Account</button>
        <p className='text-sm mt-1'> Already have an ? <Link to="/login" className='text-blue-500'>Login here</Link></p>
      
      </form>
        <p className='text-[10px] mb-10 '>By signing up, you agree to our Privacy Policy and Terms of Service.
          We value your privacy — your personal information will be securely stored and only used to create and manage your account, provide services, and improve your experience.
        </p>

    </div>
  )
}

export default UserSignup