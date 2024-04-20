import React from 'react'
import InnerCountries from '@/propPages/InnerCountries'
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
        <InnerCountries ImageDisplay={displayImage1} Country='India'  TotalReviews='400' Ratings='4.2' />
        <InnerCountries ImageDisplay={displayImage2} Country='Australia'  TotalReviews='300' Ratings='3.2' />
        <InnerCountries ImageDisplay={displayImage3} Country='Uk'  TotalReviews='100' Ratings='2.2' />
        <InnerCountries ImageDisplay={displayImage4} Country='Usa'  TotalReviews='120' Ratings='4.5' />
        <InnerCountries ImageDisplay={displayImage5} Country='Mongolia'  TotalReviews='230' Ratings='4.0' />
      </div>
    </div>
    </>
  )
}

export default Countries