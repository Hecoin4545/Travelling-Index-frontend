import React from 'react'
import { Button } from '@/components/ui/button'

function Footer() {
  return (
    <>
    <div className="footer-container bg-[#070f2b] mt-3 py-10 px-20 text-white ">
        <div className="upper-footer-container flex">
            <div className="info-footer-para w-[40rem]">
                <h1 className=' text-3xl pb-1 font-bold font-[lora]'>Stay Informed</h1>
                <p className='w-[80%] text-sm font-semibold font-[karla]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur.</p>
            </div>
            <div className="buttons-footer-details w-[70rem] flex justify-end items-end">
          <Button variant='secondary' className='cursor-pointer font-bold font-[lora] mr-3' >Survey</Button>
          <Button variant='secondary' className='cursor-pointer font-bold font-[lora]' >Signup</Button>
            </div>
        </div>
        <hr className=' mt-10 w-full h-[1px] bg-white text-white' />



        <div className="center-footer-container mt-7 flex justify-between">
            <div className="left-para-footer-center w-[30%]">
                <div className="heading font-[lora] font-bold color text-4xl mb-6">
                <h1>Traveling Index</h1>
                </div>
                <div className="inner-left-footer mb-6">
                    <h1 className='font-[lora] font-semibold text-white text-lg'>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p className=' text-slate-300 font-[karla] font-sm'>Lorem ipsum dolor sit, amet consectetur </p>
                    <p className=' text-slate-300 font-[karla] font-sm'>India Surat</p>
                </div>
                <div className="email-footer-section">
                    <p className=' cursor-pointer '>travelingindex@gmail.com</p>
                </div>
            </div>

            <div className="center-center-footer-section w-[45%]">
                <div className="para-info-center-footer">
                    <h1 className=' text-xl font-[lora] font-medium'>Lorem ipsum dolor sit amet.</h1>
                    <p className=' text-md text-slate-300 font-[karla] w-[28rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima vero eum sit dicta distinctio!</p>
                </div>
        <hr className=' mt-3 w-full h-[1px] bg-slate-300 text-white' />

                <div className="para-info-center-footer">
                    <h1 className=' text-xl font-[lora] font-medium'>Lorem ipsum dolor sit amet.</h1>
                    <p className=' text-md text-slate-300 font-[karla] w-[28rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima vero eum sit dicta distinctio!</p>
                </div>
        <hr className=' mt-3 w-full h-[1px] bg-slate-300 text-white' />

                <div className="para-info-center-footer">
                    <h1 className=' text-xl font-[lora] font-medium'>Lorem ipsum dolor sit amet.</h1>
                    <p className=' text-md text-slate-300 font-[karla] w-[28rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima vero eum sit dicta distinctio!</p>
                </div>
        <hr className=' mt-3 w-full h-[1px] bg-slate-300 text-white' />

                <div className="para-info-center-footer">
                    <h1 className=' text-xl font-[lora] font-medium'>Lorem ipsum dolor sit amet.</h1>
                    <p className=' text-md text-slate-300 font-[karla] w-[28rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima vero eum sit dicta distinctio!</p>
                </div>
                
            </div>

            <div className="right-center-footer-section w-[30%] px-[7rem]">
                <div className="inner-right-footer-container flex justify-between w-[15rem] ">
                    <div className="left-right-inner-footer">
                        <div className="heading-left-footer">
                            <h1 className='font-[lora] font-semibold text-2xl'>Lorem</h1>
                        </div>
                        <div className="anchor-right-footer-section">
                            <ul>
                                <li className=' text-md font-[karla] font-medium text-slate-300'>Home</li>
                                <li className=' text-md font-[karla] font-medium text-slate-300'>Home</li>
                                <li className=' text-md font-[karla] font-medium text-slate-300'>Home</li>
                                <li className=' text-md font-[karla] font-medium text-slate-300'>Home</li>
                                <li className=' text-md font-[karla] font-medium text-slate-300'>Home</li>
                                <li className=' text-md font-[karla] font-medium text-slate-300'>Home</li>
                                <li className=' text-md font-[karla] font-medium text-slate-300'>Home</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-right-inner-footer">
                    <div className="heading-right-footer">

                    <h1 className='font-[lora] font-semibold text-2xl'>Lorem</h1>
                    </div>
                    <div className="anchor-right-footer-section">
                        <ul>
                            <li className=' text-md font-[karla] font-medium text-slate-300'>Home</li>
                            <li className=' text-md font-[karla] font-medium text-slate-300'>Home</li>
                            <li className=' text-md font-[karla] font-medium text-slate-300'>Home</li>
                            <li className=' text-md font-[karla] font-medium text-slate-300'>Home</li>
                            <li className=' text-md font-[karla] font-medium text-slate-300'>Home</li>
                            <li className=' text-md font-[karla] font-medium text-slate-300'>Home</li>
                        </ul>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <hr className=' mt-10 w-full h-[1px] bg-white text-white' />

        <div className="lower-footer-container mt-7">
            <div className="para-lower-footer-section">
                <p className='font-[karla] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolores? Quidem facilis nam ipsa. Libero nihil provident quis vero voluptates dolore vitae, repudiandae tempore praesentium placeat corrupti ratione, pariatur alias!</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer