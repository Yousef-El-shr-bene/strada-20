import React from "react";
import { signOut, } from "next-auth/react";
export default function UserData({ session }) {
  return (<>

      <h1>User name : {session.user.name}</h1>
      <h1>User email : {session.user.email}</h1>
      <button
        className="bg-teal-500 hover:bg-teal-400 p-3 m-3 rounded text-white "
        onClick={() => {
          signOut();
        }}
      >
        تسجيل الخروج
      </button>
    </>
  );
}
