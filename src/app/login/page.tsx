"use client";
import Navbar from "@/components/ui/Navabar";
import { UserForm } from "@/components/ui/user-form";
import { store } from '../../store/store';
import React from "react";
import { Provider } from "react-redux";

function Login() {

  return (
    <Provider store={store}>
      <Navbar />
      <div className="flex justify-center items-center">
        <UserForm />
      </div>
    </Provider>
  );
}

export default Login;
