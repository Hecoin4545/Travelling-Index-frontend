import React from 'react'
import Navbar from '../pagesElement/Navbar/Navbar.jsx'
import Footer from '../pagesElement/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <> 
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout