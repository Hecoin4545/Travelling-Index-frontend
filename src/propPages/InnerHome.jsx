import React from 'react'

function InnerHome({
    Headlines,
    Information
}) {
  return (
    <>
     <div>
        <p className=' text-slate-200 font-[lora] text-lg font-bold  mb-1'>{Headlines}</p>
        <p className=' text-slate-200 font-[karla] text-md '>{Information}</p>
    </div>
    </>
  )
}

export default InnerHome