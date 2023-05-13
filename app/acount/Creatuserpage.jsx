"use client";
import React, { useRef, useState } from "react";
import HowWeArr from "../components/homeCOM/HowWeArr";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
export default function Creatuserpage() {
  const refUsername = useRef();
  const refPassword = useRef();
  const [loding, setloding] = useState(false);
  async function logingin() {
    setloding(true)
    const username = refUsername.current.value;
    const password = refPassword.current.value;
    // await fetch("/api/login", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     password: password,
    //     username: username,
    //   }),
    // }).then(async (d)=>{
    //   const data = await d.json()
    //   console.log(data);
    // });
    await signIn("credentials",{
        username : username,
        password : password,
    })
    setloding(false)
  }
  return (
    <>
      <div className="w-full h-screen flex justify-around items-center flex-col-reverse sm:flex-row-reverse ">
        <div className="flex justify-center items-center flex-col w-fit sm:w-2/6 h-auto ">
          <Image
            className=" h-20 w-20 m-4 p-4 bg-black rounded "
            src="/st.png"
            width={100}
            height={100}
            alt="img"
          />
          <div className="sm:w-auto w-full  ">
            <HowWeArr />
          </div>
        </div>
        <div className=" border-2 border-solid border-teal-500 w-auto h-auto text-black flex flex-col justify-center items-center rounded px-10 py-3 m-3 ">
          <input
            placeholder="email"
            type="text"
            className="m-3 p-3 rounded bg-teal-50"
            ref={refUsername}
          ></input>
          <input
            placeholder="password"
            type="password"
            className="m-3 p-3 rounded bg-teal-50"
            ref={refPassword}
          ></input>
          {loding ? (
            <button className="bg-teal-500 hover:bg-teal-400 p-3 m-3 rounded text-white " >
            {/* <svg
              className=" animate-spin h-5 w-5 mr-3"
            >o</svg> */}
            loding...
            </button>
          ) : (
            <button
              className="bg-teal-500 hover:bg-teal-400 p-3 m-3 rounded text-white "
              onClick={logingin}
            >
              تسجيل الدخول
            </button>
          )}

          <Link
            href="/new"
            className="text-lg text-teal-500 hover:text-teal-400 font-semibold border-t-4 border-solid border-teal-500 p-4 m-4"
          >
            ليس لدي حساب
          </Link>
        </div>
      </div>
    </>
  );
}
