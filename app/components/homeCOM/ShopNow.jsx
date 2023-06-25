import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function ShopNow() {
  return (<>
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