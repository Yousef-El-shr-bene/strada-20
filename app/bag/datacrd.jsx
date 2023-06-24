"use client";
import React,{useState} from 'react'
import Card from "../components/homeCOM/component/Card";
import { useSession } from 'next-auth/react';
export default function Datacrd({e,setdata}) {
    const [deletebtn,setdeletebtn] = useState(false)
    const { data: session, status } = useSession();
    const loding = (<button className="btn" ><span className="loading loading-dots loading-lg"></span></button>)
    const onrady = (<button className="rounded bg-teal-950 hover:bg-teal-800 text-white p-1" onClick={()=>{deleteitem(e.id)}}>delete</button>)
    async function deleteitem(id) {
        setdeletebtn(true)
        const deleteitem = await fetch('/api/deleteitem',{method : "POST",body : JSON.stringify({
          token : session.user.accessTocan,
          crdid : id
        }) })
        if (setdata) {
          setdata(false)
        }
      }
  return (
    <div className={`bg-white w-auto h-auto flex flex-col justify-center items-center`} >
                <Card id={e.id} text={e.text} url={e.url} />
                <div className="flex justify-center items-center" >
                {deletebtn ? <button className="btn" ><span className="loading loading-dots loading-lg"></span></button> : <button className="rounded bg-teal-950 hover:bg-teal-800 text-white p-1" onClick={()=>{deleteitem(e.id)}}>delete</button>}
                <div
                  className={`rounded border-solid border-2 border-black m-1 p-3`}
                  style={{ backgroundColor: `#${e.color}` }}
                ></div>
                <div
                    className={`text-center btn btn-primary p-2 text-white`}
                  >
                    {e.size}
                  </div>
                  <div className="m-1 p-1 font-semibold" >
                   {e.qu} X {e.prise} = {e.qu * e.prise} EGP
                  </div>
                </div>
                </div>
  )
}
