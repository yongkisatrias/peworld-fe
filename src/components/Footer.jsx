/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

function Footer() {
  return (
    <>
      <footer className="bg-primary">
        <div className="container mx-auto px-4 lg:px-9">
          <div className="pt-10">
            <img
              src="/images/logo/peworld-white.svg"
              alt="logo peworld"
              width={178}
              height={50}
            />
          </div>
          <p
            className={`${openSans.className} mt-7 text-lg font-normal leading-7 text-white`}
          >
            Discover Talent, Make Your Dreams Come True. Your Key to Success is
            Here!
          </p>
          <hr className="mt-7" />
          <div className="flex justify-between mt-7 pb-7">
            <p
              className={`${openSans.className} text-sm md:text-lg font-normal leading-7 text-white`}
            >
              © 2023 Peworld. All right reserved
            </p>
            <div
              className={`${openSans.className} text-sm md:text-lg font-normal leading-7 text-white flex gap-5`}
            >
              <a>Telephone</a>
              <a>Email</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
