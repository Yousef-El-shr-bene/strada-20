"use client"
import React from "react";
import Creatuserpage from "./Creatuserpage";
import { useSession ,signOut } from "next-auth/react";
export default function Acount() {
  const {data : session} = useSession()
  
  return (<>
        { session && session.user ? <><h1 onClick={() => signOut()} >you ar loging in as: {session.user.name} </h1></> : <Creatuserpage/> }
    </>
  );
}
 