import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './reactLayout/Layout.jsx';
import Accordian from './pagesElement/Accordian/Accordian.jsx';
import Countries from './pagesElement/Countries/Countries.jsx';
import Display from './pagesElement/Display/Display.jsx';
import Explore from './pagesElement/Explore/Explore.jsx';
import Home from './pagesElement/Home/Home.jsx';
import Info from './pagesElement/Info/Info.jsx';
import Post from './pagesElement/Posts/Post.jsx';
import Singin from './pagesElement/Signin/Signin.jsx';
import Signup from './pagesElement/Signup/Signup.jsx';
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={[<Home />,<Info/>,<Display /> ,<Accordian /> ]} />
      <Route path='explore' element={[<Explore />, <Countries /> ]} />
      <Route path='post' element={<Post />} />
      <Route path='signin' element={<Singin />} />
      <Route path='signup' element={<Signup />}/> 
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} / >
  </React.StrictMode>,
)
