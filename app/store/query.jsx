'use client'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import Card from '../components/homeCOM/component/Card'
import Filter from '../components/storeCOM/filter'
import { User, imgdata } from '@prisma/client';
export default function Query() {
    const [imgdata , useimgdata] = useState({in : 0 ,data : [] , status : false})
    const { data: session, status } = useSession();
    console.log(imgdata);
    
    useEffect(() => {
      console.log(["useEffect 1"]);
      if (session && session.user && imgdata.in === 1 ) {
        console.log(["useEffect if true"]);
        const gitImgdata = fetch(`/api/getallcrds`,{
            method : "POST",
            body : JSON.stringify({token :session?.user.accessTocan , skipandtack : imgdata.in  })
        })
        .then(async res => {
            const jsondata = await res.json();
            const { imgdataq }   = await jsondata
            useimgdata({in : imgdata.in + 1, data : imgdataq , status : true})
        })
      }
      console.log(["useEffect after if"]);
    }, [imgdata,session])

    function gitMorData() {
      useimgdata({...imgdata , status : false})
        const gitImgdata = fetch("/api/getallcrds",{
            method : "POST",
            body : JSON.stringify({token :session?.user.accessTocan , skipandtack : imgdata.in  })
        }).then(res => res.json)
        .then(async res => {
          const jsondata = await res.json();
          const { imgdataq }   = await jsondata
            useimgdata({in : imgdata.in + 1, data : data.puch(imgdataq)  , status : true})
            console.log(["imgdataq",imgdataq]);
        })
    }
  return (
    <div className='flex flex-col' >
    <div className='flex flex-wrap justify-center items-center' >
      {imgdata.in !== 1 ? imgdata.data.map((e ,i )=>(<><Card id={e.id} text={e.text} url={e.url}  key={i} /></>)) : ""  }
    </div>
    {imgdata.status ? <button className='bg-teal-500 hover:bg-teal-300 w-full' onClick={gitMorData} > تحميل المزيد</button>  : <button className='bg-teal-500 hover:bg-teal-300 w-full' >loding...</button>  }
    </div>
  )
}
