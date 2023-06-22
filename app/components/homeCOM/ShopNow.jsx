import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function ShopNow() {
  return (<>
    {/* <div className="flex justify-center items-center pt-10 bg-slate-900 h-72 ">

      <Image
        className="h-full w-2/3 sm:w-2/4 "
        src="/testT.png"
        width={1000}
        height={1100}
        alt="img"
      />
      <div>
        <Link
          href="/"
          className="bg-teal-400 p-3 text-white rounded hover:bg-teal-500 "
        >
         
        </Link>
      </div>
    </div> */}
    {/*  */}
    <div className="hero min-h-screen z-0 relative img">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div className="flex" >
          <h1 className="mb-5 text-5xl font-bold" >rada-20</h1>
          <h1 className="mb-5 text-5xl font-bold text-amber-400 ">t</h1>
          <h1 className="mb-5 text-5xl font-bold">S</h1>
          </div>

          <p className="mb-5">افضل ما توصل له خبراء الفاشون</p>
          <button>
          <Link
          className="btn btn-primary"
           href="/store"
          >تسوق الان</Link>
          </button>
        </div>
      </div>
    </div>
  </>
  );
}