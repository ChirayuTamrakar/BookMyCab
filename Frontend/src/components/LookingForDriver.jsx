import React from 'react'

function LookingForDriver(props) {
    const logo = {
        auto: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_470,w_835/v1657101905/assets/af/2c5369-2dec-4ea6-b67b-fba6e4a01f49/original/hcv_final.png",
        car: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco/v1554506931/navigation/UberXL.png",
        motorcycle: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
    }
  return (
    <>
        <div className='flex flex-col justify-between items-center py-5'>
        
            <div className='flex justify-center'>
                    <h1 className='text-2xl font-semibold mb-4 mx-4  '>Looking for a Driver</h1>
            </div>

            <div  className='flex flex-col justify-between items-center'>
                <img className='h-30 w- rounded-2xl' src={logo[props.vehicleType]} alt="" />
                <div className='w-full'>


                    <div className='flex items-center justify-start gap-4'>
                        <i className='text-xl ri-map-2-fill'></i>
                        <div>
                            <h3 className='text-lg font-semibold'>Pickup Location</h3>
                            <p className='font-semibold text-md text-gray-600'>{props.pickUpLocation}</p>
                        </div>
                    </div>

                    <div className='w-80 h-[1px] bg-gray-300  my-2'></div>
                    <div className='flex items-center justify-start gap-4'>
                        <i className='text-xl ri-map-pin-fill'></i>
                        <div>
                            <h3 className='text-lg font-semibold'>Drop Location</h3>
                            <p className='font-semibold text-md text-gray-600'>{props.dropLocation}</p>
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