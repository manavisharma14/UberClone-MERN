import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-lg font-medium ri-home-5-line"></i> 
        </Link>

        <div className='h-1/2'>
            <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>

        <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
        <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png" alt="" />
        <div className='text-right'>
          <h2 className='text-lg font-medium'>Rahil</h2>
          <h4 className='text-sl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>

        </div>
        </div>

        <div className='flex gap-2 justify-between flex-col items-center'>

        <div className='w-full mt-5'>
            
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
        </div>
            <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>
                Make a Payment
            </button>
        </div>
    </div>
  )
}

export default Riding