/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import Head from "next/head";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import axios from "axios";

const openSans = Open_Sans({
  subsets: ["latin"],
});

function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [job, setJob] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [registerSuccess, setRegisterSuccess] = React.useState(null);

  const registerHandler = () => {
    setLoading(true);
    axios({
      method: "post",
      url: `https://hire-job.onrender.com/v1/auth/register`,
      data: {
        email: email,
        password: password,
        fullname: fullname,
        company: company,
        job_title: job,
        phone: phone,
      },
    })
      .then((result) => {
        console.log(result);

        setRegisterSuccess(true);
      })
      .catch((err) => {
        console.log(err);

        const errFullname = err?.response?.data?.messages?.fullname?.message;
        const errEmail = err?.response?.data?.messages?.email?.message;
        const errPassword = err?.response?.data?.messages?.password?.message;
        const errPhone = err?.response?.data?.messages?.phone?.message;

        setErrorMessage(errFullname ?? errEmail ?? errPassword ?? errPhone);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
          {errorMessage ? (
            <div className="bg-[#f8d7da] text-[#721c24] px-4 py-3 my-4 rounded">
              <p className="p-2">{errorMessage}</p>
            </div>
          ) : (
            false
          )}

          {registerSuccess ? (
            <div className="bg-[#d1e7dd] text-[#0f5132] px-4 py-3 my-4 rounded">
              <p className="p-2">Register Success</p>
            </div>
          ) : null}
          <label
            className="text-[#9EA0A5] text-sm font-normal mb-2 mt-4"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            className="h-[3.125rem] rounded border border-[#E2E5ED] pl-4 text-[#858D96] text-base font-normal"
            placeholder="Enter a full name"
            type="text"
            onChange={(item) => setFullname(item.target.value)}
          />
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
            onChange={(item) => setEmail(item.target.value)}
          />
          <label
            className="text-[#9EA0A5] text-sm font-normal mb-2 mt-4"
            htmlFor="company"
          >
            Company
          </label>
          <input
            id="company"
            className="h-[3.125rem] rounded border border-[#E2E5ED] pl-4 text-[#858D96] text-base font-normal"
            placeholder="Enter the company name"
            type="text"
            onChange={(item) => setCompany(item.target.value)}
          />
          <label
            className="text-[#9EA0A5] text-sm font-normal mb-2 mt-4"
            htmlFor="position"
          >
            Position
          </label>
          <input
            id="position"
            className="h-[3.125rem] rounded border border-[#E2E5ED] pl-4 text-[#858D96] text-base font-normal"
            placeholder="Position in your company"
            type="text"
            onChange={(item) => setJob(item.target.value)}
          />
          <label
            className="text-[#9EA0A5] text-sm font-normal mb-2 mt-4"
            htmlFor="phone-number"
          >
            Phone number
          </label>
          <input
            id="phone-number"
            className="h-[3.125rem] rounded border border-[#E2E5ED] pl-4 text-[#858D96] text-base font-normal"
            placeholder="Enter your phone number"
            type="text"
            onChange={(item) => setPhone(item.target.value)}
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
            onChange={(item) => setPassword(item.target.value)}
          />
          <label
            className="text-[#9EA0A5] text-sm font-normal mb-2 mt-4"
            htmlFor="password2"
          >
            Confirm password
          </label>
          <input
            id="password2"
            className="h-[3.125rem] rounded border border-[#E2E5ED] pl-4 text-[#858D96] text-base font-normal"
            placeholder="Enter password confirmation"
            type="password"
          />
          <button
            className="bg-[#FBB017] hover:bg-[#fbb72e] rounded py-3 my-10 text-white text-base font-bold"
            onClick={() => registerHandler()}
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <p className="text-center text-primary text-base font-normal mt-4">
            Do you already have an account?{" "}
            <Link href="/login">
              <span className="text-[#FBB017] text-base font-normal">
                Login here
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
