'use client'
import React, { useState } from 'react'
import {RiFilter3Fill} from 'react-icons/ri';

export default function Filter() {
    const [filter , setfliter] = useState(false)

    function handelfliter() {
        setfliter(!filter)
    }
    const filtercomp = <>
            <div className='flex flex-col' >
            werwerwerwerqwrewerwerwer
        </div>
    </>;
  return (<>
    <div className='    p-3 bg-teal-500 hover:bg-teal-400 rounded text-white ' onClick={handelfliter} >
        <RiFilter3Fill />
    </div>
    {filter === true ? filtercomp : ""}

    </>
  )
}
