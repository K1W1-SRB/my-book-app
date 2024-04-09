"use client";
import Navbar from "@/components/ui/Navabar";
import { UserForm } from "@/components/ui/user-form";
import React from "react";
import { useSelector } from "react-redux";
import { getUserState, isLoggedIn } from "@/store/slices/userSlice";

function Login() {
  const user = useSelector(getUserState);
  const userLoggedIn = useSelector(isLoggedIn);
  console.log(user);
  console.log(userLoggedIn);

  return (
    <div>
        <Navbar />
        <div className="flex justify-center items-center">
          {userLoggedIn ? (
            // JSX to display when user is logged in
            <div>Welcome! You are logged in.</div>
          ) : (
            // JSX to display when user is not logged in
            <UserForm />
          )}
        </div>
    </div>
  );
}

export default Login;
