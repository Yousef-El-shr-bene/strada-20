import React from 'react'
import getonecrd from "../../lib/getonecrd"
export default async function RewardsProgram() {
  const data = await getonecrd(1)
  console.log(await data); 
return  (
    <div className='w-full flex justify-center items-center ' >
      <div></div>
         <div className='flex justify-center items-center flex-col border-2 border-teal-500 border-solid rounded m-3 p-3 text-lg font-bold ' >
        <h3>برنامج المكافئات تحت الانشاء و سوف يتوفر قريبا</h3>
      </div>
    </div> 
  )
}
