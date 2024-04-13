import React from 'react'
import displayImage1 from '../../assets/displayImage1.jpg'
import displayImage2 from '../../assets/displayImage2.jpg'
import displayImage3 from '../../assets/displayImage3.jpg'
import displayImage4 from '../../assets/displayImage4.jpg'
import displayImage5 from '../../assets/displayImage5.jpg'
import '../Countries/Countries.css'

function Countries() {
  return (
    <>
    <div className="container-listing-countries m-10">
      <div className="heading-countries mb-7 font-[lora] font-bold flex justify-center text-5xl items-center">
        <p>List Of Countries</p></div>
      <div className="main-card-section flex justify-between flex-wrap">

      <div className="card-countries-container my-3 rounded-t-[1rem]">
        <div className="inner-upper-section">
          <img src={displayImage1} alt="" className='w-[22rem] h-[14rem]  rounded-t-[1rem]'/>
        </div>
        <div className="middle-name-section">
          <h1 className='font-[lora] text-3xl font-bold my-2 px-2'>India</h1>
        </div>
        <div className="lower-card-section flex justify-between px-2 font-[karla] font-semibold mb-3">
          <p>400 reviews</p>
          <p>Ratings: 4.5/5.0</p>
        </div>
      </div>


           <div className="card-countries-container my-3 rounded-t-[1rem]">
        <div className="inner-upper-section">
          <img src={displayImage2} alt="" className='w-[22rem] h-[14rem]  rounded-t-[1rem]'/>
        </div>
        <div className="middle-name-section">
          <h1 className='font-[lora] text-3xl font-bold my-2 px-2'>Australia</h1>
        </div>
        <div className="lower-card-section flex justify-between px-2 font-[karla] font-semibold mb-3">
          <p>250 reviews</p>
          <p>Ratings: 4.5/5.0</p>
        </div>
      </div>


        <div className="card-countries-container my-3 rounded-t-[1rem]">
        <div className="inner-upper-section">
          <img src={displayImage3} alt="" className='w-[22rem] h-[14rem]  rounded-t-[1rem]'/>
        </div>
        <div className="middle-name-section">
          <h1 className='font-[lora] text-3xl font-bold my-2 px-2'>Uk</h1>
        </div>
        <div className="lower-card-section flex justify-between px-2 font-[karla] font-semibold mb-3">
          <p>410 reviews</p>
          <p>Ratings: 4.2/5.0</p>
        </div>
      </div>


        <div className="card-countries-container my-3 rounded-t-[1rem]">
        <div className="inner-upper-section">
          <img src={displayImage4} alt="" className='w-[22rem] h-[14rem]  rounded-t-[1rem]'/>
        </div>
        <div className="middle-name-section">
          <h1 className='font-[lora] text-3xl font-bold my-2 px-2'>Usa</h1>
        </div>
        <div className="lower-card-section flex justify-between px-2 font-[karla] font-semibold mb-3">
          <p>100 reviews</p>
          <p>Ratings: 4.0/5.0</p>
        </div>
      </div>

          <div className="card-countries-container my-3 rounded-t-[1rem]">
        <div className="inner-upper-section">
          <img src={displayImage5} alt="" className='w-[22rem] h-[14rem]  rounded-t-[1rem]'/>
        </div>
        <div className="middle-name-section">
          <h1 className='font-[lora] text-3xl font-bold my-2 px-2'>Mongolia</h1>
        </div>
        <div className="lower-card-section flex justify-between px-2 font-[karla] font-semibold mb-3">
          <p>200 reviews</p>
          <p>Ratings: 4.5/5.0</p>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Countries