import React from 'react'
import Link from 'next/link'
export default function Rewards() {
  return (
    <div className='flex flex-col w-full justify-center  items-center border-t-2 border-teal-500 pb-5' >
    <h1 className='mb-2 p-2 bg-teal-500 rounded-b-2xl text-white text-lg' > برنامج المكافآت </h1>
    <div className='w-3/4  border-2 border-black rounded  p-12 text-center flex flex-col ' >
    <p className='p-3' >نقدم لك امكانية الربح من خلال التسويق لمنتجاتنا عن طريق لينك مخصص وفي حالة شراء منتجاتنا من اللينك ستحصل علي 5% او اكثر من سعر المنتج الاصلي .</p>
    <Link href='/' className='bg-teal-500 text-white rounded p-3 hover:bg-teal-400  ' >Rewards program</Link>
    </div>
    </div>
  )
}
