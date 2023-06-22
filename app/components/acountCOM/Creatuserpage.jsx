import Link from "next/link";
export default function Creatuserpage({ loding, refUsername, refPassword, logingin }) {

  return (
    <>
      <input
        placeholder="email"
        type="text"
        className="m-3 p-3 rounded bg-teal-50"
        ref={refUsername}
      ></input>
      <input
        placeholder="password"
        type="password"
        className="m-3 p-3 rounded bg-teal-50"
        ref={refPassword}
      ></input>
      {loding ? (
        <button className="bg-teal-500 hover:bg-teal-400 p-3 m-3 rounded text-white " >
          <span className="loading loading-spinner loading-lg"></span>
        </button>
      ) : (
        <button
          className="bg-teal-500 hover:bg-teal-400 p-3 m-3 rounded text-white "
          onClick={logingin}
        >
          تسجيل الدخول
        </button>
      )}
      <Link
        href="/new"
        className="text-lg text-teal-500 hover:text-teal-400 font-semibold border-t-4 border-solid border-teal-500 p-4 m-4"
      >
        ليس لدي حساب
      </Link>
    </>
  );
}
