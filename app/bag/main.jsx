"use client"
import React, { useEffect, useRef, useState } from 'react'
import Card from '../components/homeCOM/component/Card'
import { useSession } from "next-auth/react";
import Link from 'next/link';
export default  function Shoppingbag() {
  const { data: session, status } =  useSession();
  const [data ,setdata] = useState(false)
  const ref = useRef(null)
  const [error,seterror] = useState("")
    console.log(session,data);
    function ordernaw() {
      seterror("")
      if (ref.current.value === "") {
        seterror("blese enter your address")
      }else {
      const order = fetch('/api/order',{
          method : "POST",
          body : JSON.stringify({token: session?.user.accessTocan , address : ref.current.value })
        })
      }
    }
    useEffect(()=>{
    let isRender = false
    if(session && session.user && data === false && isRender === false){
        const gata = fetch('/api/gitbagitem',{
            method : "POST",
            body : JSON.stringify({token: session?.user.accessTocan })
          }).then((res)=> res.json())
          .then((data) => {
            if(!isRender){
                setdata(data)
                console.log("useEffect 1", data)
            }
          })
    }
    return ()=>{
        isRender = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data, session])
    console.log(data)
   function StatusOfData() {
       if (data.error && data.error === "no data") {
        return <>
        <h1 className=' font-bold m-1 p-1 text-xs sm:text-base' >لا يوجد منتجات</h1>
        <Link href="/store" className='bg-teal-500 rounded text-white hover:bg-teal-300 ' >تسوق الان</Link>
        </>
      }else {
        let totalPrise = 0
        for (let i = 0; i < data.imgdata.length; i++) {
        const theData = {id : data.imgdata[i].id , qu : data.imgdata[i].qu , prise : data.imgdata[i].prise  }
        let starterprise = theData.qu * theData.prise
        totalPrise = totalPrise + starterprise
        }
        return <>
        <h1 className=' font-bold m-1 p-1 text-xs sm:text-base' >المبلغ الكلي</h1>
        <h1 className=' font-semibold m-1 p-1 text-sm sm:text-base' >{totalPrise} جنية</h1>
        <input ref={ref} placeholder='address' type='text' />
        <button className='bg-teal-500 rounded text-white m-3 p-3 hover:bg-teal-400 ' onClick={ordernaw} >استكمال عملية الشراء</button> : <h1>order aded sucsesfuly</h1>
        <h1>{error}</h1>
        </>
      }
    }
 return (<>
    <div className='flex justify-center items-center ' >
     <div className=' w-80 flex flex-col justify-center items-center border-2 border-solid border-black bg-teal-50 m-5 p-5 ' >
     {data !== false ? StatusOfData() : <><h1 className=' font-bold m-1 p-1 text-xs sm:text-base' >loding...</h1></> }
      </div>
     <div className='flex flex-row justify-center items-center flex-wrap ' >
      {data !== false ? data.imgdata.map((e,i)=><Card id={e.id} text={e.text} url={e.url} key={i} />) : <></>}
      </div>
    </div>
    </>
  )
}
