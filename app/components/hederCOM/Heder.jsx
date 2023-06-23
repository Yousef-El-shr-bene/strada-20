"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { Vazirmatn } from "next/font/google";
import Link from "next/link";
const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
});
export default function Heder() {
  const router = useRouter();
  const input = useRef(null);
  function onserch() {
    if (input.current.value !== "") {
      router.push(`/${input.current.value}`);
    }
  }
  return (
    <>
      <div className="navbar bg-base-500 rounded p-3 w-full drop-shadow-2xl sticky top-0 z-10 bg-gray-50 ">
        <div className="flex-1">
          <div className=" flex bg-black w-20 h-20 justify-center items-center rounded mx-5">
            <Image
              className=" h-20 w-20 p-4"
              src="/st.png"
              width={100}
              height={100}
              alt="img"
            />
          </div>
          <div className="flex">
            <Link
              href="/bag"
              className="bg-black p-4 transition-all ease-in-out delay-75 rounded  hover:rounded-lg m-3"
            >
              <AiOutlineShopping className="w-5 h-5 text-white hover:text-teal-500" />
            </Link>
            <Link
              href="/acount"
              className="bg-black p-4 transition-all ease-in-out delay-75 rounded  hover:rounded-lg m-3"
            >
              <VscAccount className="w-5 h-5 text-white hover:text-teal-500" />
            </Link>
          </div>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end mx-3 px-3 ">
          <label tabIndex={0} className="btn m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-auto "
          >
            <li>
              <Link href="/">
                <p className=" text-center p-3  hover:text-teal-500">
                  الرئيسية
                </p>
              </Link>
            </li>
            <li>
              <Link href="/store">
                <p className=" text-center p-3  hover:text-teal-500">
                  تسوق الان
                </p>
              </Link>
            </li>
            <li>
              <Link href="/rewardsProgram">
                <p className=" text-center p-3  hover:text-teal-500">
                  Rewards program
                </p>
              </Link>
            </li>
            <li>
              <Link href="/customLogo">
                <p className=" text-center p-3  hover:text-teal-500">
                  custom logo
                </p>
              </Link>
            </li>
            <li>
              <Link href="/connect">
                <p className=" text-center p-3  hover:text-teal-500">
                  تواصل معنا
                </p>
              </Link>
            </li>
            <li>
              <div className="join drop-shadow-2xl ">
                <div>
                  <div>
                    <input
                      className="input input-bordered join-item"
                      placeholder="Search..."
                      ref={input}
                    />
                  </div>
                </div>
                <div className="indicator">
                  <button
                    className="btn join-item bg-teal-500 p-3.5 text-center hover:bg-teal-400 text-white "
                    onClick={onserch}
                  >
                    <AiOutlineSearch />
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
