import Image from "next/image";
import React from "react";
import HowWeArr from "../components/homeCOM/HowWeArr";
import Link from "next/link";
export default function Acount() {
  return (
    <div className="w-full h-screen flex justify-around items-center flex-col-reverse sm:flex-row-reverse ">
      <div className="flex justify-center items-center flex-col w-fit sm:w-2/6 h-auto ">
        <Image
          className=" h-20 w-20 m-4 p-4 bg-black rounded "
          src="/st.png"
          width={100}
          height={100}
        />
        <div className="sm:w-auto w-full  " >
        <HowWeArr />  
        </div>

      </div>
      <div className=" border-2 border-solid border-teal-500 w-auto h-auto text-black flex flex-col justify-center items-center rounded p-3 m-3 ">
        <input
          placeholder="email"
          type="text"
          className="m-3 p-3 rounded bg-teal-50"
        ></input>
        <input
          placeholder="password"
          type="password"
          className="m-3 p-3 rounded bg-teal-50"
        ></input>
        <button className="bg-teal-500 hover:text-teal-400 p-3 m-3 rounded text-white ">
          تسجيل الدخول
        </button>
<Link href='/new' className="text-lg text-teal-500 hover:text-teal-400 font-semibold border-t-4 border-solid border-teal-500 p-4 m-4" > ليس لدي حساب </Link>
      </div>
    </div>
  );
}
