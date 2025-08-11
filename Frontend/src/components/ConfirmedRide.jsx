import React from 'react'

function ConfirmedRide(props) {
    const logo = {
        auto: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_470,w_835/v1657101905/assets/af/2c5369-2dec-4ea6-b67b-fba6e4a01f49/original/hcv_final.png",
        car: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco/v1554506931/navigation/UberXL.png",
        motorcycle: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
    }

    if(props.vehicleType === null  ) return null;
    console.log('fare---->', props.fare);
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
                <img className='h-30 w- rounded-2xl' src={logo[props.vehicleType]} alt="" />

                <div className='w-full'>

                    {/* Pickup Point details */}
                    <div className='flex items-center justify-start gap-4'>
                        <i className='text-xl ri-map-2-fill'></i>
                        <div>
                            <h3 className='text-lg font-semibold'>Pickup</h3>
                            <p className='font-semibold text-md text-gray-600'>{props.pickUpLocation}</p>
                        </div>
                    </div>

                    <div className='w-80 h-[1px] bg-gray-300  my-2'></div>

                    {/* Drop Point details */}
                    <div className='flex items-center justify-start gap-4'>
                        <i className='text-xl ri-map-pin-fill'></i>
                        <div>
                            <h3 className='text-lg font-semibold'>Destination</h3>
                            <p className='font-semibold text-md text-gray-600'>{props.dropLocation}</p>
                        </div>
                    </div>

                    <div className='w-80 h-[1px] bg-gray-300  my-2'></div>   

                    {/* Fare Charges Deatils */}
                    <div className='flex items-center justify-start gap-4'>
                        <i className='text-xl ri-currency-line'></i>
                        <div>
                            <h3 className='text-lg font-semibold'>Rs.{props.fare[props.vehicleType]}</h3>
                        </div>
                    </div>

                </div>

            </div>
            <button onClick={() => {
                props.setConfirmRidePanel(false)
                props.setVehicleFound(true)
                console.log("------");
                props.createRide(props.vehicleType)
            }} className='flex justify-center border-2 rounded-md mt-7 text-lg font-bold py-2 px-20 bg-green-500  text-white'>Confirm</button>
        </div>
    </>
  )
}

export default ConfirmedRide;