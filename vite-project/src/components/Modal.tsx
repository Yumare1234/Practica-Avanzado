import React from "react"
import { useState } from "react"

export default function Modal() {
    return (
        <>
        <button className="bg-cyan-500 py-2 px-6 rounded-sm text-white font-bold m-5"> 
            Abrir Modal 
        </button>
       <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
         <div className=" bg-white p-5 rounded flex flex-col justify-center items-center gap-5"></div>
       </div>
    </>
   );
}