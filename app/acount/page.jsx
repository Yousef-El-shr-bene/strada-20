"use client"
import HowWeArr from "../components/homeCOM/HowWeArr";
import Image from "next/image";
import { signIn } from "next-auth/react";
import React , {useRef,useState} from "react";
import Creatuserpage from "../components/acountCOM/Creatuserpage";
import { useSession ,signOut } from "next-auth/react";
import UserData from "../components/acountCOM/UserData"
export default function Acount() {
  const {data : session} = useSession()
  const refUsername = useRef();
  const refPassword = useRef();
  const [loding, setloding] = useState(false);
  async function logingin() {
    setloding(true)
    const username = refUsername.current.value;
    const password = refPassword.current.value;

    await signIn("credentials",{
        username : username,
        password : password,
    })
    setloding(false)
  }
  return (
        <>
        <div className="w-full h-screen flex justify-around items-center flex-col-reverse sm:flex-row-reverse ">
          <div className="flex justify-center items-center flex-col w-fit sm:w-2/6 h-auto ">
            <Image
              className=" h-20 w-20 m-4 p-4 bg-black rounded "
              src="/st.png"
              width={100}
              height={100}
              alt="img"
            />
            <div className="sm:w-auto w-full  ">
              <HowWeArr />
            </div>
          </div>
          <div className=" border-2 border-solid border-teal-500 w-auto h-auto text-black flex flex-col justify-center items-center rounded px-10 py-3 m-3 ">
          {session && session.user ?  <UserData session={session}  /> :  <Creatuserpage loding={loding} logingin={logingin} refPassword={refPassword} refUsername={refUsername} /> }
          </div>
        </div>
      </>
  );
}
 