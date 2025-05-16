import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-white to-green-100 w-screen">
      <NavBar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
