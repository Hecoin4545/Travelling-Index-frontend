import React from 'react'
import homeImage from '../../assets/homeBanner.png'
import './Home.css'
function Home() {
  return (
    <> 
    <div className="image-home-area">
        <div className="image-section px-10 pt-10">
            <img className=' rounded-md' src={homeImage} alt="" />
        </div>
        <div className="information-home-image-section px-10 w-[92rem] flex justify-center items-center">
            <div className="poper-info-home flex justify-evenly items-center h-[6rem] bg-[#070f2be8] w-[67rem] rounded-md ">
                <div>
                    <p className=' text-slate-200 font-[lora] text-lg font-bold  mb-1'>Location:</p>
                    <p className=' text-slate-200 font-[karla] text-md '>Paris,Europe</p>
                </div>
                <div>
                    <p className=' text-slate-200 font-[lora] text-lg font-bold mb-1'>Date:</p>
                    <p className=' text-slate-200 font-[karla] text-md '>21-08-24</p>
                </div>
                <div>
                    <p className=' text-slate-200 font-[lora] text-lg font-bold mb-1'>Description:</p>
                    <p className=' text-slate-200 font-[karla] text-md '>Amazying Place</p>
                </div>
                <div>
                    <p className=' text-slate-200 font-[lora] text-lg font-bold mb-1'>Month:</p>
                    <p className=' text-slate-200 font-[karla] text-md '>August</p>
                </div>
            </div>
        </div>
    </div>
    </ >
  )
}

export default Home