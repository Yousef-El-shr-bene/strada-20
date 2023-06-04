"use client";
import Image from "next/image"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Order from "./order";
export default function Imgenav({ onecrd }) {
  const [imgs, useimge] = useState({
    totalimgs: onecrd[0].url.length,
    crunt: 1,
  });
 const [maindata,usemaindata] = useState({id : onecrd[0].id , size : onecrd[0].size , color  : onecrd[0].color})
  return (
    <>
          <div className="flex flex-col sm:flex-row justify-center items-center m-3">
        <div className="w-10/12 sm:w-1/2 h-96 m-2 p-2 flex flex-col justify-center items-center rounded border-2 border-black border-solid bg-slate-200">
          <div className="flex flex-row justify-center items-center h-5/6 ">
            {imgs.crunt === 1 ? (
              ""
            ) : (
              <button
                className="m-4 p-4 "
                onClick={() => {
                  useimge({ ...imgs, crunt: imgs.crunt + 1 });
                }}
              >
                &#x276E;
              </button>
            )}
            <Image
              className="h-full w-2/3 sm:w-2/4"
              src={onecrd[0].url[imgs.crunt - 1]}
              width={1000}
              height={1100}
              alt="img"
            />
            {imgs.crunt === imgs.totalimgs ? (
              ""
            ) : (
              <button
                className="m-4 p-4 "
                onClick={() => {
                  useimge({ ...imgs, crunt: imgs.crunt - 1 });
                }}
              >
                &#x276F;
              </button>
            )}
          </div>
          <>
            <div className="flex justify-center items-center">
              {/* <div className="m-1.5 p-1.5 rounded bg-black"></div> */}
              {onecrd[0].color.map((e, i) => (
                <div
                  key={i}
                  className={ `rounded ${maindata.color === e ? "m-2 p-3" : "m-1 p-3"} `}
                  style={{ backgroundColor: `#${e}` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-center items-center border-t-2 border-black border-solid ">
               {onecrd[0].size.map((e, i) => {
                return <div
                key={i}
              className={`m-1 p-1 h-2 w-2 rounded border-2 border-black border-solid  ${maindata.size === e ? "bg-black border-white text-white border-4" : "bg-white border-white text-white border-2 " } `}
                 onClick={usemaindata({...maindata,size : e})}
              >
                {e}
              </div>
               })}
            </div>
          </>
        </div>
        <Order id={onecrd[0].id} maindata={maindata}  />
        </div>
    </>
  );
}
