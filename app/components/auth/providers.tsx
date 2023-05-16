"use client"
import React, { ReactNode } from 'react'
import {SessionProvider} from "next-auth/react"

interface props {
    children : ReactNode
}

export default function Providers({children}: props) {
  return (

      <SessionProvider>
      {children}
      </SessionProvider>
    //
    
  )
}
