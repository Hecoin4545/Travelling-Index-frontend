"use strict";
import React, { useEffect, useState } from 'react'
import '../Navbar/Navbar.css'
import data from '../../data/facts.json'
import { Button } from '@/components/ui/button'
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
function Navbar() {

    function hello(){
      let a = Math.floor(Math.random() * (88 - 1 + 1)) + 1;
      let shah = data[a].fact;
      toast(`Fact:- ${shah}`); 
    }
  return (
    <>
      <div className="main-navbar-container w-full flex flex-row bg-[#070F2B]  justify-between h-[4.5rem] sticky top-0 z-10">
        <div className="left-navbar flex justify-start items-center w-[12%] font-[lora] font-semibold  pl-10 ">
          <p className=' text-slate-200 text-2xl'>logo</p>
        </div>
        <div className="center-navbar w-[63%] flex items-center ">
          <ul className=' w-64 flex justify-start items-center font-[karla] text-lg'>
            <li className='p-4'><a href="#" className='text-slate-200 hover:text-slate-300'>Home</a></li>
            <li className='p-4'><a href="#" className='text-slate-200 hover:text-slate-300'>Explore</a></li>
            <li className='p-4'><a href="#" className='text-slate-200 hover:text-slate-300'>Trending</a></li>
          </ul>
        </div>
        <div className="left-navbar w-[20%] flex justify-end pr-10">
          <div className="button-inner flex items-center">
            <Button variant='secondary' className='cursor-pointer font-bold font-[lora] mr-3' onClick={()=>hello()}  >Travel Facts</Button>
            <Button variant='secondary' className='cursor-pointer font-bold font-[lora]' >Signup</Button>
            <Select >
              <SelectTrigger className=" ml-3 w-[100px] placeholder-slate-200 text-slate-200 font-[lora] font-semibold">
                <SelectValue className=' placeholder-slate-200' placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="toaster">
         <Toaster/>
      </div>
    </>
  )
}

export default Navbar