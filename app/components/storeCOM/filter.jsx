'use client'
import React, { useState } from 'react'
import {RiFilter3Fill} from 'react-icons/ri';

export default function Filter() {
    const [fliter , setfliter] = useState(false)

    function handelfliter() {
        setfliter(!fliter)
    }
  return (<>
    <div className=' absolute left-0 top-36  p-3 bg-teal-500 hover:bg-teal-400 rounded text-white' >
        <RiFilter3Fill onClick={handelfliter} />
        <div className={`bg-slate-900 rounded-r ${fliter === true ? "" : "hidden"} `} >
            qewrqqwerrewqqwerreqwqwer
            <h1>ewrwerqwerqwerqwerwer</h1>
        </div>
    </div>

    </>
  )
}
