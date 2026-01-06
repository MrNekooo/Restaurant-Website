import React, { useState } from 'react'
import HeaderList from './SideComponents/HeaderList'
import Sidebar from './Sidebar'
import Logo from '../images/logo.png'
import { FiMenu } from "react-icons/fi";


const Header = () => {

  return (
    <div className='flex justify-between content-center'>
        <div>
            <img src={Logo}
                 alt='Logo'
                 className='h-auto max-w-30'></img>
        </div>
        <div className='flex justify-center'>
            <HeaderList/>
            {/* <button type='button'>  </button> */}
            {/* <Sidebar/> */}
        </div>
    </div>
  )
}

export default Header