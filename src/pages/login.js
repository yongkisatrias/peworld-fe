/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import Head from "next/head";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import { setCookie, getCookie } from "cookies-next";
import axios from "axios";

const openSans = Open_Sans({
  subsets: ["latin"],
});

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const handleLogin = () => {
    setIsLoading(true);
    axios
      .post("https://hire-job.onrender.com/v1/auth/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        setCookie("token", result?.data?.data?.token, { maxAge: 60 * 60 * 24 });
        setCookie(
          "user",
          JSON.stringify(result?.data?.data?.user, { maxAge: 60 * 60 * 24 })
        );

        window.location.href = "/";
      })
      .catch((err) => {
        const { email, password } = err?.response?.data?.messages;

        setErrorMessage(
          email?.message ??
            password?.message ??
            err?.response?.data?.messages ??
            "Something wrong in our app, try again later."
        );
      })
      .finally(() => setIsLoading(false));
  };

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
          {errorMessage ? (
            <div className="bg-[#f8d7da] text-[#721c24] px-4 py-3 my-4 rounded">
              {errorMessage}
            </div>
          ) : null}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link href="#">
            <p className="text-right text-primary text-base font-normal my-4">
              Forgot password?
            </p>
          </Link>

          <button
            className="bg-[#FBB017] rounded py-3 text-white text-base font-bold"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
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

// Change to SSR page
export async function getServerSideProps({ req, res }) {
  const user = getCookie("user", { req, res });
  const token = getCookie("token", { req, res });

  if (user && token) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
}

export default Login;
