import React from 'react'
import icons from '../utils/icons'

const {BsSearch}=icons

const Search = () => {
  return (
    <div className='w-full flex items-center'>
     <span className='h-[40px] bg-[#DDE4E4] text-gray-500 flex items-center justify-center rounded-l-[20px] pl-3'>
         <BsSearch size={20} color='' />
      </span> 
      <input type="text" className='bg-[#DDE4E4] outline-none h-[40px] w-full rounded-r-[20px] px-3 py-2 text-gray-500'
      placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
      />
    </div>
  )
}

export default Search