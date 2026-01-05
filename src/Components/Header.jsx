import React from 'react'
import Logo from '../images/logo.png'

const Header = () => {
  return (
    <div className='flex justify-between content-center'>
        <div>
            <img src={Logo}
                 alt='Logo'
                 className='h-auto max-w-30'></img>
        </div>
        <div className='flex justify-center'>
            <ul className='flex justify-center items-center gap-8'>
                <a href='#'><li>Home</li></a>
                <a href='#'><li>Menu</li></a>
                <a href='#'><li>Contact</li></a>
                <a href='#'><li>About us</li></a>
            </ul>
        </div>
    </div>
  )
}

export default Header