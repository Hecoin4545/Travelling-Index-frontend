import React from 'react'
import displayImage1 from '../../assets/displayImage1.jpg'
import displayImage2 from '../../assets/displayImage2.jpg'
import displayImage3 from '../../assets/displayImage3.jpg'
import displayImage4 from '../../assets/displayImage4.jpg'
import displayImage5 from '../../assets/displayImage5.jpg'
import displayImage6 from '../../assets/displayImage6.jpg'
import displayImage7 from '../../assets/displayImage7.jpg'
function Display() {
  return (
    <>
    <div className="displaySection grid gap-x-1 gap-y-1 p-10 ">
        <img src={displayImage1} alt="" className='grid row-start-1 row-end-2 col-start-1 col-end-3'/>
        <img src={displayImage7} alt="" className='grid row-start-1 row-end-2 col-start-3 col-end-4 h-[33.5rem] w-[40rem]' />
        <img src={displayImage2} alt="" className='grid row-start-2 row-end-3 col-start-1 col-end-2'/>
        <img src={displayImage4} alt="" className='grid row-start-2 row-end-3 col-start-2 col-end-3'/>
        <img src={displayImage5} alt="" className='grid row-start-3 row-end-4 col-start-1 col-end-2'/>
        <img src={displayImage6} alt="" className='grid row-start-3 row-end-4 col-start-2 col-end-3'/>
        <img src={displayImage3} alt="" className='w-[30rem] grid row-start-2 row-end-4 col-start-3 col-end-5'/>
    </div>
    </>
  )
}

export default Display