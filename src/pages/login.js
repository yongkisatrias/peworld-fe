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
            <h1 className="text-white text-5xl font-bold leading-[4.375rem] px-32">
              Find talented & best developers in various areas of expertise.
            </h1>
          </div>
        </div>
        {/* Right Section */}
        <div className="col-span-2 bg-[#F6F7F8] grid content-center px-32">
          <h2 className="text-primary text-4xl font-semibold py-2">
            Hello, Pewpeople!
          </h2>
          <p className="text_secondary text-lg font-normal py-1">
            Please enter your email and password to log in to the peworld
            website.
          </p>
          <label className="text-[#9EA0A5] text-sm font-normal mb-2 mt-4">
            Email
          </label>
          <input
            placeholder="Enter email address"
            className="h-[3.125rem] rounded border border-[#E2E5ED] pl-4 text-[#858D96] text-base font-normal"
          />
          <label className="text-[#9EA0A5] text-sm font-normal mb-2 mt-4">
            Password
          </label>
          <input
            placeholder="Enter password"
            className="h-[3.125rem] rounded border border-[#E2E5ED] pl-4 text-[#858D96] text-base font-normal"
          />
          <span className="text-right text-primary text-base font-normal my-4">
            <a href="#">Forgot password?</a>
          </span>

          <button className="bg-[#FBB017] rounded py-3 text-white text-base font-bold">
            Login
          </button>
          <span className="text-center text-primary text-base font-normal mt-4">
            You don't have an account yet?{" "}
            <a href="#" className="text-[#FBB017] text-base font-normal">
              Register here
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
