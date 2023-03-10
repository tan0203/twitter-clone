import React, { useEffect, useState, useRef } from "react";
import TwoInforPage from "./twoInfor";

export interface ThreeInforPageProps {}
export default function ThreeInforPage(props: ThreeInforPageProps) {
  const [activeTab, setActiveTab] = React.useState(false);
  const formRef = useRef(null);
  return (
    <>
    {activeTab ? (
        <div ref={formRef}>
          <TwoInforPage />
        </div>
      ) : (
      <div className="h-screen w-screen absolute bg-transparent	 z-50">
        <div className="relative h-4/5 w-2/5 bg-black m-auto top-16 rounded-2xl mx-auto">
          <a onClick={() => setActiveTab(true)} className="flex text-white">
            <i className="fa-solid fa-arrow-left-long text-lg ml-2 mt-2 hover:bg-gray-800 h-9 w-9 rounded-full p-1 pl-3 "></i>
            {/* <p>1/5</p> */}
          </a>
          <div className="ml-14 mt-7 w-4/5 justify-center">
            <span className="text-3xl  font-bold text-gray-200">
            Tạo tài khoản của bạn            </span>
            <br />
            <br />
            <br />
          </div>

          <button className="ml-14 rounded-full text-center font-bold text-lg w-4/5 h-12 bg-white">
            Tiếp theo
          </button>
        </div>
      </div>
)}
    </>
  );
}
