import React from 'react'
import signup from '../../assets/signups.png'
import { Button } from '@/components/ui/button'
import '../Signup/Signup.css'

function Signup() {
  return (
    <>
    <div className="signup-container flex p-[5rem] justify-center ">
        <div className="inner-signup-container flex justify-center ">
            <div className="left-img-singup-container">
                <img src={signup} alt="" className=' w-[28rem]'/>
            </div>
            <div className="right-signup-details-forms ml-5">
                <div className="right-top-headlines flex justify-center items-center mb-6">
                    <h1 className='font-[lora] font-bold text-5xl mt-5 '>Singup Here</h1>
                </div>
                <div className="middle-form-area">
                <form className='flex flex-col'>
                    <input type="text" placeholder='Username' className='w-[20rem] h-[30px] border-2 border-black my-2 mx-5 p-5 rounded-md'/>
                    <input type="text" placeholder='Email' className='w-[20rem] h-[30px] border-2 border-black my-2 mx-5 p-5 rounded-md'/>
                    <input type='password' placeholder='Password' className='w-[20rem] h-[30px] border-2 border-black my-2 mx-5 p-5 rounded-md'/>
                    <div className="sub-inputs">
                    <input type="text" placeholder='Gender' className='w-[9rem] h-[30px] border-2 border-black my-2 ml-5 mr-2 p-5 rounded-md' />
                    <input type="text" placeholder='Country' className='w-[10.5rem] h-[30px] border-2 border-black my-2 mr-5 p-5 rounded-md' />
                    </div>
                </form>
                    </div>
                    <div className="singup-button-action mt-5 flex justify-center items-center">
                        <Button variant='default' className='cursor-pointer font-bold font-[lora] bg-[#070f2b] w-[20rem]' >Signup</Button>
                    </div>
            <div>
                <p className='link-signin flex justify-center items-center mt-3 font-[karla] font-semibold text-md'>Already have An Account??<Button variant='link' className='font-semibold text-sm  cursor-pointer '>Login Here</Button></p>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup