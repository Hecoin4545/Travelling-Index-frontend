import React from 'react'
import { Badge } from "@/components/ui/badge"
import displayImage1 from '../../assets/displayImage1.jpg'
import displayImage2 from '../../assets/displayImage2.jpg'
import displayImage5 from '../../assets/displayImage5.jpg'
import displayImage4 from '../../assets/displayImage4.jpg'
import displayImage6 from '../../assets/displayImage6.jpg'


function Post() {
  return (
    <>
    <div className="post-container-main-box px-5">
        <div className="inner-container-post">
            <div className="upper-top-verified-and-other my-4 ">
                <div className="inner-top-verified-others flex justify-between items-center">
                <p className=' font-semibold font-[lora] text-md'>User Posted:- Het Shah</p>
                <Badge variant="outline" className='px-[2.8rem] py-2 font-bold font-[lora] text-sm bg-blue-950 text-white'>Verified User</Badge>
            </div>
            </div>
            <div className="images-section-post-main-area">
                <div className="inner-image-post-section flex flex-wrap justify-center">
                    <img src={displayImage1} className='w-[25rem] h-[20rem] px-1 py-1' alt="" />
                    <img src={displayImage2} className='w-[25rem] h-[20rem] px-1 py-1' alt="" />
                    <img src={displayImage5} className='w-[25rem] h-[20rem] px-1 py-1' alt="" />
                    <img src={displayImage4} className='w-[25rem] h-[20rem] px-1 py-1' alt="" />
                    <img src={displayImage6} className='w-[25rem] h-[20rem] px-1 py-1' alt="" />
                </div>
            </div>
            <div className="information-deatail-post-section mt-10 ">
                <div className="inner-section-info-post-areas flex justify-between">
                    <p className='font-[lora] font-semibold '>1 Year Ago</p>
                    <p className='font-[lora] font-semibold '>India , New Delhi</p>
                </div>
            </div>

            <div className="description-post-area-main pt-10 px-[7rem]">
                <div className="inner-description-area-main">
                    <p className='font-lora font-bold text-xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem culpa assumenda commodi dolores veniam saepe incidunt ad necessitatibus blanditiis, hic similique perferendis at porro quidem quia obcaecati iure, ipsam aperiam inventore alias cupiditate vitae velit? Cupiditate voluptates aspernatur non minima impedit commodi, quibusdam incidunt veritatis corrupti excepturi quasi molestias labore aliquam similique doloremque, sit exercitationem nulla. Eius et est officiis laborum ullam velit veniam nobis labore facilis quo, perspiciatis eos praesentium tempora ipsa consequatur aliquam eum dolores impedit ab esse iste cupiditate optio dolor architecto? Autem ex illo quaerat aut in qui nihil aliquam. Dolore consectetur sit assumenda suscipit officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error nihil eaque qui aut non nobis rem est? Deleniti voluptatum corrupti dicta, rem ipsa molestiae laboriosam dolorem, voluptatibus numquam quia accusamus, ratione tempore odit sequi nobis voluptates facilis quo officia?</p>
                </div>
            </div>
            {/* <div className="ratings-detail-post-section">
                <div className="inner-rating-detail-section-post">
                    <div className="right-rating-section-post-area">
                        <p>Ratings</p>
                        <div className="inner-category-area">
                            <p>Cleanliness:- </p>
                            <p>Dangerous:- </p>
                            <p>Populated:- </p>
                            <p>Budget:- </p>
                            <p>Unique:- </p>
                        </div>
                    </div>
                    <div className="left-ratings-detail-section-post-area-class">
                    <div className="inner-detail-country-state-area">
                        <p>Country:- India</p>
                        <p>State:- New Delhi</p>
                        <p>Particular Area:-</p>
                        <p>501 , sector-43 new jamuna road , delhi:-</p>
                    </div>
                    </div>
                </div>
                <div className="overall-ratings-area-section-places">
                    <div className="inner-travelling-ratings">
                        <p>Overall Ratings:- </p>
                    </div>
                </div>
            </div> */}
            {/* <div className="things-to-take-care-off-area">
                <div className="heading-things-to-take-care">
                    <h1>Things To Take Care of</h1>
                </div>
                <div className="description-things-to-take-care-of">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi dolore quae recusandae magni facere, excepturi ratione eaque porro error? Nobis reiciendis libero odio necessitatibus voluptatibus eaque maxime voluptatum doloribus provident! Dolorum quibusdam veritatis architecto! Dolor modi rerum ipsa excepturi quisquam dolorum harum sit possimus accusamus saepe neque, magnam fugit.
                </div>
            </div>
            <div className="last-travelling-post-section">
                <div className="inner-last-travelling-section">
                    <p>Does User Recommand This Place:- Yes</p>
                </div>
            </div> */}

        </div>
    </div>
    </>
  )
}

export default Post