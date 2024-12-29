import React from 'react'
import {useGSAP} from '@gsap/react';
import { useState } from 'react';
import { useRef } from'react';
import { gsap } from 'gsap'; // Import gsap here
import 'remixicon/fonts/remixicon.css'

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination ] = useState('');
  const [panelOpen, setPanelOpen ] = useState(false);
  const panelRef = useRef(null);  
  const panelCloseRef = useRef(null); 

  const submitHandler = (e) => {
    e.preventDefault()
  } 

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%', // Enclose 70% in quotes as it is a percentage value.
        opacity: 1
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1
      });

    } else {
      gsap.to(panelRef.current, {
        height: '0%', // Enclose 0% in quotes as well.
        opacity: 1
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0
      });
    }
  }, [panelOpen]);
  
  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1600px-Uber_logo_2018.png' alt=""/>

      <div className='h-screen w-screen'>
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
        <div ref={panelRef} className='opacity-0 bg-red-500 h-0'>

        </div>
      </div>
    </div>
  )
}

export default Home