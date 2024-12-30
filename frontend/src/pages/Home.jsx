import React from 'react'
import {useGSAP} from '@gsap/react';
import { useState } from 'react';
import { useRef } from'react';
import { gsap } from 'gsap'; // Import gsap here
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';


const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination ] = useState('');
  const [panelOpen, setPanelOpen ] = useState(false);
  const panelRef = useRef(null);  
  const vehiclePanelRef = useRef(null);
  const panelCloseRef = useRef(null); 
  const confirmRidePanelRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false ); 
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault()
  } 

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24,
         opacity: 1
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1
      });

    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0,
         opacity: 0
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
      transform: 'translateY(0)' 
    })
  } else {
    gsap.to(vehiclePanelRef.current, {
      transform: 'translateY(100%)'
  })
}
  }, [vehiclePanel])
  
  useGSAP(() => {
    
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
      transform: 'translateY(0)' 
    })
  } else {
    gsap.to(confirmRidePanelRef.current, {
      transform: 'translateY(100%)'
  })
}
  }, [confirmRidePanel])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1600px-Uber_logo_2018.png' alt=""/>

      <div 
      onClick={()=>{
        setVehiclePanel(false );
      } }
      className='h-screen w-screen'>
        <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full '>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() =>{
            setPanelOpen(false);
          }
          }
          className='absolute opacity-0  right-6 top-6 text-2xl '>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
        <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <div className="line absolute h-16 w-1 top-[43%] left-10 bg-gray-700 roudned-full"></div>
          <input 
          onClick={() => {
            setPanelOpen(true)
          }}
          value={pickup}
          onChange={(e) => {
            setPickup(e.target.value)
          }}
          className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-5 ' 
          type="text" 
          placeholder='Add a pick-up location' />

          <input 
          onClick={() => {
            setPanelOpen(true)
          }}
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value)
          }}
          className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3' 
          type="text" 
           placeholder='Add a drop-off location' />
        </form>
        </div>
        <div ref={panelRef} className='opacity-0 bg-white  h-0'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12 translate-y-full'>    
          <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>

      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full'>    
          <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>

      <div className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full'>    

      </div>

    </div>
  )
}

export default Home