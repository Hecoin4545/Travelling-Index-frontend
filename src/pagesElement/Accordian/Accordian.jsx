import React from 'react'
import '../Accordian/Accordian.css'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

function Accordian() {
  return (
    <>
    <div className="center-accordian mt-5">
        <div className="heading flex items-center justify-center ">
            <p className='font-[lora] text-4xl font-bold text-[#070f2b]'>Frequently Asked Questions</p>
        </div>
        <div className="inner-accordina p-4 flex justify-center items-center">
            <Accordion type="single" collapsible className='w-[70rem]'>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='inner-heading-accordian text-xl font-[lora] text-[#070f2b]'>Can I review and rate accommodations, restaurants, and attractions on the platform?</AccordionTrigger>
                        <AccordionContent className='inner-para-details-accordian font-semibold text-[15px] font=[karla]'>
                        Yes, definitely! Our system enables individuals to evaluate plus price holiday accommodations dining establishments, along with destinations to share their experiences and also aid fellow vacationers make enlightened choices. Whether it's sharing the comfortable bed and breakfast you remained at, the tasty dish you enjoyed at a regional dining establishment or the impressive sights from a prominent traveler place your testimonials add to the cumulative expertise of our traveling neighborhood, making it less complicated for others to prepare their experiences with self-confidence.
                        </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className='inner-heading-accordian text-xl font-[lora] text-[#070f2b]'>Is there a method to verify the credibility of the source?</AccordionTrigger>
                        <AccordionContent className='inner-para-details-accordian font-semibold text-[15px] font=[karla]'>
                        Credibility is developed via a confirmation procedure. Individuals with over 100k fans throughout social media sites systems such as Facebook, YouTube plus Instagram are approved a confirmed condition, signified by a checkmark. This classification shows a greater possibility of dependability and also credibility.
                        </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className='inner-heading-accordian text-xl font-[lora] text-[#070f2b]'>What are the primary functionalities and features available on this site?</AccordionTrigger>
                        <AccordionContent className='inner-para-details-accordian font-semibold text-[15px] font=[karla]'>
                        This site is loaded with beneficial functions to make your traveling experience also much better. You can quickly look for any kind of nation you want plus read all about various other vacationers' experiences there. If you locate a location you truly like, you can include it to your individual container checklist plus offer it a thumbs-up to reveal your gratitude. As well as if you've been to a nation, you can share your very own pictures in addition to in-depth details regarding the area and also rank your experience to aid others intend their journeys.
                        </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger className='inner-heading-accordian text-xl font-[lora] text-[#070f2b]'>How is this site different from just searching on Google or using other AI tools?</AccordionTrigger>
                        <AccordionContent className='inner-para-details-accordian font-semibold text-[15px] font=[karla]'>
                        This system sticks out from normal AI devices by using genuine human experiences of areas. While Google may provide preferred locations, our system exceeds, recommending lesser-known treasures that can use special experiences.
                        </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger className='inner-heading-accordian text-xl font-[lora] text-[#070f2b]'>Does this site require payment for uploading or viewing experiences, or is it entirely free?</AccordionTrigger>
                        <AccordionContent className='inner-para-details-accordian font-semibold text-[15px] font=[karla]'>
                        Yes, this website is entirely cost-free for both publishing your very own traveling experiences and also accessing others' experiences. You can share your experiences with no price as well as furthermore you can openly discover the varied series of traveling tales and also understandings added by fellow customers. There are no registration costs or covert fees related to utilizing the system. Whether you're wanting to record your trips look for ideas for future journeys, or just get in touch with similar tourists you can do so with no monetary commitments. Our objective is to promote a vivid neighborhood where tourists can easily trade understanding, pointers, as well as referrals to enhance each various other's traveling experiences.
                        </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
    </>
  )
}

export default Accordian