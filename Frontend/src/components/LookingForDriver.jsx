import React from 'react'

function LookingForDriver() {
  return (
    <>
        <div className='flex flex-col justify-between items-center py-5'>
        
            <div className='flex justify-center'>
                    <h1 className='text-2xl font-semibold mb-4 mx-4  '>Looking for a Driver</h1>
            </div>

            <div  className='flex flex-col justify-between items-center'>
                <img className='h-30 w- rounded-2xl' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco/v1554506931/navigation/UberXL.png" alt="" />
                <div className='w-full'>


                    <div className='flex items-center justify-start gap-4'>
                        <i className='text-xl ri-map-2-fill'></i>
                        <div>
                            <h3 className='text-lg font-semibold'>562/11-A</h3>
                            <p className='font-semibold text-md text-gray-600'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>

                    <div className='w-80 h-[1px] bg-gray-300  my-2'></div>
                    <div className='flex items-center justify-start gap-4'>
                        <i className='text-xl ri-map-pin-fill'></i>
                        <div>
                            <h3 className='text-lg font-semibold'>562/11-A</h3>
                            <p className='font-semibold text-md text-gray-600'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>

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
    </>
  )
}

export default LookingForDriver;