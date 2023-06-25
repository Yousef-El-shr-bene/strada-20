"use client"; 
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
export const revalidate = 0
export default function New() {
  const [eror, setEror] = useState("");
  const [loding, setLoding] = useState(false);
  const router = useRouter();
  const username = useRef();
  const email = useRef();
  const phone = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  async function supmet() {
    setLoding(true);
    setEror("");
    const form = {
      name: username.current.value.toLowerCase(),
      email: email.current.value.toLowerCase(),
      phone: phone.current.value.toLowerCase(),
      password: password.current.value.toLowerCase(),
    };
    if (
      form.username === "" ||
      form.email === "" ||
      form.phone === "" ||
      form.password === "" ||
      confirmPassword.current.value.toLowerCase() === ""
    ) {
      setEror("empty fields");
    } else if (form.password !== confirmPassword.current.value.toLowerCase()) {
      setEror("Password and re-enter the password is not equal");
    } else if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(form.email) === false
    ) {
      setEror("You have entered an invalid email address!");
    } else if (form.password.length < 8) {
      setEror("password should contin more than 7 characters or Numbers");
    } else if (Number(form.phone) === NaN || form.phone.length === 12 ) {
      setEror("The phone number must be Egyptian and consist of 11 digits");
    } else {
      await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(form),
      }).then(async (d) => {
        const msg = await d.json();
        if (msg.ok) {
          router.push("/acount");
        } else {
          setEror("An error occurred, please try again later");
        }
      }).catch((eror) => {
        setEror("An error occurred, please try again later");
        setLoding(false);
      });
    }
    setLoding(false);
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <div className=" border-2 border-solid border-teal-500 w-auto h-auto text-black flex flex-col justify-center items-center rounded px-10 m-3 ">
        <input
          placeholder="username"
          type="text"
          className="m-3 p-3 rounded bg-teal-50 input"
          ref={username}
        ></input>
        <input
          placeholder="email"
          type="email"
          className="m-3 p-3 rounded bg-teal-50 input"
          ref={email}
        ></input>
        <input
          placeholder="phone number"
          type="text"
          className="m-3 p-3 rounded bg-teal-50 input"
          ref={phone}
        ></input>
        <input
          placeholder="password"
          type="password"
          className="m-3 p-3 rounded bg-teal-50 input"
          ref={password}
        ></input>
        <input
          placeholder="confirm password"
          type="password"
          className="m-3 p-3 rounded bg-teal-50 input"
          ref={confirmPassword}
        ></input>
        {loding ? (
          <button className="bg-teal-500 hover:bg-teal-400 p-3 m-3 rounded text-white ">
            <span className="loading loading-spinner loading-lg"></span>
          </button>
        ) : (
          <button
            className="bg-teal-500 hover:bg-teal-400 p-3 m-3 rounded text-white "
            onClick={supmet}
          >
            انشاء الحساب
          </button>
        )}

        <Link
          href="/acount"
          className="text-lg text-teal-500 hover:text-teal-400 font-semibold border-t-4 border-solid border-teal-500 p-4 m-4"
        >
          لدي حساب بالفعل
        </Link>
        <h1 className="m-3 p-3" >{eror}</h1>
      </div>
    </div>
  );
}