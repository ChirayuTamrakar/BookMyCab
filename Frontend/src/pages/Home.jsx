import React, { useContext, useEffect, useRef } from 'react'
import { useState } from 'react';
import { useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import axios from 'axios';
import { SocketContext } from '../context/SocketContext.jsx';
import { UserContext } from '../context/UserContext.jsx';

function Home() {
  const [pickUpLocation, setPickUpLocation] = useState("")
  const [dropLocation, setDropLocation] = useState("")
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [activeField, setActiveField] = useState("");
  const [fare, setFare] = useState(null);
  const [vehicleType, setVehicleType] = useState(null);
  const { sendMessage, receiveMessage } = useContext(SocketContext); // Assuming you have a custom hook for socket communication
  const { user } = useContext(UserContext);


  useEffect(() => {
    sendMessage("join", { userType: "user", userId: user._id});
  }, [sendMessage, user._id]);

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

// GSAP is animation Library
useGSAP(() => {
  if (panelRef.current) {
    gsap.to(panelRef.current, {
      height: panelOpen ? '75%' : '0%',
      opacity: panelOpen ? 1 : 0,
      duration: 0.4,
      ease: 'power2.out',
    });
  }

  if (panelCloseRef.current) {
    gsap.to(panelCloseRef.current, {
      opacity: panelOpen ? 1 : 0,
      duration: 0.3,
    });
  }
}, [panelOpen]);

useGSAP(() => {
  if (vehiclePanelRef.current) {
    gsap.to(vehiclePanelRef.current, {
      transform: vehiclePanel ? 'translateY(0)' : 'translateY(100%)',
      duration: 0.4,
      ease: 'power2.out',
    });
  }

  if (vehiclePanelCloseRef.current) {
    gsap.to(vehiclePanelCloseRef.current, {
      opacity: vehiclePanel ? 1 : 0,
      duration: 0.3,
    });
  }
}, [vehiclePanel]);

useGSAP(() => {
  if (confirmRidePanelRef.current) {
    gsap.to(confirmRidePanelRef.current, {
      transform: confirmRidePanel ? 'translateY(0)' : 'translateY(100%)',
      duration: 0.4,
      ease: 'power2.out',
    });
  }

  if (confirmRideClosePanelRef.current) {
    gsap.to(confirmRideClosePanelRef.current, {
      opacity: confirmRidePanel ? 1 : 0,
      duration: 0.3,
    });
  }
}, [confirmRidePanel]);

useGSAP(() => {
  if (vehicleFoundRef.current) {
    gsap.to(vehicleFoundRef.current, {
      transform: vehicleFound ? 'translateY(0%)' : 'translateY(110%)',
      duration: 0.4,
      ease: 'power2.out',
    });
  }
}, [vehicleFound]);

useGSAP(() => {
  if (WaitingForDriverRef.current) {
    gsap.to(WaitingForDriverRef.current, {
      transform: waitingForDriver ? 'translateY(0)' : 'translateY(100%)',
      duration: 0.4,
      ease: 'power2.out',
    });
  }
}, [waitingForDriver]);

 async function findTrip(){
    setVehiclePanel(true);
    setPanelOpen(false);
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`,
      {
        params: {
          pickup: pickUpLocation,
          destination: dropLocation,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    setFare(response.data);
  }

  async function createRide(vehicleType) {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
      pickup: pickUpLocation,
      destination: dropLocation,
      vehicleType: vehicleType
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    console.log(response.data);
  }


  return (
    <>
      <div className='h-screen relative overflow-hidden'>
        {/* map screen */}
        <div className='h-screen w-screen' >
          <img className='h-full w-full object-' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        
        {/* Pickup N Drop feilds----PanelOpen */}
        <div className=' h-screen flex flex-col absolute bottom-0 justify-end'>
          <div className='bg-white h-[35%] px-4 py-2 relative'>
           
              <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(false)
                    }} className='absolute opacity-1 right-6 text-2xl'>
                        <i className="ri-arrow-down-wide-line"></i>
              </h5>
              <h4 className='text-2xl font-semibold px-4 py-1'>Find a trip</h4>
          
            <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
              <div className='line mt-6 ml-3 bg-gray-500 h-14 w-1 absolute rounded-full '></div>
              <input 
              className='bg-[#eee] my-2 border-1 border-white rounded-sm text-lg placeholder:text-base w-full py-1 px-7 '
              required 
              onClick = {()=>{
                setPanelOpen(true)
                setActiveField("pickup");
              }}
              value={pickUpLocation}
              onChange={(e) => {setPickUpLocation(e.target.value); }}
              type="text" 
              placeholder="Add your pick up location" />

              <input 
              className='bg-[#eee] my-2 border-1 border-white rounded-sm text-lg placeholder:text-base w-full py-1 px-7'
              required 
              onClick = {()=>{
                setPanelOpen(true);         // <-- Add this line!
                setActiveField("drop");
              }}
              value={dropLocation}
              onChange={(e) => {setDropLocation(e.target.value); }}
              type="text" 
              placeholder="Enter your destination" />

            </form>
              <button 
                onClick={findTrip}
                className='w-full flex justify-center border-2 rounded-md mt-2 text-md font-bold py-1 bg-black text-white' type="submit">Find Trip</button>
          </div>
          
          {/* Location */}
          {panelOpen && (
          <div ref={panelRef} className='h-[0%] bg-white '>
            <LocationSearchPanel 
              setPanelOpen={setPanelOpen} 
              setVehiclePanel={setVehiclePanel} 
              inputValue={activeField === "pickup" ? pickUpLocation : dropLocation}
              setInputValue={activeField === "pickup" ? setPickUpLocation : setDropLocation}
            />
          </div>
)}
        </div>        

        {/* Choose the Vehicle------VehiclePanel */}
        <div ref={vehiclePanelRef} className='fixed z-10 w-full items-center bottom-0 translate-y-full py-4 bg-white rounded-t-md shadow-2xl'>
          <VehiclePanel 
            selectVehicle={setVehicleType} 
            fare={fare} 
            setConfirmRidePanel={setConfirmRidePanel} 
            setVehiclePanel={setVehiclePanel} 
            vehiclePanelCloseRef={vehiclePanelCloseRef} />
        </div>

        {/* Confirmed Ride------ */}
        <div ref={confirmRidePanelRef} className='fixed z-10 w-full items-center bottom-0 translate-y-full py-4 bg-white rounded-t-md shadow-2xl'>
          <ConfirmedRide 
          vehicleType={vehicleType} 
          createRide={createRide} 
          setConfirmRidePanel={setConfirmRidePanel} 
          setVehicleFound={setVehicleFound}  
          pickUpLocation={pickUpLocation}
          dropLocation={dropLocation}
          fare={fare} />

        </div>

        {/* Looking For  Ride------ */}
        <div ref={vehicleFoundRef} className='fixed z-10 w-full items-center bottom-0 translate-y-full py-4 bg-white rounded-t-md shadow-2xl'>
          <LookingForDriver
            vehicleType={vehicleType} 
            pickUpLocation={pickUpLocation}
            dropLocation={dropLocation}
            fare={fare} />
        </div>

        {/* Waiting For  Driver------ */}
        <div ref ={WaitingForDriverRef} className='fixed z-10 w-full items-center translate-y-full bottom-0 l py-4 bg-white rounded-t-md shadow-2xl'>
          <WaitingForDriver setWaitingForDriver={setWaitingForDriver}   />
        </div>

              
      </div>
    </>
  )
}

export default Home;