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
import InnerPost from '@/propPages/InnerPost';


function Post() {
  return (
    <>
    <InnerPost displayImage1={displayImage1} displayImage2={displayImage2} displayImage4={displayImage4} displayImage5={displayImage5} displayImage6={displayImage6} Time='~ 1 Year Ago' Area='New Delhi , India' Description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cupiditate voluptatibus odit iure consequatur quas nemo, illo, veritatis, possimus optio voluptas labore repellat ullam quibusdam vitae sequi! Quidem eveniet quaerat odit. Possimus rem, vitae iure odio hic deserunt maxime aspernatur! Voluptas tempora blanditiis alias odit dolores fuga eum consequatur accusantium nihil veniam! Ipsum quas aspernatur nobis, nam commodi mollitia hic debitis cumque dignissimos, eligendi alias quibusdam animi. Eligendi aperiam accusantium necessitatibus fuga nihil eveniet dolore iure unde est quas expedita maiores facere fugiat cumque quos minus autem architecto, sint asperiores. Et, sit earum sed at culpa neque! Veritatis, ratione unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem culpa assumenda commodi dolores veniam saepe incidunt ad necessitatibus blanditiis, hic similique perferendis at porro quidem quia obcaecati iure, ipsam aperiam inventore alias cupiditate vitae velit? Cupiditate voluptates aspernatur non minima impedit commodi, quibusdam incidunt veritatis corrupti excepturi quasi molestias labore aliquam similique doloremque, sit exercitationem nulla. Eius et est officiis laborum ullam velit veniam nobis labore facilis quo, perspiciatis eos praesentium tempora ipsa consequatur aliquam eum dolores impedit ab esse iste cupiditate optio dolor architecto? Autem ex illo quaerat aut in qui nihil aliquam. Dolore consectetur sit assumenda suscipit officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error nihil eaque qui aut non nobis rem est? Deleniti voluptatum corrupti dicta, rem ipsa molestiae laboriosam dolorem, voluptatibus numquam quia accusamus, ratione tempore odit sequi nobis voluptates facilis quo officia?' Country='India' State='New Delhi' ExactLocation='501 , sector b nodia , new delhi rajendra nagar' ThingsToTakeCareOf=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi dolore quae recusandae magni facere, excepturi ratione eaque porro error? Nobis reiciendis libero odio necessitatibus voluptatibus eaque maxime voluptatum doloribus provident! Dolorum quibusdam veritatis architecto! Dolor modi rerum ipsa excepturi quisquam dolorum harum sit possimus accusamus saepe neque, magnam fugit.' RecommandThisPlace='Yes' />
    </>
  )
}

export default Post