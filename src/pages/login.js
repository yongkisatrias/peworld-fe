import React from "react";
import Head from "next/head";
import { Open_Sans } from "next/font/google";
import Link from "next/link";

const openSans = Open_Sans({
  subsets: ["latin"],
});

function Login() {
  return (
    <div className={openSans.className}>
      <Head>
        <title>Peworld | Login</title>
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
          <Link href="/">
            <img
              src="/images/logo/peworld-white.svg"
              className="absolute inset-0 w-[10rem] h-[5rem] p-4"
              alt="peworld-logo"
            />
          </Link>
          <div className="absolute flex justify-center items-center inset-0">
            <h1 className="text-white text-5xl font-bold leading-[4.375rem] px-32">
              Find talented & best developers in various areas of expertise.
            </h1>
          </div>
        </div>
        {/* Right Section */}
        <div className="col-span-4 md:col-span-2 bg-[#F6F7F8] grid content-center px-5 h-[100vh] md:px-32">
          <h2 className="text-primary text-4xl font-semibold py-2">
            Hello, Pewpeople!
          </h2>
          <p className="text_secondary text-lg font-normal py-1">
            Please enter your email and password to log in to the peworld
            website.
          </p>
          <label
            className="text-[#9EA0A5] text-sm font-normal mb-2 mt-4"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            className="h-[3.125rem] rounded border border-[#E2E5ED] pl-4 text-[#858D96] text-base font-normal"
            placeholder="Enter email address"
            type="email"
          />
          <label
            className="text-[#9EA0A5] text-sm font-normal mb-2 mt-4"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            className="h-[3.125rem] rounded border border-[#E2E5ED] pl-4 text-[#858D96] text-base font-normal"
            placeholder="Enter password"
            type="password"
          />
          <Link href="#">
            <p className="text-right text-primary text-base font-normal my-4">
              Forgot password?
            </p>
          </Link>

          <button className="bg-[#FBB017] rounded py-3 text-white text-base font-bold">
            Login
          </button>
          <p className="text-center text-primary text-base font-normal mt-4">
            You don't have an account yet?{" "}
            <Link href="/register">
              <span className="text-[#FBB017] text-base font-normal">
                Register here
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
