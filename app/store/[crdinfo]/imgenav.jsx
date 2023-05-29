"use client"
import Image from "next/image";
import { useState } from "react";
export default function Imgenav({onecrd}) {
  const [imgs,useimge] = useState({totalimgs: onecrd[0].url.length, crunt : 1 });
  console.log(onecrd);

  return (
    <>
          <div className="flex flex-col sm:flex-row justify-center items-center m-3">
        <div className="w-10/12 sm:w-1/2 h-96 m-2 p-2 flex flex-col justify-center items-center rounded border-2 border-black border-solid bg-slate-200">
          <div className="flex flex-row justify-center items-center h-5/6 ">
            {imgs.crunt === 1 ? "" :<button className="m-4 p-4 " onClick={()=>{useimge({...imgs,crunt : imgs.crunt + 1 })}} >&#x276E;</button>}
          <Image
            className="h-full w-2/3 sm:w-2/4"
            src={onecrd[0].url[imgs.crunt - 1]}
            width={1000}
            height={1100}
            alt="img"
          /> 
          {imgs.crunt === imgs.totalimgs ? "" :<button className="m-4 p-4 "  onClick={()=>{useimge({...imgs,crunt : imgs.crunt - 1 })}} >&#x276F;</button>}
          </div>
          <>
            <div className="flex justify-center items-center">
              {/* <div className="m-1.5 p-1.5 rounded bg-black"></div> */}
              {onecrd[0].color.map((e,i)=><div key={i} className="m-1 p-3 rounded " style={{backgroundColor : `#${e}`}}></div>)}
             </div>
            <div className="flex justify-center items-center border-t-2 border-black border-solid ">
              <div
                className={`m-1 p-1 rounded border-2 border-black border-solid`}
                //  onClick={ () => setchose({ color: chose.color , size: "ms" })}
              >
                sm
              </div>
              <div
                className={`m-1 p-1 rounded border-2 border-black border-solid`}
                // onClick={ () => setchose({ color: chose.color, size: "L" })}
              >
                L
              </div>
              <div
                className={`m-1 p-1 rounded border-2 border-black border-solid`}
                // onClick={() => setchose({ color: chose.color, size: "xL" })}
              >
                xL
              </div>
            </div>
          </>
        </div>
        <div className="h-auto flex-grow flex flex-col justify-center items-center text-white">
          <h1 className="bg-teal-500 hover:bg-teal-400 rounded-full m-2 p-2 font-bold text-xl ">
            طلب الان
          </h1>
          <h1 className="bg-teal-500 hover:bg-teal-400 rounded-full m-2 p-2 font-bold">
            إلي العربة
          </h1>
        </div>
      </div>
    </>
  )
}
