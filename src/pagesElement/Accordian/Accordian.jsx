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
                    <AccordionTrigger className='inner-heading-accordian text-xl font-[lora] text-[#070f2b]'>Is it accessible?</AccordionTrigger>
                        <AccordionContent className='inner-para-details-accordian font-semibold text-[15px] font=[karla]'>
                        Yes. It adheres to the WAI-ARIA design pattern. Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officiis incidunt dolor amet voluptatem molestiae? Aspernatur ut ad voluptatum nulla.
                        </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className='inner-heading-accordian text-xl font-[lora] text-[#070f2b]'>Is it accessible?</AccordionTrigger>
                        <AccordionContent className='inner-para-details-accordian font-semibold text-[15px] font=[karla]'>
                        Yes. It adheres to the WAI-ARIA design pattern. Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officiis incidunt dolor amet voluptatem molestiae? Aspernatur ut ad voluptatum nulla.
                        </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className='inner-heading-accordian text-xl font-[lora] text-[#070f2b]'>Is it accessible?</AccordionTrigger>
                        <AccordionContent className='inner-para-details-accordian font-semibold text-[15px] font=[karla]'>
                        Yes. It adheres to the WAI-ARIA design pattern. Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officiis incidunt dolor amet voluptatem molestiae? Aspernatur ut ad voluptatum nulla.
                        </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger className='inner-heading-accordian text-xl font-[lora] text-[#070f2b]'>Is it accessible?</AccordionTrigger>
                        <AccordionContent className='inner-para-details-accordian font-semibold text-[15px] font=[karla]'>
                        Yes. It adheres to the WAI-ARIA design pattern. Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officiis incidunt dolor amet voluptatem molestiae? Aspernatur ut ad voluptatum nulla.
                        </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger className='inner-heading-accordian text-xl font-[lora] text-[#070f2b]'>Is it accessible?</AccordionTrigger>
                        <AccordionContent className='inner-para-details-accordian font-semibold text-[15px] font=[karla]'>
                        Yes. It adheres to the WAI-ARIA design pattern. Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officiis incidunt dolor amet voluptatem molestiae? Aspernatur ut ad voluptatum nulla.
                        </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
    </>
  )
}

export default Accordian