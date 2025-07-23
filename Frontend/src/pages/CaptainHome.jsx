import React from 'react';
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import ConfirmRidePopUp from '../components/confirmRidePopUp';
import { useState, useRef } from 'react';
import { useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'



function Riding() {
    const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
    const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);

    const ridePopUpRef = useRef(null)
    const confirmRidePopUpRef = useRef(null);


    useGSAP(function(){
    if(ridePopUpPanel){
      gsap.to(ridePopUpRef.current,{
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopUpRef.current,{
        transform: 'translateY(100%)'
      })
    }
    },[ridePopUpPanel])


    useGSAP(function(){
    if(confirmRidePopUpPanel){
      gsap.to(confirmRidePopUpRef.current,{
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePopUpRef.current,{
        transform: 'translateY(100%)'
      })
    }
    },[confirmRidePopUpPanel])



  return (
    <> 
        <div className='h-screen flex flex-col'> 

            {/* home */}
                <div>
                    <Link to='/home' className='fixed  h-10 w-10 bg-[#eee] flex items-center rounded-full px-2.5 m-2'>
                        <i className='ri-logout-box-r-line text-lg font-extrabold'></i>
                    </Link> 
                </div> 
            
            {/* Map screen */}
            <div className='h-3/5'>
              <img className=' w-full' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"  />
            </div>


            {/* Information */}
            <div className='h-2/'>
               <CaptainDetails />
            </div>


            <div ref={ridePopUpRef} className='fixed z-10 w-full items-center translate-y-full bottom-0  py-4 bg-white rounded-t-md shadow-2xl'>
                <RidePopUp  setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>
            </div>

            <div ref={confirmRidePopUpRef} className='h-screen fixed z-10 w-full items-center translate-y-full bottom-0  py-4 bg-white rounded-t-md shadow-2xl'>
                <ConfirmRidePopUp  setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>
            </div>
            
        </div>
    </>
  )
}



export default Riding;