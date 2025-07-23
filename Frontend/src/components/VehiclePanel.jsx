import React from 'react'

function VehiclePanel(props) {
  return (
    <>
        <div className='flex justify-between'>
          <h3 className='text-xl font-semibold mb-4 mx-4'>Choose a vehicle</h3>
          <h5 ref={props.vehiclePanelCloseRef} onClick={() => {
            props.setVehiclePanel(false)
          }} className='absolute opacity-0 right-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
        </div>
        {/* Car */}
        <div onClick={()=>{
          props.setConfirmRidePanel(true)}}
          className='flex border-3  shadow-xl border-gray-400 active:border-gray-500 bg-white rounded-lg mx-3 items-center justify-between my-3' >
            <img className='h-20 w-[27%] rounded-2xl' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco/v1554506931/navigation/UberXL.png" alt="" />
            <div className='flex w-[50%] flex-col '>
              <h4 className='font-medium text-sm'> UberGo <span><i className='ri-user-3-fill ps-1'></i>4</span> </h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
            </div>
            <h2 className='w-[23%] px-4 py-6 font-semibold text-md'>₹193.5</h2>
        </div>
        {/* MiniVan */}
        <div onClick={()=>{
          props.setConfirmRidePanel(true)}} 
          className='flex border-3  shadow-xl border-gray-400 active:border-gray-500 bg-white rounded-lg mx-3 items-center justify-between my-3' >
            <img className='h-20 w-[27%] object-cover pb-1 rounded-2xl' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_470,w_835/v1657101905/assets/af/2c5369-2dec-4ea6-b67b-fba6e4a01f49/original/hcv_final.png" alt="" />
            <div className='flex w-[50%] flex-col '>
              <h4 className='font-medium text-sm'> Mini Van <span><i className='ri-user-3-fill ps-1'></i>6</span> </h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
            </div>
            <h2 className='w-[23%] px-4 py-6 font-semibold text-md'>₹350.5</h2>
        </div>
        {/* Bike */}
        <div onClick={()=>{
          props.setConfirmRidePanel(true)}}  
          className='flex border-3 shadow-xl border-gray-400 active:border-gray-500 bg-white rounded-lg mx-3 items-center justify-between my-3' >
            <img className='h-20 w-[27%] object-cover py-2 rounded-2xl' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
            <div className='flex w-[50%] flex-col  '>
              <h4 className='font-medium text-sm'> Moto <span><i className='ri-user-3-fill ps-1'></i>1</span> </h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-medium text-xs text-gray-600'>Affordable Motorcycle bike</p>
            </div>
            <h2 className='w-[23%] px-4 py-6 font-semibold text-md '>₹75.5</h2>
        </div>
    </>
  )
}

export default VehiclePanel