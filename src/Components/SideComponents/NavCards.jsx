import React from 'react'
import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import { RiDrinks2Fill } from "react-icons/ri";
import { FaHotdog } from "react-icons/fa";



const NavCards = () => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-5 mt-20 mb-20 max-xl:gap-5 font-semibold '>
        <div className='flex flex-col justify-center items-center gap-10 text-amber-700 text-5xl border-amber-700 border-2 w-65 h-65 rounded-4xl max-2xl:text-3xl max-2xl:w-50 max-2xl:h-50 max-2xl:gap-6 max-sm:w-35 max-sm:h-35 max-sm:text-xl max-sm:gap-4'>
            <FaPizzaSlice className=' text-7xl max-2xl:text-5xl max-md:text-4xl'/>
            <p className='text-black'>Pizza</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-10 text-amber-700 text-5xl border-amber-700 border-2 w-65 h-65 rounded-4xl max-2xl:text-3xl max-2xl:w-50 max-2xl:h-50 max-2xl:gap-6 max-sm:w-35 max-sm:h-35 max-sm:text-xl max-sm:gap-4'>
            <FaHamburger className=' text-7xl max-2xl:text-5xl max-md:text-4xl'/>
            <p className='text-black'>Burgers</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-10 text-amber-700 text-5xl border-amber-700 border-2 w-65 h-65 rounded-4xl max-2xl:text-3xl max-2xl:w-50 max-2xl:h-50 max-2xl:gap-6 max-sm:w-35 max-sm:h-35 max-sm:text-xl max-sm:gap-4'>
            <GiNoodles className=' text-7xl max-2xl:text-5xl max-md:text-4xl'/>
            <p className='text-black'>Noodles</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-10 text-amber-700 text-5xl border-amber-700 border-2 w-65 h-65 rounded-4xl max-2xl:text-3xl max-2xl:w-50 max-2xl:h-50 max-2xl:gap-6 max-sm:w-35 max-sm:h-35 max-sm:text-xl max-sm:gap-4'>
            <RiDrinks2Fill className=' text-7xl max-2xl:text-5xl max-md:text-4xl'/>
            <p className='text-black'>Drinks</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-10 text-amber-700 text-5xl border-amber-700 border-2 w-65 h-65 rounded-4xl max-2xl:text-3xl max-2xl:w-50 max-2xl:h-50 max-2xl:gap-6 max-sm:w-35 max-sm:h-35 max-sm:text-xl max-sm:gap-4'>
            <FaHotdog className=' text-7xl max-2xl:text-5xl max-md:text-4xl'/>
            <p className='text-black'>Hotdogs</p>
        </div>
    </div>
  )
}

export default NavCards