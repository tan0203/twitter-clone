import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginHome } from "features/login/loginSlide";


interface SecondLoginPageProps {}
export default function SecondLoginPage(props: SecondLoginPageProps) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const isFormValid = email !== "" && password !== "";

  const handleLoginFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ID = {
      email:email,
      password:password,
    }
    console.log(ID);
    
    if (isFormValid) {
      dispatch(loginHome(ID));
    }
  };

  return (
    <div className="h-full w-full absolute bg-slate-400">
      <div className="relative h-4/5 w-2/5 bg-black m-auto top-16 rounded-2xl  ">
        <a href="">
          <i className="fa-solid fa-xmark text-white text-xl ml-2 mt-2 hover:bg-gray-800 h-9 w-9 rounded-full p-1 pl-3 "></i>
          <i className="fa-brands fa-twitter ml-60 text-white text-3xl mt-1"></i>
        </a>
        <div className="ml-24 ">
          <p className="text-white text-3xl font-bold mt-6 ">
            Nhập mật khẩu của bạn
          </p>
          <form onSubmit={handleLoginFormSubmit}>
          <input
              name="email"
              type="text"
              value={email}
              onChange={handleEmailChange}
              aria-describedby="helper-text-explanation"
              className="bg-black border mt-10 border-gray-500 text-gray-900 text-sm rounded block w-80 h-14 pl-2 dark:text-white"
              placeholder="Số điện thoại, email hoặc tên người dùng"
            />
            <input
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              aria-describedby="helper-text-explanation"
              className="bg-black border mt-10 border-gray-500 text-gray-900 text-sm rounded block w-80 h-14 pl-2 dark:text-white"
              placeholder="Mật khẩu"
            />
            <button
              className={` rounded-full bg-white text-center font-bold text-lg w-4/5 h-12 ${
                !isFormValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!isFormValid}
            >
              <p className="m-auto">Đăng nhập</p>
            </button>
          </form>
          <button className="">
            <a className="text-white">Quên mật khẩu?</a>
          </button>
          <div className="flex text-sm mt-10">
            <p className="text-gray-400 ">Không có tài khoản?</p>
            <a
              className="text-blue-600 ml-1 no-underline hover:underline"
              href="./register"
            >
              Đăng ký
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}