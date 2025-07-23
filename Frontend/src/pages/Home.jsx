import React, { useRef } from 'react'
import { useState } from 'react';
import { useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

function Home() {
  const [pickUpLocation, setPickUpLocation] = useState("")
  const [dropLocation, setDropLocation] = useState("")
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const vehiclePanelCloseRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const confirmRideClosePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const WaitingForDriverRef = useRef(null);



  const submitHandler = (e) => {
    e.preventDefault();
  }

 //GSAP is animation Library
  useGSAP(function(){
    if( panelOpen ){
        gsap.to(panelRef.current,{
        height: '75%',
        opacity: 1
       })
        gsap.to(panelCloseRef.current,{
        opacity: 1
       })
    } else {
        gsap.to(panelRef.current,{
        height: '0%',
        })
        gsap.to(panelCloseRef.current,{
        opacity: 0
       })
    }
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(0)',

      })
      gsap.to(vehiclePanelCloseRef.current,{
        opacity: 1
      })
    } else {
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(100%)',
      })
    }
  },[vehiclePanel])

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform: 'translateY(0)'
      })
      gsap.to(confirmRideClosePanelRef.current,{
        opacity: 1
      })
    } else {
      gsap.to(confirmRidePanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[confirmRidePanel])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehicleFoundRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[vehicleFound])

    useGSAP(function(){
    if(waitingForDriver){
      gsap.to(WaitingForDriverRef.current,{
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(WaitingForDriverRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[waitingForDriver])





  return (
    <>
      <div className='h-screen relative overflow-hidden'>
        {/* map screen */}
        <div className='h-screen w-screen' >
          <img className='h-full w-full object-' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        
        {/* Pickup N Drop feilds----PanelOpen */}
        <div className=' h-screen flex flex-col absolute bottom-0 justify-end'>
          <div className='bg-white h-[25%] px-4 py-2 relative'>
           
              <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(false)
                    }} className='absolute opacity-1 right-6 text-2xl'>
                        <i className="ri-arrow-down-wide-line"></i>
              </h5>
              <h4 className='text-2xl font-semibold px-4 py-1'>Find a trip</h4>
          
            <form onSubmit={(e)=>{
              submitHandler(e);
            }}>
              <div className='line mt-6 ml-3 bg-gray-500 h-14 w-1 absolute rounded-full '></div>
              <input 
              className='bg-[#eee] my-2 border-1 border-white rounded-sm text-lg placeholder:text-base w-full py-1 px-7 '
              required 
              onClick = {()=>{
                setPanelOpen(true)}}
              value={pickUpLocation}
              onChange={(e) => {setPickUpLocation(e.target.value); }}
              type="text" 
              placeholder="Add your pick up location" />

              <input 
              className='bg-[#eee] my-2 border-1 border-white rounded-sm text-lg placeholder:text-base w-full py-1 px-7'
              required 
              onClick = {()=>{
                setPanelOpen(true)
              }}
              value={dropLocation}
              onChange={(e) => {setDropLocation(e.target.value); }}
              type="text" 
              placeholder="Enter your destination" />
            </form>
          </div>
          
          {/* Location */}
          <div ref ={panelRef} className='h-[0%] bg-white '>
              <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
          </div>
        </div>        

        {/* Choose the Vehicle------VehiclePanel */}
        <div ref={vehiclePanelRef} className='fixed z-10 w-full items-center bottom-0 translate-y-full py-4 bg-white rounded-t-md shadow-2xl'>
          <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} vehiclePanelCloseRef={vehiclePanelCloseRef} />
        </div>

        {/* Confirmed Ride------ */}
        <div ref={confirmRidePanelRef} className='fixed z-10 w-full items-center bottom-0 translate-y-full py-4 bg-white rounded-t-md shadow-2xl'>
          <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}  />
        </div>

        {/* Looking For  Ride------ */}
        <div ref={vehicleFoundRef} className='fixed z-10 w-full items-center bottom-0 translate-y-full py-4 bg-white rounded-t-md shadow-2xl'>
          <LookingForDriver />
        </div>

        {/* Waiting For  Driver------ */}
        <div ref ={WaitingForDriverRef} className='fixed z-10 w-full items-center translate-y-full bottom-0 l py-4 bg-white rounded-t-md shadow-2xl'>
          <WaitingForDriver  setWaitingForDriver={setWaitingForDriver}   />
        </div>



      </div>
    </>
  )
}

export default Home;