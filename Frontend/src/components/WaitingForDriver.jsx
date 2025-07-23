import React from 'react'

function WaitingForDriver(props) {
  return (
        <div className='flex flex-col justify-between items-center py-5'>
        
            <div className='flex justify-between'>
                <h2 className='text-xl font-semibold mb-4 mx-4  '>Waiting for a Driver</h2>
                <h5 onClick={() => {
                    props.setWaitingForDriver(prev => !prev);
                }} className='absolute right-6 text-2xl'>
                    <i className="ri-line-fill"></i>
                </h5>

            </div>

            <div  className='flex flex-col justify-between items-center'>
                <div className='w-full'>

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
                    <div className='w-80 h-[1px] bg-gray-300  my-2'></div>
                    <div className='flex items-center justify-start gap-4'>
                        <i className='text-xl ri-map-pin-fill'></i>
                        <div>
                            <h3 className='text-lg font-semibold'>562/11-A</h3>
                            <p className='font-semibold text-md text-gray-600'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>

                    {/* Fare-Section */}
                    <div className='w-80 h-[1px] bg-gray-300  my-2'></div>
                    <div className='flex items-center justify-start gap-4'>
                        <i className='text-xl ri-currency-line'></i>
                        <div>
                            <h3 className='text-lg font-semibold'>Rs.193.5</h3>
                        </div>
                    </div>

                    
                </div>
            </div>

        </div>
  )
}

export default WaitingForDriver