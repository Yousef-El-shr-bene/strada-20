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
      router.push(`/serch/${input.current.value}`);
    }
  }
  return (
    <>
      <div className="navbar bg-base-500 rounded-b p-3 w-full drop-shadow-2xl sticky top-0 z-10 bg-gray-50 ">
        <div className="flex-1">
          <div className="flex bg-black w-14 h-14 justify-center items-center rounded hover:rounded-lg mx-5 transition-all ease-in-out delay-75 ">
            <Link href={'/'} >
            <Image
              className=" h-12 w-12 p-2"
              src="/st.png"
              width={100}
              height={100}
              alt="img"
            />
            </Link>
          </div>
          <div className="flex">
            <Link
              href="/bag"
              className="bg-black p-2 transition-all ease-in-out delay-75 rounded  hover:rounded-lg m-2"
            >
              <AiOutlineShopping className="w-5 h-5 text-white hover:text-teal-500" />
            </Link>
            <Link
              href="/acount"
              className="bg-black p-2 transition-all ease-in-out delay-75 rounded  hover:rounded-lg m-2"
            >
              <VscAccount className="w-5 h-5 text-white hover:text-teal-500" />
            </Link>
          </div>
        </div>
        <div className="join drop-shadow-2xl hidden sm:flex ">
                <div>
                    <input
                      className="input input-bordered join-item"
                      placeholder="Search..."
                      ref={input}
                    />
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
        <div className="dropdown dropdown-bottom dropdown-end mx-1 px-1">
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
              <div className="join drop-shadow-2xl flex sm:hidden ">
                <div>
                    <input
                      className="input input-bordered join-item"
                      placeholder="Search..."
                      ref={input}
                    />
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
