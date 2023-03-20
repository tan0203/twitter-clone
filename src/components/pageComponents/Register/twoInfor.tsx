import React, { useEffect, useState, useRef } from "react";
import InforPage from "./information";
import ThreeInforPage from "./threeInfor";
import { RegisterPage } from "pages/Register";

export interface TwoInforPageProps {}
export default function TwoInforPage(props: TwoInforPageProps): JSX.Element {
  const [activeTab, setActiveTab] = React.useState(false);
  const formRef = useRef(null);
  

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  
  return (
    <>
      {activeTab ? (
        <div ref={formRef}>
          <ThreeInforPage />
        </div>
      ) : (
        <div className="h-screen w-screen absolute bg-transparent	 z-50">
          <div className="relative h-4/5 w-2/5 bg-black m-auto top-16 rounded-2xl mx-auto">
            <button className="flex text-white">
              <a href="">
              <i className="fa-solid fa-arrow-left-long text-lg ml-2 mt-2 hover:bg-gray-800 h-9 w-9 rounded-full p-1 pl-2 "></i>

              </a>
            </button>
            <div className="ml-14 mt-7 w-4/5 justify-center">
              <span className="text-3xl  font-bold text-gray-200">
                Tùy chỉnh trải nghiệm của bạn
              </span>
              <br />
              <br />
              <br />
              <span className="text-lg  font-bold text-gray-200">
                Theo dõi nơi bạn thấy nội dung Twitter trên web
              </span>
              <br />
              <br />
              <div className="text-sm w-10/12 text-gray-200 flex">
                Twitter sử dụng dữ liệu này để cá nhân hóa trải nghiệm của bạn.
                Lịch sử duyệt web này sẽ không được lưu với tên, email hay số
                điện thoại của bạn.
                <div className="mt-1 text-sky-600">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-sky-600"
                    id="my-checkbox"
                    onChange={handleCheckboxChange}
                    checked={isChecked}
                  />
                  <label
                    htmlFor="my-checkbox"
                    className="ml-2 block text-sky-600"
                  ></label>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="flex flex-wrap w-11/12 mt-2">
                <p className="text-gray-500">
                  Khi đăng ký nghĩa là bạn đồng ý với{" "}
                </p>
                <a
                  className="text-sky-600 ml-1 no-underline hover:underline"
                  href="#"
                >
                  Điều khoản
                </a>
                <p className="text-gray-500 ml-1">,</p>
                <a
                  className="text-sky-600 no-underline hover:underline"
                  href="#"
                >
                  Chính sách riêng tư
                </a>
                <p className="text-gray-500 ml-1">và</p>
                <a
                  className="text-sky-600 ml-1 no-underline hover:underline"
                  href="#"
                >
                  Sử dụng Cookie
                </a>
                <p className="text-gray-500">
                  của chúng tôi. Twitter có thể sử dụng thông tin liên hệ, bao
                  gồm địa chỉ email và số điện thoại của bạn cho các mục đích
                  được nêu trong Chính sách riêng tư.
                </p>
                <a
                  className="text-sky-600 no-underline hover:underline"
                  href="#"
                >
                  Tìm hiểu thêm
                </a>
              </div>
              <br />
            </div>
            <button
              onClick={() => setActiveTab(true)}
              className={`ml-14 rounded-full text-center font-bold text-lg w-4/5 h-12 ${
                isChecked ? "bg-white" : "bg-gray-300 cursor-not-allowed"
              }`}
              disabled={!isChecked}
            >
              Tiếp theo
            </button>
          </div>
        </div>
      )}
    </>
  );
}
