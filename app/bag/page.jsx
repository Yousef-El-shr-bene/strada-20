import React from 'react'
import Card from '../components/homeCOM/component/Card'
import getnewst from "../../lib/getnewst"

export default async function Shoppingbag() {
const imgdata = await getnewst()

  return (
    <div className='flex justify-center items-center ' >
      <div className=' w-80 flex flex-col justify-center items-center border-2 border-solid border-black bg-teal-50 m-5 p-5 ' >
        <h1 className=' font-bold m-1 p-1 text-xs sm:text-base' >المبلغ الكلي</h1>
        <h1 className=' font-semibold m-1 p-1 text-sm sm:text-base' >1000 جنية</h1>
        <button className='bg-teal-500 rounded text-white m-3 p-3 hover:bg-teal-400 ' >استكمال عملية الشراء</button>
      </div>
     <div className='flex flex-row justify-center items-center flex-wrap ' >
     {imgdata && imgdata.map((e,i)=>(<><Card id={e.id} text={e.text} url={e.url} key={i} /></>))}
      </div>
    </div>
  ) 
}