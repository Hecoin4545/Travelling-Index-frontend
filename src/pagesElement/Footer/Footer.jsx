import React from 'react'
import { Button } from '@/components/ui/button'
// import '../Footer/Footer.css'
function Footer() {
  return (
    <>
    <div className="footer-container bg-[#070f2b] mt-3 py-10 px-20 text-white  ">
        <div className="upper-footer-container flex border-spacing-y-7 border-b border-[#e2e8f0] pb-10">
            <div className="info-footer-para w-[40rem]">
                <h1 className=' text-3xl pb-1 font-bold font-[lora]'>Stay Informed</h1>
                <p className='w-[80%] text-sm font-semibold font-[karla]'>Traveling – it leaves you speechless, then turns you into a storyteller.</p>
            </div>
            <div className="buttons-footer-details w-[70rem] flex justify-end items-end">
          <Button variant='secondary' className='cursor-pointer font-bold font-[lora] mr-3' >Survey</Button>
          <Button variant='secondary' className='cursor-pointer font-bold font-[lora]' >Signup</Button>
            </div>
        </div>



        <div className="center-footer-container mt-7 flex justify-between">
            <div className="left-para-footer-center w-[35%]">
                <div className="heading font-[lora] font-bold color text-4xl mb-6">
                <h1>Traveling Index</h1>
                </div>
                <div className="inner-left-footer mb-6">
                    <h1 className='font-[lora] font-semibold text-white text-lg mb-5'>Explore , Experience , Educate</h1>
                    <p className=' text-slate-300 font-[karla] font-sm'>A-21 , Any Place</p>
                    <p className=' text-slate-300 font-[karla] font-sm'>India , Surat</p>
                </div>
                <div className="email-footer-section">
                    <p className=' cursor-pointer '>travellingindex@gmail.com</p>
                </div>
            </div>

            <div className="center-center-footer-section w-[38%]">
                <div className="para-info-center-footer">
                    <h1 className=' text-xl font-[lora] font-medium my-1'>Personal Information</h1>
                    <p className=' text-sm text-slate-300 font-[karla] w-[24rem]'>The website was developed by an  individual ,aged 17 , from India, driven by the aspiration to traverse the globe</p>
                </div>
        <hr className=' mt-3 w-[70%] h-[1px] bg-slate-300 text-white my-2' />

                <div className="para-info-center-footer">
                    <h1 className=' text-xl font-[lora] font-medium'>Dream Place</h1>
                    <p className=' text-sm text-slate-300 font-[karla] w-[24rem]'>The developer's dream destinations include Mongolia, Finland, Norway, Iceland, and numerous others</p>
                </div>
        <hr className=' mt-3 w-[70%] h-[1px] bg-slate-300 text-white my-2' />

                <div className="para-info-center-footer">
                    <h1 className=' text-xl font-[lora] font-medium'>Hobbies</h1>
                    <p className=' text-sm text-slate-300 font-[karla] w-[24rem]'>The developer's hobbies encompass coding, playing volleyball, table tennis, cricket, as well as conducting research on travel and geopolitics</p>
                </div>
        <hr className=' mt-3 w-[70%] h-[1px] bg-slate-300 text-white my-2' />

                <div className="para-info-center-footer">
                    <h1 className=' text-xl font-[lora] font-medium'>Aim</h1>
                    <p className=' text-sm text-slate-300 font-[karla] w-[24rem]'>The aspiration is to develop a product or service with the potential to positively impact millions of users while also aiming for substantial financial success</p>
                </div>
                
            </div>

            <div className="right-center-footer-section w-[28%] ">
                <div className="inner-right-footer-container flex justify-between w-[21rem] ">
                    <div className="left-right-inner-footer">
                        <div className="heading-left-footer">
                            <h1 className='font-[lora] font-semibold text-2xl'>Company</h1>
                        </div>
                        <div className="anchor-right-footer-section">
                        <ul className='mt-1'>
                                <li className=' text-md font-[karla] font-medium text-slate-300 mt-1'><a href='#'>Signup</a></li>
                                <li className=' text-md font-[karla] font-medium text-slate-300 mt-1'><a href='#'>Dashboard</a></li>
                                <li className=' text-md font-[karla] font-medium text-slate-300 mt-1'><a href='#'></a>Post</li>
                                <li className=' text-md font-[karla] font-medium text-slate-300 mt-1'><a href='#'>Home</a></li>
                                <li className=' text-md font-[karla] font-medium text-slate-300 mt-1'><a href='#'>Explore</a></li>
                                <li className=' text-md font-[karla] font-medium text-slate-300 mt-1'><a href='#'>Trending</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-right-inner-footer">
                    <div className="heading-right-footer">

                    <h1 className='font-[lora] font-semibold text-2xl'>Support</h1>
                    </div>
                    <div className="anchor-right-footer-section">
                    <ul className='mt-1'>
                                <li className=' text-md font-[karla] font-medium text-slate-300 mt-1'><a href='#'>Private Policies</a></li>
                                <li className=' text-md font-[karla] font-medium text-slate-300 mt-1'><a href='#'>Terms And Conditions</a></li>
                                <li className=' text-md font-[karla] font-medium text-slate-300 mt-1'><a href='#'></a>Post</li>
                                <li className=' text-md font-[karla] font-medium text-slate-300 mt-1'><a href='#'>Support</a></li>
                                <li className=' text-md font-[karla] font-medium text-slate-300 mt-1'><a href='#'>Bug?</a></li>
                            </ul>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <hr className=' mt-10 w-full h-[1px] bg-white text-white' />

        <div className="lower-footer-container mt-7">
            <div className="para-lower-footer-section">
                <p className='font-[karla] text-center text-sm text-slate-300'>The sights and also viewpoints shared by individuals on this system are their very own and also do not always show the sights of the web site. We urge liable sharing of travel related experiences and also considerate interaction within the area.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer