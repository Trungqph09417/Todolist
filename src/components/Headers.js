import React from 'react'
import icons from '../utils/icons'
import Search from './Search'
const{HiArrowSmallLeft,HiArrowSmallRight}=icons
const Headers = () => {
  return (
    <div className='h-[70px] flex gap-5 justify-between items-center w-full '>
    <div className='flex gap-2 items-center w-full'>
      <div className='flex gap-2 text-gray-400'> 
        <HiArrowSmallLeft size={24} />
        <HiArrowSmallRight size={24} />
      </div>
      <div className='w-[440px]'>
        <Search/>
      </div>
    </div>
    <div>Login </div>
  </div>
  )
}

export default Headers