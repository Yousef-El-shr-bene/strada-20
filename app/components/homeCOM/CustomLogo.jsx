import React from 'react'
import Link from 'next/link'
export default function CustomLogo() {
  return (
    <div className='flex flex-col w-full justify-center  items-center border-t-2 border-teal-500 pb-5' >
    <h1 className='mb-2 p-2 bg-teal-500 rounded-b-2xl text-white text-lg' > برنامج المكافآت </h1>
    <div className='w-3/4  border-2 border-black rounded  p-12 text-center flex flex-col ' >
    <p className='p-3' >في حالة كنت جرفيك ديزينر سوف نقدم لك خدمة اللوجو المخصص  </p>  
    <p className='p-3' >وهي عبارة عن انك سوف ترسل لنا تصميمك وفي حالة شراء المنتج ستحصل علي نسبة من السعر الكلي نظير اللوجو الخاص بك .</p>
    <Link href='/' className='bg-teal-500 text-white rounded p-3 hover:bg-teal-400  ' >custom logo</Link>
    </div>
    </div>
  )
}
