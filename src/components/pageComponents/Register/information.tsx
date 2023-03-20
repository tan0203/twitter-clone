import React, { useEffect, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import CustomDatePicker from "./CustomDatePicker";
import TwoInforPage from "./twoInfor";
import { useSelector, useDispatch } from "react-redux";
import { registerHome } from "features/register/registerSlide";

export interface InforPageProps {}
export default function InforPage(props: InforPageProps) {
  const dispatch = useDispatch();
  const [activeId, setActiveId] = useState("1");
  const [activeTab, setActiveTab] = React.useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef(null);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };


  const handleRegisterFormSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const IDR = {
      email: email,
      password: password,
      name: name,
      phoneNumber: phoneNumber,
    };
    console.log(IDR);
    if (isNextButtonDisabled) {
      dispatch(registerHome(IDR));
    }
  };

  const isNextButtonDisabled =
    name.trim() === "" || !(phoneNumber.trim() || email.trim());

  return (
    <>
      {activeTab ? (
        <div ref={formRef}>
          <TwoInforPage />
        </div>
      ) : (
        <div className="h-screen w-screen absolute bg-transparent z-50">
          <div className="relative h-4/5 w-2/5 bg-black m-auto top-16 rounded-2xl mx-auto">
            <a href="" className="flex text-white">
              <i className="fa-solid fa-xmark  text-xl ml-2 mt-2 hover:bg-gray-800 h-9 w-9 rounded-full p-1 pl-3 "></i>
            </a>
            <form onSubmit={handleRegisterFormSubmit}>
              <div className="ml-14 w-4/5 justify-center">
                <span className="text-3xl  font-bold text-white">
                  Tạo tài khoản mới của bạn
                </span>

                <input
                  name="name"
                  onChange={handleNameChange}
                  className="w-full h-14 mt-5 rounded border focus:border-2 border-slate-700 pl-3 bg-black focus:outline-none focus:border-sky-500 text-white"
                  placeholder="Tên"
                ></input>
                <div>
                  {activeId === "1" ? (
                    <input
                      name="phone_number"
                      onChange={handlePhoneNumberChange}
                      className="w-full h-14 mt-5 rounded border focus:border-2 border-slate-700 pl-3 bg-black focus:outline-none focus:border-sky-500 text-white"
                      placeholder="Điện thoại"
                    />
                  ) : (
                    <input
                      name="email"
                      onChange={handleEmailChange}
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
                  <input
                    name="password"
                    type="password"
                    onChange={handlePasswordChange}
                    className="w-full h-14 mt-5 rounded border focus:border-2 border-slate-700 pl-3 bg-black focus:outline-none focus:border-sky-500 text-white"
                    placeholder="Mật khẩu"
                  ></input>
                </div>
              </div>
              <br />
              <br />
              <div className="h-20 w-4/5 ml-14">
                <h2 className="text-white">Ngày sinh</h2>
                <p className="text-slate-700 text-sm ">
                  Điều này sẽ không được hiển thị công khai. Xác nhận tuổi của
                  bạn, ngay cả khi tài khoản này dành cho doanh nghiệp, thú cưng
                  hoặc thứ gì khác.
                </p>
              </div>

              <div className="ml-14 w-4/5 justify-center">
                <CustomDatePicker />
              </div>
              <button
                className={`mx-auto ml-14 mt-8 rounded-full text-center font-bold text-lg w-4/5 h-12 ${
                  !isNextButtonDisabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-white"
                }`}
                disabled={!isNextButtonDisabled}
              >
                Tiếp theo
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
