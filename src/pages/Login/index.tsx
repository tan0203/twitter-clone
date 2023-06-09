import React, { useState, useEffect, useRef } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
import SecondLoginPage from "./secondLogin";

const firebaseConfig = {
  apiKey: "AIzaSyDDElwz20dBKl_6nP7KMUzJM_0ZWoFuajs",
  authDomain: "logintwitter-21ad8.firebaseapp.com",
  projectId: "logintwitter-21ad8",
  storageBucket: "logintwitter-21ad8.appspot.com",
  messagingSenderId: "347584903952",
  appId: "1:347584903952:web:c6a1294b023a1842228395",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

//login Google
const provider = new GoogleAuthProvider();

export const signInWithGoogle = (): void => {
  signInWithPopup(auth, provider)
    .then((result: any) => {
      const name: string = result.user.displayName;
      const email: string = result.user.email;
      const profilePic: string | null = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      if (profilePic !== null) {
        localStorage.setItem("profilePic", profilePic);
      }
    })
    .catch((error: any) => {
      console.log(error);
    });
};

//handle API
// const registerUser = async (userData) => {
//   try {
//   const response = await axios.post(
//   "http://your-api-url/login",
//   userData
//   );
//   return response.data;
//   } catch (error) {
//   console.error(error);
//   }
//   };

export interface LoginPageProps {}
export default function LoginPage(props: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = React.useState(false);
  const formRef = useRef(null);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const isEmailValid = email !== "";
  return (
    <>
      {activeTab ? (
        <div ref={formRef}>
          <SecondLoginPage />
        </div>
      ) : (
        <div className="h-full w-full absolute bg-slate-400">
          <div className="relative h-4/5 w-2/5 bg-black m-auto top-16 rounded-2xl  ">
            <a href="./">
              <i className="fa-solid fa-xmark text-white text-xl ml-2 mt-2 hover:bg-gray-800 h-9 w-9 rounded-full p-1 pl-3 "></i>
            </a>
            <div className="ml-40 ">
              <i className="fa-brands fa-twitter text-white text-3xl ml-32"></i>
              <p className="text-white text-3xl font-bold mt-6 ">
                Đăng nhập vào
              </p>
              <p className="text-white text-3xl font-bold ">Twitter</p>
              <button className="h-10 w-80 bg-white mt-6 flex rounded-full overflow-hidden">
                <img
                  className="h-6 w-6 ml-8 my-auto"
                  src="https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK"
                  alt=""
                />
                <button
                  className="h-full w-full font-bold mr-10"
                  onClick={signInWithGoogle}
                >
                  Đăng nhập bằng Google
                </button>
              </button>
              <button className="h-10 w-80 bg-white mt-4 rounded-full flex font-bold hover:bg-slate-200">
                <i className="fa-brands fa-apple text-2xl ml-10"></i>
                <p className="ml-4 mt-2">Đăng nhập bằng Apple</p>
              </button>
              <p className="text-white my-4 ml-32">hoặc</p>
              <input
                name="email"
                type="text"
                value={email}
                onChange={handleEmailChange}
                aria-describedby="helper-text-explanation"
                className="bg-black border border-gray-500 text-gray-900 text-sm rounded block w-80 h-14 pl-2 dark:text-white "
                placeholder="Số điện thoại, email hoặc tên người dùng"
              />
              <button
              onClick={() => setActiveTab(true)}
                className={`h-10 w-80 bg-white mt-4 rounded-full flex font-bold hover:bg-slate-200 ${
                  !isEmailValid ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!isEmailValid}
              >
                <p className="m-auto">Tiếp theo</p>
              </button>
              <button className="h-10 w-80 bg-black  mt-4 rounded-full flex font-bold border border-gray-500 hover:opacity-40	">
                <p className="m-auto text-white">Quên mật khẩu?</p>
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
      )}
    </>
  );
}
