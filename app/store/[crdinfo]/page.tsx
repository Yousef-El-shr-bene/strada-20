'use client'
import Image from "next/image";
import New from "../../components/homeCOM/New"
import MostSelles from "../../components/homeCOM/MostSelles"
import Colorpalet from "../../components/storeCOM/Colorpalet"
import { useState } from "react";
export default function CrdInfo({ params }: { params: string }) {
  const [chose , setchose] = useState({color : false , size : false})
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center m-3">
        <div className="w-10/12 sm:w-1/2 h-96  flex flex-col justify-center items-center rounded border-2 border-black border-solid">
        <Image
        className="h-full w-2/3 sm:w-2/4 "
        src="/testT.png"
        width={1000}
        height={1100}
        alt="img"
        />
          <Colorpalet setchose={setchose} chose={chose} />
        </div>
        <div className="h-auto flex-grow flex flex-col justify-center items-center text-white">
          <h1 className="bg-teal-500 hover:bg-teal-400 rounded-full m-2 p-2 font-bold text-xl "  >طلب الان</h1>
          <h1 className="bg-teal-500 hover:bg-teal-400 rounded-full m-2 p-2 font-bold">إلي العربة</h1>
        </div>
      </div>
      <div>
    <New/>
    <MostSelles/>
      </div>
    </>
  );
}



