import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'





function CaptainDetails() {

  const { captain } = useContext(CaptainDataContext);
  console.log(captain);
  return (
     <div className='h-1/2 p-2 flex flex-col justify-between'>
        {/* Captain Personal Detalils */}
        <div className='flex items-center justify-between py-5 px-2'>
            <div className='flex items-center justify-between'>
                <img className='h-15 w-15 object-cover rounded-full' src="https://imgs.search.brave.com/-hxiBbQvaGq6qG6lhwEWvMFTzIa1HWJXy6j0nyD2KfI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXoudG16LmNvbS9p/bWFnZS9mNC80Ynkz/LzIwMjIvMDcvMTcv/ZjQxNTg1NzUyOTg3/NDNjZTk0NTYyNWMw/NDlhOGZhYjJfc20u/anBn" />
                <h4 className='text-lg font-medium px-3'>{captain.fullname.firstname+" "+captain.fullname.lastname}</h4>
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