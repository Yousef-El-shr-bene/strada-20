"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
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
  });
  console.log(imgs);
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center m-3">
        <div className="w-10/12 sm:w-5/6 h-fit m-2 p-2 flex flex-col sm:flex-row-reverse justify-center items-center rounded border-2 sm:border-0 border-black border-solid ">
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
              className="h-full w-72 sm:w-72 sm:h-96 rounded border-black border-solid border-2"
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
          <>
            <div className="flex justify-center items-center flex-col rounded-lg bg-gray-100 sm:border-black border-solid border-2 sm:m-1 sm:p-1 p-0 m-0  w-full sm:w-2/4 ">
            <h1 className="font-bold">اللون المتاح</h1>
              <div className="flex justify-center items-center ">
                {onecrd[0].color.map((e, i) => (
                  <div
                    key={i}
                    className={`rounded ${
                      maindata.color === e ? "m-4 p-6" : "m-1 p-3"
                    } `}
                    style={{ backgroundColor: `#${e}` }}
                    onClick={() => {
                      usemaindata({ ...maindata, color: e });
                    }}
                  ></div>
                ))}
              </div>
              <h1 className="font-bold">المقاس المتاح</h1>
              <div className="flex justify-center items-center rounded border-2 border-black border-solid ">
                {onecrd[0].size.map((e, i) => {
                  console.log(maindata.size, e, i);
                  return (
                    <div
                      key={i}
                      className={`m-1 p-1  rounded border-2 border-black border-solid text-center  ${
                        maindata.size === e
                          ? "bg-black  text-white"
                          : "bg-white  text-black  "
                      } `}
                      onClick={() => {
                        usemaindata({ ...maindata, size: e });
                      }}
                    >
                      {e}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        </div>
        <Order id={onecrd[0].id} maindata={maindata} />
      </div>
    </>
  );
}
