import Home from "pages/Home";
import React, { useEffect, useRef, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import InforPage from "components/pageComponents/Register/information";
import LoginPage from "pages/Login";

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
export interface RegisterPageProps {}
export { RegisterPage };

const RegisterPage: React.FC<RegisterPageProps> = () => {
  const [activeTab, setActiveTab] = React.useState(false);
  const formRef = useRef(null);

  
  return (
    <>
      {" "}
      {activeTab ? (
        <div ref={formRef}>
          <InforPage />
        </div>
      ) : (
        <div className="h-screen w-screen absolute bg-transparent	 z-50">
          <div className="relative h-4/5 w-2/5 bg-black m-auto top-16 rounded-2xl">
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                window.history.back();
              }}
            >
              <i className="fa-solid fa-xmark text-white text-xl ml-2 mt-2 hover:bg-gray-800 h-9 w-9 rounded-full p-1 pl-3 "></i>
            </a>
            <div className="ml-40">
              <i className="fa-brands fa-twitter text-white text-3xl ml-32"></i>
              <p className="text-white text-3xl font-bold mt-8 ">
                Tham gia Twitter
              </p>
              <p className="text-white text-3xl font-bold ">ngay hôm nay</p>
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
                  Đăng ký bằng Google
                </button>
                {/* <h1>{localStorage.getItem("name")}</h1>
              <h1>{localStorage.getItem("email")}</h1>
              <img src={localStorage.getItem("profilePic")} /> */}
              </button>
              <button className="h-10 w-80 bg-white mt-4 rounded-full flex font-bold hover:bg-slate-200">
                <i className="fa-brands fa-apple text-2xl ml-14"></i>
                <p className="ml-4 mt-2">Đăng ký bằng Apple</p>
              </button>
              <p className="text-white my-4 ml-36">hoặc</p>

              <button
                onClick={() => setActiveTab(true)}
                className="h-10 w-80 bg-white mt-4 rounded-full flex font-bold hover:bg-slate-200"
              >
                <p className="m-auto ">Tạo tài khoản</p>
              </button>
              <div className="flex flex-wrap h-10 w-80 text-xs mt-2">
                <p className="text-gray-500">Khi đăng ký, bạn đã đồng ý với </p>
                <a
                  className="text-blue-600 ml-1 no-underline hover:underline"
                  href="#"
                >
                  Điều khoản Dịch vụ{" "}
                </a>
                <p className="text-gray-500 ml-1">và</p>
                <a
                  className="text-blue-600 no-underline hover:underline"
                  href="#"
                >
                  Chính sách Quyền riêng tư
                </a>
                <p className="text-gray-500">, gồm cả</p>
                <a
                  className="text-blue-600  ml-1 no-underline hover:underline"
                  href="#"
                >
                  Sử dụng Cookie.
                </a>
              </div>

              <div className="flex text-sm mt-10">
                <p className="text-gray-400 ">Bạn đã có tài khoản?</p>
                <a
                  className="text-blue-600 ml-1 no-underline hover:underline"
                  href="./login"
                >
                  Đăng nhập
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
