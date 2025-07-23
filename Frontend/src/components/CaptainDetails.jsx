import React from 'react'

function CaptainDetails() {
  return (
     <div className='h-1/2 p-2 flex flex-col justify-between'>
        {/* Captain Personal Detalils */}
        <div className='flex items-center justify-between py-5 px-2'>
            <div className='flex items-center justify-between'>
                <img className='h-15 w-15 object-cover rounded-full' src="https://tse1.mm.bing.net/th/id/OIP.yLqpokLzPRH2zspmkq0b-AHaFW?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" />
                <h4 className='text-lg font-medium px-3'>Harsh Patel</h4>
            </div>
            <div>
                <h4 className='text-xl font-semibold'> Rs.274 </h4>
                <p className='text-sm font-light'> Earned </p>
            </div>
        </div>

        {/* Captain Work Details */}
        <div className='flex justify-between bg-[#d4d3d3] rounded-lg py-4 px-2'>
           
            <div className='text-center'>
                <i className='ri-timer-2-line text-3xl font-thin'></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm font-medium text-gray-600'>Hours Online</p>
            </div>

            <div className='text-center'>
                <i className='ri-speed-up-fill text-3xl font-thin'></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm font-medium text-gray-600'>Hours Online</p>
            </div>

            {/* Captain Working Hours */}
            <div className='text-center'>
                <i className='ri-booklet-line text-3xl font-thin'></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm font-medium text-gray-600'>Hours Online</p>
            </div>
        </div>
    </div>
  )
}

export default CaptainDetails