'use client'
import React, { useEffect, useState } from 'react'
import Card from '../components/homeCOM/component/Card'
export default function Query() {
  const [imgdata, useimgdata] = useState({ in: 0, data: [], status: false ,past : 0 })
  function lodingdata() {
     fetch(`/api/getallcrds`, {
      method: "POST",
      body: JSON.stringify({ skipandtack: imgdata.in }),
    })
      .then(async res => {
        const jsondata = await res.json();
        const { imgdataq } = await jsondata
        useimgdata({ in: imgdata.in + 1, data: [...imgdata.data , ...imgdataq ] , status: true })
      })
  }
  useEffect(() => {
    if (imgdata.in === 0) {
      lodingdata()
    }
  }, [imgdata])
  function gitMorData() {
    useimgdata({ ...imgdata, status: false })
    lodingdata()
  }
  function lodeerror() {
    if (imgdata.status) {
      return <button className='bg-teal-500 hover:bg-teal-300 w-1/2 h-10 rounded-lg mb-10  text-center text-white font-bold' onClick={gitMorData} > تحميل المزيد</button>
    }else{
      return <button className='bg-teal-500 hover:bg-teal-300 w-1/2 h-16 rounded-lg mb-10  text-center text-white font-bold' ><span className="loading loading-spinner loading-lg"></span></button>
    }
  }
  return (
    <div className='flex flex-col' >
      <div className='flex flex-wrap justify-center items-center' >
        {imgdata.in !== 0 ? imgdata.data.map((e, i) => <><Card id={e.id} text={e.text} url={e.url} key={i} /></>) : ""}
      </div>
      <div className='flex justify-center items-center' >
    {lodeerror()}
    </div>
    </div>
  )
}
