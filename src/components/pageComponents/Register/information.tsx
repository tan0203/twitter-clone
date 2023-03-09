import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import CustomDatePicker from "./CustomDatePicker";

export interface InforPageProps {}
export default function InforPage(props: InforPageProps) {
  const [activeId, setActiveId] = useState("1");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = () => {};

  return (
    <>
      <div className="h-screen w-screen absolute bg-transparent	 z-50">
        <div className="relative h-4/5 w-2/5 bg-black m-auto top-16 rounded-2xl mx-auto">
          <a className="flex text-white">
            <i className="fa-solid fa-xmark  text-xl ml-2 mt-2 hover:bg-gray-800 h-9 w-9 rounded-full p-1 pl-3 "></i>
            {/* <p>1/5</p> */}
          </a>
          <div className="ml-10 mt-7 w-4/5 justify-center">
            <span className="text-3xl  font-bold text-white">
              Tạo tài khoản mới của bạn
            </span>
            <input
              name="name"
              className="w-full h-14 mt-10 rounded border focus:border-2 border-slate-700 pl-3 bg-black focus:outline-none focus:border-sky-500 text-white"
              placeholder="Tên"
            ></input>
            <div>
              {activeId === "1" ? (
                <input
                  name="phone_number"
                  className="w-full h-14 mt-5 rounded border focus:border-2 border-slate-700 pl-3 bg-black focus:outline-none focus:border-sky-500 text-white"
                  placeholder="Điện thoại"
                />
              ) : (
                <input
                  name="email"
                  className="w-full h-14 mt-5 rounded border focus:border-2 border-slate-700 pl-3 bg-black focus:outline-none focus:border-sky-500 text-white"
                  placeholder="Email"
                />
              )}
              <br />
              <button
                className="text-sky-500 hover:underline float-right mt-3 mr-3 text-sm"
                onClick={() => setActiveId(activeId === "1" ? "2" : "1")}
              >
                {activeId === "1" ? "Sử dụng email" : "Sử dụng điện thoại"}
              </button>
            </div>
          </div>

          <div className="ml-10 mt-7 w-4/5 justify-center">
            <h1>Custom DatePicker</h1>
            <CustomDatePicker />
          </div>
        </div>
      </div>
    </>
  );
}
