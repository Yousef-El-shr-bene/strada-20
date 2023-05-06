import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function ShopNow() {
  return (
    <div className="flex justify-center items-center pt-10 bg-slate-900 h-72 ">

      <Image
        className="h-full w-2/3 "
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
          تسوق الان
        </Link>
      </div>
    </div>
  );
}
