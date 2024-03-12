"use client";
import Navbar from "@/components/ui/Navabar";
import { UserForm } from "@/components/ui/user-form";
import React, { useEffect, useState } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center">
        <UserForm />
      </div>
    </div>
  );
}

export default Login;
