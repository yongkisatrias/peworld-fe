import React from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

function Login() {
  return (
    <div className={openSans.className}>
      <div className="grid grid-cols-4">
        {/* Left Section */}
        <div className="col-span-2 relative">
          <div className="absolute bg-[#5E50A1] w-[100%] h-[100vh] opacity-[.60]" />
          <img
            src="/images/auth/auth.png"
            className="w-[100%] h-[100vh] object-cover"
            alt="background-image"
          />
          <img
            src="/images/logo/peworld-white.svg"
            className="absolute inset-0 w-[10rem] h-[5rem] p-4"
          />
          <div className="absolute flex justify-center items-center inset-0">
            <h1 className="text-white text-5xl font-bold leading-[4.375rem] px-28">
              Find talented & best developers in various areas of expertise.
            </h1>
          </div>
        </div>
        {/* Right Section */}
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}

export default Login;
