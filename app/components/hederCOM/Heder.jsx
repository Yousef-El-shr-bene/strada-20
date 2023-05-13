'use client'
import Image from "next/image";
import { AiOutlineShopping } from "react-icons/ai";
import {VscAccount} from "react-icons/vsc"
import { Vazirmatn } from 'next/font/google'
import HederDrop from "./HederDrop"
import Link from "next/link";
const vazirmatn = Vazirmatn({
   subsets: ['arabic'],
})
export default function Heder() {
   return (
    <>
     <div className="heder top-0 w-full " >
     <header className={`${vazirmatn.className} flex flex-row-reverse flex-nowrap justify-around items-center w-full h-20 drop-shadow-2xl bg-white`}>
      <div className="flex flex-row-reverse h-auto w-auto  " >
        <div className=" flex bg-black w-20 h-20 justify-center items-center " >
      <Image
        className=" h-20 w-20 m-4 p-4 "
        src="/st.png"
        width={100}
        height={100} 
        alt="img"
      />
      </div>
      </div>
      <div className="flex" >
      <Link href="/Cart" className="bg-black p-4 transition-all ease-in-out delay-75 rounded  hover:rounded-lg m-3" >
        <AiOutlineShopping className="w-5 h-5 text-white hover:text-teal-500" />
      </Link>
      <Link href="/acount" className="bg-black p-4 transition-all ease-in-out delay-75 rounded  hover:rounded-lg m-3" >
        <VscAccount className="w-5 h-5 text-white hover:text-teal-500" />
      </Link>
      </div>
    </header>
    <div className="drop-shadow-2xl" >
      <HederDrop/>
    </div>
    </div>
    </>
  );
}
