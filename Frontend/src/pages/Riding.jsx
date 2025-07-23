import React from 'react'
import { Link } from 'react-router-dom'

function Riding() {
  return (
    <> 
    <div className='h-screen flex flex-col'> 

        {/* home */}
            <Link to='/home' className='fixed  h-10 w-10 bg-[#eee] flex items-center rounded-full px-2.5 m-2'>
                <i className='ri-home-5-line text-lg font-extrabold'></i>
            </Link>  
        
        {/* Map screen */}
            <img className=' w-full h-1/2' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"  />

        {/* Information */}
            <div className='h-1/2 px-7 py-5'>
                    {/* Driver's details */}
                    <div className='flex items-center justify-between gap-4'>
                        <img className='h-20 w-30 object-contain' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco/v1554506931/navigation/UberXL.png" alt="" />
                        <div className='flex flex-col items-end'>
                            <h3 className='text-md font-semibold '>Sarthak Shrivanstav</h3>
                            <h3 className='text-md font-semibold -mt-1'>MP09-AB-2730</h3>
                            <p className='font-semibold text-sm text-gray-600'>Mariti Suzuki Alto</p>
                        </div>
                    </div>

                    {/* PickUpPoint */}
                    <div className='w-80 h-[1px] bg-gray-300  my-3'></div>
                    <div className='flex items-center justify-between gap-4'>
                        <i className='text-xl ri-map-pin-fill '></i>
                        <div className='flex flex-col items-end'>
                            <h3 className='text-lg font-semibold'>562/11-A</h3>
                            <p className='font-semibold text-md text-gray-600'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>

                    {/* Fare-Section */}
                    <div className='w-80 h-[1px] bg-gray-300  my-2'></div>
                    <div className='flex items-center justify-between gap-4'>
                        <i className='text-xl ri-currency-line'></i>
                        <div>
                            <h3 className='text-lg font-semibold'>Rs.193.5</h3>
                        </div>
                    </div>
                    
                    <div className='flex justify-center'>
                        <button className='flex justify-center border-2 rounded-md mt-7 text-lg font-bold py-2 px-20 bg-green-500  text-white'>Make a Payment</button>
                    </div>
            </div>
    </div>
    </>
  )
}

export default Riding;