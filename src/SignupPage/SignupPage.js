import "./SignupPage.css";
import React from "react";
import SignupForm from "./SignupForm";
import Header from "../GlobalComponents/Header/Header";

export default function SignupPage(props) {
  return (
    <div>
      <Header />
      <SignupForm />
    </div>
  );
}
