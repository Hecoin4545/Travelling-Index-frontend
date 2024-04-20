import React from 'react'

function InnerCountries({
    ImageDisplay,
    Country,
    TotalReviews,
    Ratings
}) {
  return (
    <>
    <div className="card-countries-container my-3 rounded-t-[1rem]">
        <div className="inner-upper-section">
          <img src={ImageDisplay} alt="" className='w-[22rem] h-[14rem]  rounded-t-[1rem]'/>
        </div>
        <div className="middle-name-section">
          <h1 className='font-[lora] text-3xl font-bold my-2 px-2'>{Country}</h1>
        </div>
        <div className="lower-card-section flex justify-between px-2 font-[karla] font-semibold mb-3">
          <p>{TotalReviews} reviews</p>
          <p>Ratings: {Ratings}/5.0</p>
        </div>
      </div>
    </>
  )
}

export default InnerCountries