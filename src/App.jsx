import React from 'react'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Sidebar from './Components/Sidebar'
import Main from './Components/Main'
import Footer from './Components/Footer'
import MainHeader from './Components/MainHeader'

const App = () => {
  return (
    <div className=' flex flex-col content-center justify-center w-11/12 mx-auto'>
        <Header/>
        <MainHeader/>
        <Nav/>
        {/* <Main/> */}
        {/* <Footer/> */}
    </div>
  )
}

export default App