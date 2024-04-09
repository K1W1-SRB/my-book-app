"use client";
import * as React from "react";
import Navbar from "@/components/ui/Navabar";
import { Provider, useSelector } from "react-redux";
import { store } from './../store/store';
import { isLoggedIn } from "./../store/slices/userSlice";

export default function Home() {
   
  return (
    <Provider store={store}>
      <main>
        <Navbar/>
        <div className="flex-col justify-center items-center m-auto">
            <div className="text-3xl font-bold">
              <h1>Booked Up</h1>
              <h1>Your <span className="text-blue-600">Ultimate</span> Reading Companion</h1>
            </div>
            <div>
              <img src="" />
            </div>
        </div>
      </main>
    </Provider>
  );
}
