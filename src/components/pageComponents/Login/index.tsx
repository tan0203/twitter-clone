import LoginPage from "pages/Login";
import * as React from "react";

export interface LoginComponentProps {}

export default function LoginComponent(props: LoginComponentProps) {
  return (
    <div> 
      <LoginPage/>
    </div>
  );
}