import React from 'react'
import homeImage from '../../assets/explore.png'

function Explore() {
  return (
    <>
    <div className="image-home-area ">
        <div className="image-section px-10 pt-10">
            <img className=' rounded-md ' src={homeImage} alt="" />
        </div>
        <div className="Input-area-to-search-places absolute top-[17rem] left-[10rem] ">
           <div className="container-places-search flex justify-center items-center flex-col">
            <p className='text-4xl text-white font-bold font-[lora] mb-5  '>Enjoy Your Travel Experience With Us</p>
            <input type="text" placeholder='Search The Name Of Country You Want To Visit' className='w-[70rem] border-2 border-black rounded-lg px-5 py-3 relative left-[2rem]' />
           </div>
        </div>
    </div>
    </>
  )
}

export default Explore