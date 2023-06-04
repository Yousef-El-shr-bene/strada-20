"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export default function Order({id,maindata}) {
    const rawter = useRouter()
    const { data: session, status } = useSession();
    async function  add() {
        if (session && session.user) {
        const req = await fetch(`/api/additem`, {
            method: "POST",
            body: JSON.stringify({ id:id,token:session?.user.accessTocan }),
          })
          const data = await req.json();
        }else{
        rawter.push("/acount")
        }
    }
  return (
<>
<div className="h-auto flex-grow flex flex-col justify-center items-center text-white sm:w-1/5 w-full">
          <h1 className="bg-teal-500 hover:bg-teal-400 rounded-full m-2 p-2 font-bold text-xl ">
            طلب الان
          </h1>
          <button
            className="bg-teal-500 hover:bg-teal-400 rounded-full m-2 p-2 font-bold"
            onClick={add}
          >
            إلي العربة
          </button>
        </div>
</>
    )
}
