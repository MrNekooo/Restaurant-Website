import React from 'react'

const HeaderList = () => {
  return (
    <ul className='flex justify-center items-center gap-4 font-semibold text-amber-700'>
        <a href='#'><li className=' px-4 py-2 rounded-lg hover:bg-amber-700 hover:text-white transition-all duration-200'>Home</li></a>
        <a href='#'><li className=' px-4 py-2 rounded-lg hover:bg-amber-700 hover:text-white transition-all duration-200'>Menu</li></a>
        <a href='#'><li className=' px-4 py-2 rounded-lg hover:bg-amber-700 hover:text-white transition-all duration-200'>Contact</li></a>
        <a href='#'><li className=' px-4 py-2 rounded-lg hover:bg-amber-700 hover:text-white transition-all duration-200'>About us</li></a>
    </ul>
  )
}

export default HeaderList