"use client";
import Image from "next/image";
import { useState } from "react";
import Order from "./order";
export default function Imgenav({ onecrd }) {
  const [imgs, useimge] = useState({
    totalimgs: onecrd[0].url.length,
    crunt: 1,
  });
  const [maindata, usemaindata] = useState({
    id: onecrd[0].id,
    size: onecrd[0].size[0],
    color: onecrd[0].color[0],
    qu : 1
  });
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center m-3">
        <div className="w-5/6 h-fit m-2 p-2 flex flex-col sm:flex-row-reverse justify-center items-center ">
          <div className="flex flex-row justify-center items-center h-auto">
            {imgs.crunt === 1 ? (
              <button
                className="m-4 p-4 text-white "
              >
                &#x276E;
              </button>
            ) : (
              <button
                className="m-4 p-4   "
                onClick={() => {
                  useimge({ ...imgs, crunt: imgs.crunt - 1 });
                }}
              >
                &#x276E;
              </button>
            )}
            <Image
              className="h-96 w-72 sm:w-72 sm:h-96 rounded border-black border-solid border-2 "
              src={onecrd[0].url[imgs.crunt - 1]}
              width={1000}
              height={1100}
              alt="img"
            />
            {imgs.crunt === imgs.totalimgs ? (
              <button
              className="m-4 p-4 text-white "
            >
              &#x276F;
            </button>
            ) : (
              <button
                className="m-4 p-4"
                onClick={() => {
                  useimge({ ...imgs, crunt: imgs.crunt + 1 });
                }}
              >
                &#x276F;
              </button>
            )}
          </div>

        </div>
        <Order onecrd={onecrd} maindata={maindata} usemaindata={usemaindata} />
      </div>
    </>
  );
}
