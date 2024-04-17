import React from 'react'
import { Badge } from "@/components/ui/badge"
import { IoStarSharp } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { BsAirplaneFill } from "react-icons/bs";
import displayImage1 from '../../assets/displayImage1.jpg'
import displayImage2 from '../../assets/displayImage2.jpg'
import displayImage5 from '../../assets/displayImage5.jpg'
import displayImage4 from '../../assets/displayImage4.jpg'
import displayImage6 from '../../assets/displayImage6.jpg'


function Post() {
  return (
    <>
    <div className="post-container-main-box mx-[23rem] p-[1rem] bg-slate-300 border-black border-2 rounded-sm">
        <div className="inner-container-post">
            <div className="upper-top-verified-and-other my-4 ">
                <div className="inner-top-verified-others flex justify-between items-center">
                <p className=' font-semibold font-[lora] text-md'>User Posted:- Het Shah</p>
                <Badge variant="outline" className='px-[2.8rem] py-2 font-bold font-[lora] text-sm bg-blue-950 text-white'>Verified User <MdVerified className='text-xl ml-2 color-white'/></Badge>
            </div>
            </div>
            <div className="images-section-post-main-area">
                <div className="inner-image-post-section flex flex-wrap justify-center">
                    <img src={displayImage1} className='w-[14rem] rounded-lg px-1 py-1' alt="" />
                    <img src={displayImage2} className='w-[14rem] rounded-lg px-1 py-1' alt="" />
                    <img src={displayImage5} className='w-[14rem] rounded-lg px-1 py-1' alt="" />
                    <img src={displayImage4} className='w-[14rem] rounded-lg px-1 py-1' alt="" />
                    <img src={displayImage6} className='w-[14rem] rounded-lg px-1 py-1' alt="" />
                </div>
            </div>
            <div className="information-deatail-post-section mt-10 ">
                <div className="inner-section-info-post-areas flex justify-between">
                    <p className='font-[lora] font-semibold '>~ 1 Year Ago</p>
                    <p className='font-[lora] font-semibold '>~ India , New Delhi</p>
                </div>
            </div>

            <div className="description-post-area-main pt-10 ">
                <div className="inner-description-area-main">
                    <p className='font-[lora] font-semibold text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cupiditate voluptatibus odit iure consequatur quas nemo, illo, veritatis, possimus optio voluptas labore repellat ullam quibusdam vitae sequi! Quidem eveniet quaerat odit. Possimus rem, vitae iure odio hic deserunt maxime aspernatur! Voluptas tempora blanditiis alias odit dolores fuga eum consequatur accusantium nihil veniam! Ipsum quas aspernatur nobis, nam commodi mollitia hic debitis cumque dignissimos, eligendi alias quibusdam animi. Eligendi aperiam accusantium necessitatibus fuga nihil eveniet dolore iure unde est quas expedita maiores facere fugiat cumque quos minus autem architecto, sint asperiores. Et, sit earum sed at culpa neque! Veritatis, ratione unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem culpa assumenda commodi dolores veniam saepe incidunt ad necessitatibus blanditiis, hic similique perferendis at porro quidem quia obcaecati iure, ipsam aperiam inventore alias cupiditate vitae velit? Cupiditate voluptates aspernatur non minima impedit commodi, quibusdam incidunt veritatis corrupti excepturi quasi molestias labore aliquam similique doloremque, sit exercitationem nulla. Eius et est officiis laborum ullam velit veniam nobis labore facilis quo, perspiciatis eos praesentium tempora ipsa consequatur aliquam eum dolores impedit ab esse iste cupiditate optio dolor architecto? Autem ex illo quaerat aut in qui nihil aliquam. Dolore consectetur sit assumenda suscipit officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error nihil eaque qui aut non nobis rem est? Deleniti voluptatum corrupti dicta, rem ipsa molestiae laboriosam dolorem, voluptatibus numquam quia accusamus, ratione tempore odit sequi nobis voluptates facilis quo officia?</p>
                </div>
            </div>
            <div className="ratings-detail-post-section mt-5 mx-5">
                <div className="inner-rating-detail-section-post flex justify-around">
                    <div className="right-rating-section-post-area w-[50%] border-r-[1px] border-black">
                        <p className='font-[lora] font-bold text-xl'>Ratings</p>
                        <div className="inner-category-area">
                            <p className='flex items-center font-semibold font-[karla] mt-1'>1. Cleanliness:-   <IoStarSharp />
                            <IoStarSharp />
                            <IoStarSharp />
</p>

<p className='flex items-center font-semibold font-[karla] mt-1'>2. Dangerous:-   <IoStarSharp />
</p>
<p className='flex items-center font-semibold font-[karla] mt-1'>3. Unique:-   <IoStarSharp />
                            <IoStarSharp />
                            <IoStarSharp />
                            <IoStarSharp />
</p>
<p className='flex items-center font-semibold font-[karla] mt-1'>3. Populated:-   <IoStarSharp />
                            <IoStarSharp />
</p>
<p className='flex items-center font-semibold font-[karla] mt-1'>5. Local People:-   <IoStarSharp />
                            <IoStarSharp />
                            <IoStarSharp />
                            <IoStarSharp />
</p>
                        </div>
                    </div>
                    <div className="left-ratings-detail-section-post-area-class flex flex-row justify-center items-center w-[50%] ml-5">
                    <div className="inner-detail-country-state-area mx-3">
                        <p className='font-[karla] text-md font-semibold'>Country:- India</p>
                        <p className='font-[karla] text-md font-semibold'>State:- New Delhi</p>
                        <p className='font-[karla] text-md font-semibold'>Exact Location:- 501 , sector-43 new jamuna road , Delhi</p>
                    </div>
                    </div>
                </div>
                <div className="overall-ratings-area-section-places mt-5">
                    <div className="inner-travelling-ratings flex items-center justify-center">
                          
                        <p className='font-[lora] font-bold flex items-center border-black border-[2px] p-2 rounded-sm '>Overall Ratings:-  
                        <IoStarSharp />
                            <IoStarSharp />
                            <IoStarSharp />  </p>
                    </div>
                </div>
            </div>
            <div className="things-to-take-care-off-area mt-[2rem] my-[2rem]">
                <div className="heading-things-to-take-care ">
                    <h1 className='font-bold font-[lora] text-3xl'>Things To Take Care of:- </h1>
                </div>
                <div className="description-things-to-take-care-of font-[karla] font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi dolore quae recusandae magni facere, excepturi ratione eaque porro error? Nobis reiciendis libero odio necessitatibus voluptatibus eaque maxime voluptatum doloribus provident! Dolorum quibusdam veritatis architecto! Dolor modi rerum ipsa excepturi quisquam dolorum harum sit possimus accusamus saepe neque, magnam fugit.
                </div>
            </div>
            <div className="last-travelling-post-section mt-5">
                <div className="inner-last-travelling-section flex justify-center">
                    <p className='font-bold font-[lora] border-black border-[2px] rounded-sm p-2 '>Does User Recommand This Place:- Yes</p>
                </div>
            </div>

            <div className="like-bucketlist-area mt-5">
                <div className="socials-like-bucketlist flex justify-around mx-5  p-5">
                <AiFillLike className='font-bold text-[2rem] mx-5' />
                <BsAirplaneFill className='font-bold text-[2rem] mx-5' />
                <FaShareAlt className='font-bold text-[2rem] mx-5' />
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Post