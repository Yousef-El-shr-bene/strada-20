import React from 'react'
import {signOut} from 'next-auth/react'
export default function UserData({session}) {
  return (
    <div onClick={()=>{signOut()}} >User : {session.user.email}</div>
  )
}
