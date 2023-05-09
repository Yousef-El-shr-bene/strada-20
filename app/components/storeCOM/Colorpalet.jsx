import React from "react";

export default function Colorpalet({ setchose, chose }) {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="m-1.5 p-1.5 rounded bg-black"></div>
        <div className="m-1.5 p-1.5 rounded bg-white"></div>
      </div>

      <div className="flex justify-center items-center border-t-2 border-black border-solid ">
        <div
          className={`m-1 p-1 rounded border-2 border-black border-solid ${setchose.size === "sm" ? "bg-slate-800 text-white" : "hover:bg-slate-800 hover:text-white" }`}
          onClick={setchose({ color: chose.color, size: "ms" })}
        >
          sm
        </div>
        <div
          className={`m-1 p-1 rounded border-2 border-black border-solid ${setchose.size === "L" ? "bg-slate-800 text-white" : "hover:bg-slate-800 hover:text-white" }`}
          onClick={setchose({ color: chose.color, size: "L" })}
        >
          L
        </div>
        <div
          className={`m-1 p-1 rounded border-2 border-black border-solid ${setchose.size === "xL" ? "bg-slate-800 text-white" : "hover:bg-slate-800 hover:text-white" } `}
          onClick={setchose({ color: chose.color, size: "xL" })}
        >
          xL
        </div>
      </div>
    </>
  );
}
