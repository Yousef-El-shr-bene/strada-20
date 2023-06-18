"use client";
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from 'next/link';
export default function Order({ id, maindata }) {
  const [lodingbtn, setlodingbtn] = useState(false)
  const rawter = useRouter()
  const { data: session, status } = useSession();
  async function add() {
    setlodingbtn(true)
    if (session && session.user) {
      const req = await fetch(`/api/additem`, {
        method: "POST",
        body: JSON.stringify({ id: id, token: session?.user.accessTocan, jsonitmdata: maindata}),
      })
      const data = await req.json();
    } else {
      rawter.push("/acount")
    }
    setlodingbtn(false)
  }
  console.log(maindata,"01010010")
  return (
    <>
      <div className="h-auto flex-grow flex flex-col justify-center items-center text-white sm:w-1/5 w-full">
        <Link href={`/bag/${maindata.id}+${maindata.size}+${maindata.color}+${maindata.qu}`} >
        <h1 className="bg-teal-500 hover:bg-teal-400 rounded-full m-2 p-2 font-bold text-xl ">
          طلب الان
        </h1></Link>
        {lodingbtn ? <button
          className="bg-teal-500 hover:bg-teal-400 rounded-full m-2 p-2 font-bold"
          onClick={add}
        >
          loding...
        </button> : <button
          className="bg-teal-500 hover:bg-teal-400 rounded-full m-2 p-2 font-bold"
          onClick={add}
        >
          إلي العربة
        </button>}
      </div>
    </>
  )
}
