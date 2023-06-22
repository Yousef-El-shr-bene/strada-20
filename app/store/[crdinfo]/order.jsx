"use client";
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from 'next/link';
export default function Order({ onecrd, maindata, usemaindata }) {
  const [lodingbtn, setlodingbtn] = useState(false)
  const [int, setint] = useState(1)
  const rawter = useRouter()
  const { data: session, status } = useSession();
  async function add() {
    setlodingbtn(true)
    if (session && session.user) {
      const req = await fetch(`/api/additem`, {
        method: "POST",
        body: JSON.stringify({ id: onecrd[0].id, token: session?.user.accessTocan, jsonitmdata: maindata }),
      })
      const data = await req.json();
    } else {
      rawter.push("/acount")
    }
    setlodingbtn(false)
  }
  console.log([int, Number(int), Number.isInteger(Number(int))]);
  return (
    <>
      <div className="h-auto flex-grow flex flex-col justify-center items-center sm:w-1/2 w-full text-black ">
        <>
          <h1 className='text-black mt-5 pt-5 font-black ' >{onecrd[0].prise} EGP</h1>
          <div className="flex justify-center items-center flex-col rounded-lg sm:m-1 sm:p-1 p-0 m-0  w-full sm:w-2/4 ">
            <h1 className="font-bold p-2 m-2 ">اللون المتاح</h1>
            <div className="flex justify-center items-center ">
              {onecrd[0].color.map((e, i) => (
                <div
                  key={i}
                  className={`rounded border-solid border-2 border-black ${maindata.color === e ? "m-4 p-6" : "m-1 p-3"
                    } `}
                  style={{ backgroundColor: `#${e}` }}
                  onClick={() => {
                    usemaindata({ ...maindata, color: e });
                  }}
                ></div>
              ))}
            </div>
            <h1 className="font-bold p-2 m-2">المقاس المتاح</h1>
            <div className="flex justify-center items-center  btn-group btn-group-vertical lg:btn-group-horizontal">
              {onecrd[0].size.map((e, i) => {
                return (
                  <div
                    key={i}
                    className={` text-center ${maindata.size === e
                      ? "btn btn-active text-white "
                      : "btn text-black"
                      } `}
                    onClick={() => {
                      usemaindata({ ...maindata, size: e });
                    }}
                  >
                    {e}
                  </div>
                );
              })}
            </div>
            <h1 className="font-bold p-2 m-2">الكمية</h1>
            <input value={int} max={30} min={1} type="number" className='input max-w-xs ' onChange={(e) => {

              if (Number(e.target.value) < 1) {
                setint(1)
              } else if (Number(e.target.value) > 30) {
                setint(30)
              } else if (Number(e.target.value) === NaN) {
                setint(int)
              } else {
                setint(Number(e.target.value))
              }
              usemaindata({ ...maindata, qu: int })
            }} />
          </div>
        </>
        <Link href={`/bag/${maindata.id}+${maindata.size}+${maindata.color}+${maindata.qu}`} >
          <h1 className="bg-teal-500 hover:bg-teal-400 rounded-full m-2 p-2 font-bold text-xl text-white ">
            طلب الان
          </h1></Link>
        {lodingbtn ? <button
          className="bg-teal-500 hover:bg-teal-400 rounded-full m-2 p-2 font-bold text-white "
          onClick={add}
        >
          <span className="loading loading-spinner loading-lg"></span>
        </button> : <button
          className="bg-teal-500 hover:bg-teal-400 rounded-full m-2 p-2 font-bold text-white "
          onClick={add}
        >
          إلي العربة
        </button>}
      </div>
    </>
  )
}
