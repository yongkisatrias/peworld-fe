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
      <div></div>
    </div>
  );
}

export default Register;
