import React from 'react'
import Navbar from './pagesElement/Navbar/Navbar.jsx'
import Home from './pagesElement/Home/Home.jsx'
import Display from './pagesElement/Display/Display.jsx'
import Info from './pagesElement/Info/Info.jsx'
import Accordian from './pagesElement/Accordian/Accordian.jsx'
import Footer from './pagesElement/Footer/Footer.jsx'
import Explore from './pagesElement/Explore/Explore.jsx'
import Signup from './pagesElement/Signup/Signup.jsx'
import Signin from './pagesElement/Signin/Signin.jsx'

function App() {

  return (
    <>
    <Navbar />
    {/* <Explore /> */}
    {/* <Signup /> */}
    <Home />
    <Info />
    <Display />
    <Accordian />    
    {/* <Signin /> */}
    <Footer />
    </>
  )
}

export default App
