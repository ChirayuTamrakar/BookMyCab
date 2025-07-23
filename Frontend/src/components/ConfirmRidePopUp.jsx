import React from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import { useState } from 'react';

function ConfirmRidePopUp(props) {

    const [otp, setOtp] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
    }

  return (
     <>
        <div className='flex flex-col justify-between items-center py-5 '>
          {/* Title and Up Down*/}
          <div className='flex justify-between'>
                <h1 className='text-2xl font-semibold mb-4 mx-4  '>Confirm Ride Available</h1>
                <h5 onClick={() => {
                    props.setConfirmRidePopUpPanel(false)
                }} className='absolute right-6 text-2xl '>
                    <i className="ri-arrow-down-wide-line "></i>
                </h5>
          </div>

          {/*Rider Name+Photo+Distance  */}
          <div className='flex justify-between items-center px-7 w-full my-2'>
            <div className=''>
                <img className='h-15 w-15 object-cover rounded-full' src="https://thumbs.dreamstime.com/b/portrait-normal-man-smiling-over-grey-background-young-face-high-detailed-30820412.jpg" alt="" />
                <h2 className='font-semibold text-lg text-black'>Chris H.</h2>
            </div>
            <div className='font-semibold text-md text-gray-600'>2.2 KM</div>
          </div>
        
            {/*  */}
            <div  className='flex flex-col justify-between items-center' >
            
                <div className='w-full'>

                    {/* Pickup Point details */}
                    <div className='flex items-center justify-start gap-4'>
                        <i className='text-xl ri-map-2-fill'></i>
                        <div>
                            <h3 className='text-lg font-semibold'>562/11-A</h3>
                            <p className='font-semibold text-md text-gray-600'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>

                    <div className='w-80 h-[1px] bg-gray-300  my-2'></div>

                    {/* Drop Point details */}
                    <div className='flex items-center justify-start gap-4'>
                        <i className='text-xl ri-map-pin-fill'></i>
                        <div>
                            <h3 className='text-lg font-semibold'>562/11-A</h3>
                            <p className='font-semibold text-md text-gray-600'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>

                    <div className='w-80 h-[1px] bg-gray-300  my-2'></div>   

                    {/* Fare Charges Deatils */}
                    <div className='flex items-center justify-start gap-4'>
                        <i className='text-xl ri-currency-line'></i>
                        <div>
                            <h3 className='text-lg font-semibold'>Rs.193.5</h3>
                        </div>
                    </div>

                </div>

            </div>
            <div className='mt-6'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }}>

                    <input type='text' 
                    className='bg-[#eee] my-2 border-1 border-white rounded-sm text-lg placeholder:text-base w-full py-1 px-7'  
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e)=> setOtp(e.target.value)}/>
                    
                    < Link to='/captain-riding' className='flex justify-center border-2 rounded-md mt-7 text-lg font-bold py-2 px-25 bg-green-500  text-white'>Accept</Link>
                    <button onClick={() => { 
                        props.setConfirmRidePopUpPanel(false);
                        props.setRidePopUpPanel(false);
                    }} className='flex justify-center border-2 rounded-md mt-2 text-lg font-bold py-2 px-27 bg-red-400  text-white'>Cancel</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default ConfirmRidePopUp;
