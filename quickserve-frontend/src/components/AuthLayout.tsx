import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";

export default function AuthLayout() {
  return (
    <div className="bg-gradient-to-br from-green-100 via-white to-green-100 min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
