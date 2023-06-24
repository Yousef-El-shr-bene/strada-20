"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
export default function Order({ onecrd, maindata, usemaindata }) {
  const [lodingbtn, setlodingbtn] = useState(false);
  const [int, setint] = useState(1);
  const rawter = useRouter();
  const { data: session, status } = useSession();
  const ref = useRef()
  const [lodingsupmet,setlodingsupmet] = useState(false)
  const [error,seterror] = useState("الدفع عند الاستلام")
  console.log({...maindata,qu: int});
  async function ordernaw() {
    if (ref.current.value === "") {
      seterror("يرجا ادخال العنوان")
    }else{
      setlodingsupmet(false)
      const data = await fetch("/api/orderoneiteme",{method : "POST",body : JSON.stringify({token : session?.user.accessTocan,address: ref.current.value,size:maindata.size,qu:int,color:maindata.color})})
      setlodingsupmet(true)
      rawter.push("/");
    }
  }
  async function add() {
    setlodingbtn(true);
    if (session && session.user) {
      const req = await fetch(`/api/additem`, {
        method: "POST",
        body: JSON.stringify({
          id: onecrd[0].id,
          token: session?.user.accessTocan,
          jsonitmdata: { ...maindata, qu: int },
        }),
      });
      rawter.push("/store");
    } else {
      rawter.push("/acount");
    }
    setlodingbtn(false);
  }
  function prise() {
    if (int === 1) {
      return `${onecrd[0].prise} EGP`;
    } else {
      return `${int} X ${onecrd[0].prise} =  ${onecrd[0].prise * int} EGP`;
    }
  }
  console.log([onecrd, maindata, usemaindata]);
  return (
    <>
      <div className="h-auto flex-grow flex flex-col justify-center items-center sm:w-1/2 w-full text-black ">
        <>
          <h1 className="mt-5 pt-5 text-xl font-semibold">{onecrd[0].text}</h1>
          <h1 className="text-black  font-black m-1">{prise()}</h1>
          <div className="flex justify-center items-center flex-col rounded-lg sm:m-1 sm:p-1 p-0 m-0  w-full sm:w-2/4 ">
            <h1 className="font-bold p-2 m-1 ">اللون</h1>
            <div className="flex justify-center items-center ">
              {onecrd[0].color.map((e, i) => (
                <div
                  key={i}
                  className={`rounded border-solid border-2 border-black m-1 ${
                    maindata.color === e ? " mx-2 p-6" : "p-4"
                  } `}
                  style={{ backgroundColor: `#${e}` }}
                  onClick={() => {
                    usemaindata({ ...maindata, color: e });
                  }}
                ></div>
              ))}
            </div>
            <h1 className="font-bold p-2 m-1">المقاس</h1>
            <div className="flex justify-center items-center  btn-group  btn-group-horizontal">
              {onecrd[0].size.map((e, i) => {
                return (
                  <div
                    key={i}
                    className={` text-center ${
                      maindata.size === e
                        ? "btn btn-active text-white "
                        : "btn text-black"
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
            <h1 className="font-bold p-2 m-1">الكمية</h1>
            <div className="flex justify-center items-center ">
              <button
                className="m-1 p-4"
                onClick={() => {
                  if (int <= 1) {
                    setint(1);
                  } else {
                    setint(int - 1);
                  }
                }}
              >
                &#x276E;
              </button>
              <input
                value={int}
                max={30}
                min={1}
                type="number"
                className="input max-w-xs "
                onChange={(e) => {
                  if (Number(e.target.value) < 1) {
                    setint(1);
                  } else if (Number(e.target.value) > 30) {
                    setint(30);
                  } else if (Number(e.target.value) === NaN) {
                    setint(int);
                  } else {
                    setint(Number(e.target.value));
                  }
                }}
              />
              <button
                className="m-1 p-4 "
                onClick={() => {
                  if (int >= 30) {
                    setint(30);
                  } else {
                    setint(int + 1);
                  }
                }}
              >
                &#x276F;
              </button>
            </div>
          </div>
        </>
        {lodingbtn ? (
          <button className="bg-teal-500 hover:bg-teal-400 rounded-full m-1 p-2 font-bold text-white ">
            <span className="loading loading-spinner loading-lg"></span>
          </button>
        ) : (
          <button
            className="bg-teal-500 hover:bg-teal-400 rounded-full m-1 p-2 font-bold text-white "
            onClick={add}
          >
            إلي العربة
          </button>
        )}
        <>
          <details className="dropdown-hover">
            <summary className="bg-teal-500 hover:bg-teal-400 rounded-full m-1 p-2 font-bold text-xl text-white w-auto ">
              طلب الان
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 relative ">
              
              <div className="flex flex-col justify-center items-center">
                <textarea
                  ref={ref}
                  className="textarea text-black "
                  placeholder="العنوان"
                ></textarea>
                {lodingsupmet ? (
                  <button className="bg-teal-500 rounded text-white font-bold hover:bg-teal-300 m-1 p-2 ">
                    <span className="loading loading-dots loading-lg"></span>
                  </button>
                ) : (
                  <button
                    onClick={ordernaw}
                    className="bg-teal-500 rounded text-white font-bold hover:bg-teal-300 m-1 p-2 "
                  >
                    استكمال عملية الشراء
                  </button>
                )}
                <h1>{error}</h1>
              </div>
            
            </ul>
          </details>
        </>
      </div>
    </>
  );
}
