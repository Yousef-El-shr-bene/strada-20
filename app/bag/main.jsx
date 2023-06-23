"use client";
import React, { useEffect, useRef, useState } from "react";
import Card from "../components/homeCOM/component/Card";
import { useSession } from "next-auth/react";
import Link from "next/link";
export default function Shoppingbag() {
  const { data: session, status } = useSession();
  const [data, setdata] = useState(false);
  const ref = useRef(null);
  const [error, seterror] = useState("");
  function ordernaw() {
    seterror("");
    if (ref.current.value === "") {
      seterror("blese enter your address");
    } else {
      const order = fetch("/api/order", {
        method: "POST",
        body: JSON.stringify({
          token: session?.user.accessTocan,
          address: ref.current.value,
        }),
      });
    }
  }
  useEffect(() => {
    let isRender = false;
    if (session && session.user && data === false && isRender === false) {
      const gata = fetch("/api/gitbagitem", {
        method: "POST",
        body: JSON.stringify({ token: session?.user.accessTocan }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (!isRender) {
            console.log(data);
            setdata(data);
            console.log("useEffect 1", data);
          }
        });
    }
    return () => {
      isRender = true;
    };
  }, [data, session]);
  function Statusbanal() {
    if (data.error) {
      return (
        <>
          <div className="flex justify-center items-center flex-col ">
            <div className="stats bg-primary text-primary-content m-5 p-5">
              <h1 className="text-white font-black m-2 p-2">
                لايوجد منتجات في العربة
              </h1>
              <button className="text-white font-black m-2 p-2 ">
                <Link
                  href="/store"
                  className="bg-teal-500 rounded text-white hover:bg-teal-300 m-2 p-2"
                >
                  تسوق الان
                </Link>
              </button>
            </div>
          </div>
        </>
      );
    } else {
      let totalPrise = 0;
      for (let i = 0; i < data.imgdata.length; i++) {
        const theData = {
          id: data.imgdata[i].id,
          qu: data.imgdata[i].qu,
          prise: data.imgdata[i].prise,
        };
        let starterprise = theData.qu * theData.prise;
        totalPrise = totalPrise + starterprise;
      }
      return (
        <div className="flex justify-center items-center flex-col mb-5 ">
          <div className="stats bg-primary text-primary-content m-5">
            <div className="stat">
              <div className="stat-title text-white"> المبلغ الكلي</div>
              <div className="stat-value">
                {data === false ? (
                  <span className="loading loading-dots loading-lg"></span>
                ) : (
                  `${totalPrise} EGP`
                )}
              </div>
            </div>
            <div className="stat">
              <div className="stat-actions">
                {data === false ? (
                  <span className="loading loading-dots loading-lg"></span>
                ) : (
                  <button className="bg-teal-500 rounded text-white font-bold hover:bg-teal-300 m-2 p-2 ">
                    استكمال عملية الشراء
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center flex-wrap ">
            {data !== false && !data.error ? (
              data.imgdata.map((e, i) => (
                <div className="bg-white w-auto h-auto flex flex-col justify-center items-center" >
                <Card id={e.id} text={e.text} url={e.url} key={i} />
                <div className="flex justify-center items-center absolute bottom-7" >
                <div
                  className={`rounded border-solid border-2 border-black m-1 p-3`}
                  style={{ backgroundColor: `#${e.color}` }}
                ></div>
                <div
                    className={`text-center btn btn-primary text-white`}
                  >
                    {e.size}
                  </div>
                  <div className="m-1 p-1 font-semibold" >
                   {e.qu} X {e.prise} = {e.qu * e.prise} EGP
                  </div>
                </div>
                </div>

              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      );
    }
  }
  return (
    <>
      {/*  */}
      {data === false ? (
        <div className="flex justify-center items-center flex-col ">
          <div className="stats bg-primary text-primary-content m-5">
            <div className="stat">
              <div className="stat-title text-white"> المبلغ الكلي</div>
              <div className="stat-value">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            </div>
            <div className="stat">
              <div className="stat-actions">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        Statusbanal()
      )}

      {/*  */}
    </>
  );
}
