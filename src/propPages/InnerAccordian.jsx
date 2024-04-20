import React from 'react'
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion"

function InnerAccordian({
    AccordianQuestion,
    AccordianAnswers,
    ItemNumber
}) {
  return (
    <AccordionItem value={ItemNumber}>
    <AccordionTrigger className='inner-heading-accordian text-xl font-[lora] text-[#070f2b]'>{AccordianQuestion}</AccordionTrigger>
        <AccordionContent className='inner-para-details-accordian font-semibold text-[15px] font=[karla]'>
        {AccordianAnswers}
        </AccordionContent>
</AccordionItem>
  )
}

export default InnerAccordian