import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

interface LoginResponse {
  username: string;
  password: string;
}

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

export interface LoginPageProps {}
export default function LoginPage(props: LoginPageProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const response = await fetch(`/api/login?username=${username}`);
    const json = (await response.json()) as LoginResponse;

    if (json.password === password) {
      console.log("Login successful!");
    } else {
      console.log("Invalid username or password.");
    }
  };
  return (
    <div
      // onSubmit={handleLogin}
      className="h-full w-full absolute bg-slate-400"
    >
      <div className="relative h-4/5 w-2/5 bg-black m-auto top-16 rounded-2xl  ">
        <a href="./">
          <i className="fa-solid fa-xmark text-white text-xl ml-2 mt-2 hover:bg-gray-800 h-9 w-9 rounded-full p-1 pl-3 "></i>
        </a>
        <div className="ml-40 ">
          <i className="fa-brands fa-twitter text-white text-3xl ml-32"></i>
          <p className="text-white text-3xl font-bold mt-6 ">Đăng nhập vào</p>
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
            {/* <h1>{localStorage.getItem("name")}</h1>
              <h1>{localStorage.getItem("email")}</h1>
              <img src={localStorage.getItem("profilePic")} /> */}
          </button>
          <button className="h-10 w-80 bg-white mt-4 rounded-full flex font-bold hover:bg-slate-200">
            <i className="fa-brands fa-apple text-2xl ml-10"></i>
            <p className="ml-4 mt-2">Đăng nhập bằng Apple</p>
          </button>
          <p className="text-white my-4 ml-32">hoặc</p>
          <input
            name="email"
            value={username}
            onChange={handleUsernameChange}
            aria-describedby="helper-text-explanation"
            className="bg-black border border-gray-500 text-gray-900 text-sm rounded block w-80 h-14 pl-2 dark:text-white "
            placeholder="Số điện thoại, email hoặc tên người dùng"
          />
          <button
            disabled={!username}
            onClick={handleLogin}
            className="h-10 w-80 bg-white mt-4 rounded-full flex font-bold hover:bg-slate-200"
          >
            <p className="m-auto">Tiếp theo</p>
          </button>
          {/* <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          /> */}
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
  );
}
