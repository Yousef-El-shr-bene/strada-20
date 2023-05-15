'use client'
import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Vazirmatn } from 'next/font/google'
import Link from 'next/link';
//
const vazirmatn = Vazirmatn({
 subsets: ['arabic'],
})
export default function HederDrop() {
  const [serch,setserch] =  useState("hidden")
  const [pay,setpay] = useState("")
  const [borger , setborger] = useState(false)
  const elment = <>
       <Link href='/' > <p className=' text-center p-3 border-x border-white hover:text-teal-500' >الرئيسية</p></Link>
        <Link href='/store' > <p className=' text-center p-3 border-x border-white hover:text-teal-500' >تسوق الان</p></Link>
      <Link href='/customLogo' > <p className=' text-center p-3 border-x border-white hover:text-teal-500' >Rewards program</p> </Link>
      <Link href='/rewardsProgram' > <p className=' text-center p-3 border-x border-white hover:text-teal-500' >custom logo</p> </Link>
       <Link href='/connect'> <p className=' text-center p-3 border-x border-white hover:text-teal-500' >تواصل معنا</p></Link>
  </>
  function onserch() {
    if (serch === "hidden") {
      setserch("")
      setpay("hidden")
    }else{
      setserch("hidden")
      setpay("")
    }
  }
  function humborger() {
      setborger(!borger)
  }
  return (
    <>
<div className={`flex items-center justify-between bg-black  font-bold text-lg border-b-4 border-b-orange-200`}>   
    <label className="sr-only">Search</label>
    <div className={`relative w-full ${serch}`}>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <AiOutlineSearch className="text-black w-5 h-5 " />
        </div>
        <input type="text" id="simple-search" className={`bg-gray-50 border border-white text-gray-900 text-sm  focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `} placeholder="Search" required />
    </div>
    <div className="bg-teal-500 p-3.5 text-center hover:bg-teal-400 text-white" onClick={onserch} >
        <AiOutlineSearch />
      </div>
      <div className={`hidden text-white font-medium text-sm m-auto  sm:${pay} sm:flex `}>
      {elment}
      </div>
     <div className={` bg-teal-500 p-3.5 text-center hover:bg-teal-400 text-white sm:hidden `} onClick={humborger}  ><GiHamburgerMenu /></div>
    <div className={`absolute text-white right-0 top-11 bg-slate-950 ${borger === false ? "hidden" : ""} sm:hidden `} >
      {elment}
    </div>
</div>
    </>
  )
}
