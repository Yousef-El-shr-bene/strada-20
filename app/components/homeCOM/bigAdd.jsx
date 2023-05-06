import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function BigAdd() {
  return (
    <>
      <section className="w-auto h-full flex flex-col bg-blue-950 rounded md:flex-row m-20 justify-between items-center">
        <Image
          className="h-52 w-full rounded-r  md:w-auto"
          src="/testEad.webp"
          width={1000}
          height={1100}
          alt="img"
        />
        <div className="text-center text-white sm:text-amber-400 md:text-red-700 lg:text-lime-400 xl:text-indigo-700 2xl:text-indigo-950 flex flex-col flex-nowrap w-full m-4 text-xs md:text-lg ">
          <h2>كل سنة وانتم طيبين بمناسبة عيد الفطر المبارك</h2>
          <h1> برومو كود : ead </h1>
          <h2> خصم 5% علي كل المنتجات</h2>
        </div>
      </section>
    </>
  );
}
