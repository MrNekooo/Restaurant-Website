import React from 'react'
import HeaderList from './SideComponents/HeaderList'
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
            <HeaderList/>
        </div>
    </div>
  )
}

export default Header