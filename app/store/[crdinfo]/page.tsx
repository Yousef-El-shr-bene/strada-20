// 'use client'
import Image from "next/image";
import Newcrds from "../../components/homeCOM/Newcrds";
// import { useEffect, useState } from "react";

export async function getStaticPaths() {
  const data = await fetch(`${process.env.NEXTAUTH_URL}/api/newst`);
  const { imgdata } = await data.json();
  return { props: { imgdata }, fallback: "blocking" };
}

export default function CrdInfo({ imgdata }) {
  //
  const chose = { color: "", size: "" };

  //
  // const [chose , setchose] = useState({color : "" , size : "" })
  // const [imgdata,setimgdata] = useState([])
  // useEffect( () => {

  //      fetch(`${process.env.NEXTAUTH_URL}/api/newst`).then(async(data)=>{
  //       const res = await data.json()
  //       setimgdata(res);
  //       console.log(res);
  //     }).catch((err)=>{
  //       console.log(err);
  //     })
  // } , [])
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
          <>
            <div className="flex justify-center items-center">
              <div className="m-1.5 p-1.5 rounded bg-black"></div>
              <div className="m-1.5 p-1.5 rounded bg-white"></div>
            </div>

            <div className="flex justify-center items-center border-t-2 border-black border-solid ">
              <div
                className={`m-1 p-1 rounded border-2 border-black border-solid ${
                  chose.size === "sm"
                    ? "bg-slate-800 text-white"
                    : "hover:bg-slate-800 hover:text-white"
                }`}
                //  onClick={ () => setchose({ color: chose.color , size: "ms" })}
              >
                sm
              </div>
              <div
                className={`m-1 p-1 rounded border-2 border-black border-solid ${
                  chose.size === "L"
                    ? "bg-slate-800 text-white"
                    : "hover:bg-slate-800 hover:text-white"
                }`}
                // onClick={ () => setchose({ color: chose.color, size: "L" })}
              >
                L
              </div>
              <div
                className={`m-1 p-1 rounded border-2 border-black border-solid ${
                  chose.size === "xL"
                    ? "bg-slate-800 text-white"
                    : "hover:bg-slate-800 hover:text-white"
                } `}
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
      <div>
        <Newcrds data={imgdata} />
      </div>
    </>
  );
}

CrdInfo.defaultProps = {
  imgdata: null,
};
