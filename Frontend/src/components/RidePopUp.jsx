import React from 'react'

function RidePopUp(props) {
  return (
    <>
        <div className='flex flex-col justify-between items-center py-5 '>
          {/* Title and Up Down*/}
          <div className='flex justify-between'>
                <h1 className='text-2xl font-semibold mb-4 mx-4  '>New Ride Available</h1>
                <h5 onClick={() => {
                    props.setRidePopUpPanel(false)
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
            <button onClick={() => { 
                props.setRidePopUpPanel(false);
                props.setConfirmRidePopUpPanel(true);
            }} className='flex justify-center border-2 rounded-md mt-7 text-lg font-bold py-2 px-25 bg-green-500  text-white'>Accept</button>
            
            <button onClick={() => { 
                props.setRidePopUpPanel(false);
            }} className='flex justify-center border-2 rounded-md mt-2 text-lg font-bold py-2 px-27 bg-gray-400  text-white'>Ignore</button>
        </div>
    </>
  ) 
}

export default RidePopUp