import React from 'react';
import HomePageLogo from '../assets/HomePageLogo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import {useContext} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CaptainSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');  
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const { captain, setCaptain} = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      }
    }

    try{
      const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
      if(response.status === 200 || 201){
        const data = response.data;
        setCaptain(data.captain);
        console.log("Captain registered successfully:", data); 
        localStorage.setItem('token', data.token);
        navigate('/captain-home'); 
      }
    } catch (error) {
      console.log("Registration error: @UserSignup", error.response?.data || error.message);
    }
    // setEmail('')
    // setPassword('') 
    // setFirstName('')
    // setLastName('')
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

        <h3 className='text-base font-medium mb-2'>Vehicle Color</h3>
        <input
          className='bg-[#eeeeee] mb-7 border-1 border-white rounded-sm text-lg placeholder:text-base w-full py-1 px-4'
          required
          type="text"
          value={vehicleColor}
          onChange={(e) => setVehicleColor(e.target.value)}
          placeholder="Vehicle color"
        />

        <h3 className='text-base font-medium mb-2'>Vehicle Plate</h3>
        <input
          className='bg-[#eeeeee] mb-7 border-1 border-white rounded-sm text-lg placeholder:text-base w-full py-1 px-4'
          required
          type="text"
          value={vehiclePlate}
          onChange={(e) => setVehiclePlate(e.target.value)}
          placeholder="Vehicle plate number"
        />

        <h3 className='text-base font-medium mb-2'>Vehicle Capacity</h3>
        <input
          className='bg-[#eeeeee] mb-7 border-1 border-white rounded-sm text-lg placeholder:text-base w-full py-1 px-4'
          required
          type="number"
          min="1"
          value={vehicleCapacity}
          onChange={(e) => setVehicleCapacity(e.target.value)}
          placeholder="Vehicle capacity"
        />

        <h3 className='text-base font-medium mb-2'>Vehicle Type</h3>
        <select
          required
          className='bg-[#eeeeee] mb-7 border-1 border-white rounded-sm text-lg placeholder:text-base w-full py-1 px-4'
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
        >
          <option value='' disabled> Select Vehicle Type</option>
          <option value='car'>Car</option>
          <option value='bike'>Bike</option>
          <option value='auto'>Truck</option>
        </select>

        <button className='w-full flex justify-center border-2 rounded-md mt-7 text-xl font-bold py-2 bg-black text-white' type="Login">Create Captain Account</button>
        <p className='text-sm mt-1'> Already have an ? <Link to="/captain-login" className='text-blue-500'>Login here</Link></p>
      
      </form>
        <p className='text-[10px] mb-10 '>By signing up, you agree to our Privacy Policy and Terms of Service.
            We value your privacy — your personal information will be securely stored and only used to create and manage your account, provide services, and improve your experience.
        </p>

    </div>
  )
}

export default CaptainSignup