import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide';
import { useGSAP} from '@gsap/react';
import gsap from 'gsap';


export default function CaptainRiding() {

    const [finishRidePanel, setFinishRidePanel] = useState(false);

    const finishRideRef = useRef(null)

    useGSAP(function(){
        if(finishRidePanel){
          gsap.to(finishRideRef.current,{
            transform: 'translateY(0)'
          })
        } else {
          gsap.to(finishRideRef.current,{
            transform: 'translateY(100%)'
          })
        }
    },[finishRidePanel])

  return (
       <> 
        <div className='h-screen flex flex-col'> 

            {/* home */}
                <div>
                    <Link to='/captain-home' className='fixed  h-10 w-10 bg-[#eee] flex items-center rounded-full px-2.5 m-2'>
                        <i className='ri-logout-box-r-line text-lg font-extrabold'></i>
                    </Link> 
                </div> 
            
            {/* Map screen */}
            <div className='h-4/5'>
              <img className=' w-full h-full' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"  />
            </div>

            {/* ditance away + completion button */}
            <div onClick={(e)=>setFinishRidePanel(true)} className='flex flex-col  h-1/5 bg-yellow-400 rounded-t-3xl '>
                <h5 className=' right-6 text-2xl text-center text-gray-500 '>
                    <i className="ri-arrow-up-wide-line "></i>
                </h5>
                <h4 className='font-semibold text-lg text-gray-500 text-center'>4 km away</h4>
                <button className='flex justify-center border-gray-400 border-2 rounded-md mt-2 text-lg font-bold py-2 px-2 mx-7 bg-green-400  text-white'> Ride Complete</button>
            </div>  


            {/*  */}
            <div ref ={finishRideRef} className='fixed z-10 w-full items-center translate-y-full bottom-0 l py-4 bg-white rounded-t-md shadow-2xl'>
                <FinishRide setFinishRidePanel={ setFinishRidePanel}   />
            </div> 
            
        </div>
    </>
  )
}
