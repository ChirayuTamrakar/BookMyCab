import React from 'react'
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import { useState } from 'react';


function FinishRide(props) {
  return (
     <>
        <div className='flex flex-col justify-between items-center shadow-lg'>
          {/* Title and Up Down*/}
          <div className='flex flex-col justify-between items-center'>
                <h5 onClick={() => {
                    props.setFinishRidePanel(false)
                }} className=' text-2xl text-gray-500'>
                    <i className="ri-arrow-down-wide-line "></i>
                </h5>
                <h1 className='text-xl font-semibold  mx-4  '>Finish this Ride </h1>
          </div>

          {/*Rider Name+Photo+Distance  */}
          <div className='flex justify-between items-center px-7 w-full my-6'>
            <div className=''>
                <img className='h-15 w-15 object-cover rounded-full' src="https://thumbs.dreamstime.com/b/portrait-normal-man-smiling-over-grey-background-young-face-high-detailed-30820412.jpg" alt="" />
                <h2 className='font-semibold text-lg text-black'>Chris H.</h2>
            </div>
            <div className='font-semibold text-md text-gray-600'>2.2 KM</div>
          </div>
        

            <div  className='flex flex-col justify-between items-center' >
            
                <div className='w-full'>

                    {/* Pickup Point details */}
                    <div className='flex items-center justify-start gap-4'>
                        <i className='text-xl ri-map-2-fill'></i>
                        <div>
                            <h3 className='text-lg font-semibold'>562/11-A</h3>
                            <p className='font-semibold text-sm text-gray-600'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>

                    <div className='w-80 h-[1px] bg-gray-300  my-2'></div>

                    {/* Drop Point details */}
                    <div className='flex items-center justify-start gap-4'>
                        <i className='text-xl ri-map-pin-fill'></i>
                        <div>
                            <h3 className='text-lg font-semibold'>562/11-A</h3>
                            <p className='font-semibold text-sm text-gray-600'>Kankariya Talab, Bhopal</p>
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
            <div className='mt-6 mb-6 rounded-5xl'>
                    < Link to='/captain-riding' className='flex justify-center border-2 rounded-md my-7 mx-5  text-lg font-bold py-2 px-25 bg-green-500  text-white'>Finish this  Ride</Link>
                    <p className='text-xs text-gray-500 mx-7 text-center '>Click on <b> Finish this Ride </b> when you have completed the Payment.</p>
            </div>
        </div>
    </>
  )
}

export default FinishRide