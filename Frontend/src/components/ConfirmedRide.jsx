import React from 'react'

function ConfirmedRide(props) {
  return (
    <>
        <div className='flex flex-col justify-between items-center py-5 '>
          {/* Title and Up Down*/}
          <div className='flex justify-between'>
                <h1 className='text-2xl font-semibold mb-4 mx-4  '>Confirm your Ride</h1>
                <h5 onClick={() => {
                    props.setConfirmRidePanel(false)
                }} className='absolute right-6 text-2xl'>
                    <i className="ri-arrow-down-wide-line"></i>
                </h5>
          </div>
        
          {/*  */}
            <div  className='flex flex-col justify-between items-center' >
                <img className='h-30 w- rounded-2xl' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco/v1554506931/navigation/UberXL.png" alt="" />
            
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
                props.setVehicleFound(true)
                props.setConfirmRidePanel(false)
            }} className='flex justify-center border-2 rounded-md mt-7 text-lg font-bold py-2 px-20 bg-green-500  text-white'>Confirm</button>
        </div>
    </>
  )
}

export default ConfirmedRide;