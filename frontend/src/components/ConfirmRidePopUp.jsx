import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const ConfirmRidePopUp = (props) => {

    const [otp, setOtp] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=> {
        props.setRidePopupPanel(false ); 
      }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5> 

        <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to Start!</h3>

        <div className='flex items-center justify-between p-3 bg-gray-200 rounded-lg mt-4 '>
            <div className='flex items-center gap-3'>
                <img className='h-12 w-12 rounded-full object-cover' src="https://i.pinimg.com/736x/fc/2a/f6/fc2af69a5f9d2f9b14ab6e051ca42334.jpg" alt="" />
                <h2 className='text-xl font-medium'>Harsh Patel</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 Miles</h5>
        </div>
        <div className='flex gap-2 justify-between flex-col items-center'>        

        <div className='w-full mt-5'>
            <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill"></i>
                <div>
                    <h3 className='text-lg font-medium'>583/7</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Rewari, Haryana</p>
                </div>
            </div>
            <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                    <h3 className='text-lg font-medium'>583/7</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Rewari, Haryana</p>
                </div>
            </div>
            <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-fill"></i>
                <div>
                    <h3 className='text-lg font-medium'>$ 12.35</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                </div>
            </div>
        </div>
        
        <div className='mt-6 w-full'>
        <form onSubmit={(e) => {
            submitHandler(e);
        }}>

            <input 
            value={otp}
            type="text"
            onChange={(e)=>{
                setOtp(e.target.value);
            }} className='bg-[#eee] px-6 py-4 font-mono text-base rounded-lg w-full mt-3' placeholder='Enter OTP'/>
        <Link to='/captain-riding'
        className='w-full flex justify-center mt-5 text-lg bg-green-600 text-white font-semibold p-2 rounded-lg'>
            Confirm
        </Link>

        <button
        onClick={() => {
            props.setConfirmRidePopupPanel(false );
            props.setRidePopupPanel(false);
  
        }}
        className='w-full mt-2 text-lg bg-red-600 text-white font-semibold p-2 rounded-lg'>
            Cancle Ride</button>
        </form>
        </div>

         
        </div>
    </div>
  )
}

export default ConfirmRidePopUp