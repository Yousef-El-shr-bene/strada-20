import React from 'react'
import Crd from '../components/homeCOM/component/Card'
export default function Cart() {
  return (
    <div className='flex justify-center items-center ' >
      <div className=' w-80 flex flex-col justify-center items-center border-2 border-solid border-black bg-teal-50 m-5 p-5 ' >
        <h1 className='text-base font-bold m-1 p-1 ' >المبلغ الكلي</h1>
        <h1 className='text-sm font-semibold m-1 p-1 ' >1000 جنية</h1>
        <button className='bg-teal-500 rounded text-white m-3 p-3 hover:bg-teal-400 ' >استكمال عملية الشراء</button>
      </div>
     <div className='flex flex-row justify-center items-center flex-wrap ' >
        <Crd/>
        <Crd/>
        <Crd/>
        <Crd/>
        <Crd/>
        <Crd/>
      </div>
    </div>
  )
}
