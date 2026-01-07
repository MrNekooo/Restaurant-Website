import React from 'react'
import logo from '../images/headerPic.jpg'

const MainHeader = () => {
  return (
    <div className=' relative flex justify-center items-center'>
      <h1 className=' absolute text-white left-25 top-40 font-bold text-7xl leading-25 w-75 max-2xl:top-25 max-xl:left-15 max-xl:top-20 max-xl:text-6xl max-lg:top-15 max-lg:text-5xl max-md:text-4xl max-md:top-5 max-md:left-5 max-md:leading-20 max-sm:text-2xl max-sm:leading-12 max-sm:w-70'>
        <mark className="bg-amber-700 px-7 rounded-4xl">Life</mark> is a combination of magic and <mark className="bg-amber-700 px-7 rounded-4xl">pizza</mark>...
      </h1>
      <img src={logo} alt="Header Logo" className="max-w-full max-h-auto rounded-xl" />
    </div>
  )
}

export default MainHeader