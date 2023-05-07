'use client'
import React, { useState } from 'react'
import {RiFilter3Fill} from 'react-icons/ri';

export default function Filter() {
    const [fliter , setfliter] = useState(false)

    function handelfliter() {
        setfliter(!fliter)
    }
  return (<>
    <div className='m-3 p-3 bg-teal-500 hover:bg-teal-400 rounded text-white' onClick={handelfliter}  >
        <RiFilter3Fill/>
    </div>
    <div className={`absolute bg-slate-900 left-0 top-36 rounded-r ${fliter === true ? "" : "hidden"} `} >
        
    </div>
    </>
  )
}
