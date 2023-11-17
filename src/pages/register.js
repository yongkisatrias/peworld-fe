import React from "react";
import Head from "next/head";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

function Register() {
  return (
    <div className={openSans.className}>
      <Head>
        <title>Peworld | Register</title>
      </Head>
      <div className="grid grid-cols-4">
        {/* Left Section */}
        <div className="col-span-4 md:col-span-2 relative hidden md:block">
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
        <div className="col-span-4 md:col-span-2 bg-[#F6F7F8] grid px-5 py-10 md:px-32 md:py-32 overflow-x-scroll h-[100vh]">
          <h2 className="text-primary text-4xl font-semibold py-2">
            Hello, Pewpeople!
          </h2>
          <p className="text_secondary text-lg font-normal py-1">
            Please complete your data to register on the peworld website.
          </p>
          <label className="text-[#9EA0A5] text-sm font-normal mb-2 mt-4">
            Name
          </label>
          <input
            placeholder="Enter a full name"
            className="h-[3.125rem] rounded border border-[#E2E5ED] pl-4 text-[#858D96] text-base font-normal"
          />
          <label className="text-[#9EA0A5] text-sm font-normal mb-2 mt-4">
            Email
          </label>
          <input
            placeholder="Enter email address"
            className="h-[3.125rem] rounded border border-[#E2E5ED] pl-4 text-[#858D96] text-base font-normal"
          />
          <label className="text-[#9EA0A5] text-sm font-normal mb-2 mt-4">
            Company
          </label>
          <input
            placeholder="Enter the company name"
            className="h-[3.125rem] rounded border border-[#E2E5ED] pl-4 text-[#858D96] text-base font-normal"
          />
          <label className="text-[#9EA0A5] text-sm font-normal mb-2 mt-4">
            Position
          </label>
          <input
            placeholder="Position in your company"
            className="h-[3.125rem] rounded border border-[#E2E5ED] pl-4 text-[#858D96] text-base font-normal"
          />
          <label className="text-[#9EA0A5] text-sm font-normal mb-2 mt-4">
            Phone number
          </label>
          <input
            placeholder="Enter your phone number"
            className="h-[3.125rem] rounded border border-[#E2E5ED] pl-4 text-[#858D96] text-base font-normal"
          />
          <label className="text-[#9EA0A5] text-sm font-normal mb-2 mt-4">
            Password
          </label>
          <input
            placeholder="Enter password"
            className="h-[3.125rem] rounded border border-[#E2E5ED] pl-4 text-[#858D96] text-base font-normal"
          />
          <label className="text-[#9EA0A5] text-sm font-normal mb-2 mt-4">
            Confirm password
          </label>
          <input
            placeholder="Enter password confirmation"
            className="h-[3.125rem] rounded border border-[#E2E5ED] pl-4 text-[#858D96] text-base font-normal"
          />
          <button className="bg-[#FBB017] rounded py-3 my-10 text-white text-base font-bold">
            Login
          </button>
          <span className="text-center text-primary text-base font-normal mt-4">
            Do you already have an account?{" "}
            <a href="#" className="text-[#FBB017] text-base font-normal">
              Login here
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
