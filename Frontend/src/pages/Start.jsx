import React from 'react'
import HomePageLogo from '../assets/HomePageLogo.png' 
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div>
      <div className="bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1689609697/assets/b8/c39de0-6e13-485b-ba45-66511170c62a/original/SS_Commuter.jpg)] h-screen pt-6  w-full flex flex-col justify-end">
        
        <div className='bg-white w-full  flex flex-col mt-10 px-4 py-6'>
          <h2 className='text-2xl font-bold'>HopIn with BookMyCab</h2>
          <Link to="/login" className='w-full flex justify-center border-2 rounded-md mt-7 text-xl font-bold py-2 bg-black text-white'>Continue</Link>
        </div>

      </div>
    </div>
  )
}

export default Start