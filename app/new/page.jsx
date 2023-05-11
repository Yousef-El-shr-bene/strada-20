import Link from 'next/link'
import React from 'react'

export default function New() {
  return (
    <div className='flex justify-center items-center flex-col' >
        <div className=" border-2 border-solid border-teal-500 w-auto h-auto text-black flex flex-col justify-center items-center rounded px-20 m-3 ">
        <input
          placeholder="username"
          type="text"
          className="m-3 p-3 rounded bg-teal-50"
        ></input>
        <input
          placeholder="email"
          type="text"
          className="m-3 p-3 rounded bg-teal-50"
        ></input>
                <input
          placeholder="phone number"
          type="text"
          className="m-3 p-3 rounded bg-teal-50"
        ></input>
        <input
          placeholder="password"
          type="password"
          className="m-3 p-3 rounded bg-teal-50"
        ></input>
                <input
          placeholder="confirm password"
          type="password"
          className="m-3 p-3 rounded bg-teal-50"
        ></input>
        <button className="bg-teal-500 hover:text-teal-400 p-3 m-3 rounded text-white ">
         انشاء الحساب
        </button>
<Link href='/acount' className="text-lg text-teal-500 hover:text-teal-400 font-semibold border-t-4 border-solid border-teal-500 p-4 m-4" > لدي حساب بالفعل </Link>
      </div>
    </div>
  )
}
