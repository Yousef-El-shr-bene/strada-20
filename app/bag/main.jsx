"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Datacrd from "./datacrd";
import { useRouter } from "next/navigation";
export default function Shoppingbag() {
  const { data: session, status } = useSession();
  const [data, setdata] = useState(false);
  const ref = useRef(null);
  const [error, seterror] = useState("الدفع عند الاستلام");
  const [lodingsupmet, setlodingsupmet] = useState(false);
  const router = useRouter();
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
            setdata(data);
          }
        });
    }
    return () => {
      isRender = true;
    };
  }, [data, session]);
  async function ordernaw() {
    seterror("");
    setlodingsupmet(true);
    if (ref.current.value === "") {
      seterror("blese enter your address");
    } else {
      const order = await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify({
          token: session?.user.accessTocan,
          address: ref.current.value,
        }),
      });
    }
    router.push("/");
    setlodingsupmet(false);
  }
  function Statusbanal() {
    if (data.error || data.imgdata.length === 0) {
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
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center flex-wrap ">
            {data !== false && !data.error ? (
              data.imgdata.map((e, i) => (
                <Datacrd e={e} i={i} key={i} setdata={setdata} />
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
    </>
  );
}
