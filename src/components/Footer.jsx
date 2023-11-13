import React from "react";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

function Footer() {
  return (
    <>
      <footer className="bg-[#5E50A1]">
        <div className="container mx-auto px-2">
          <div className="pt-16">
            <Image
              src="/images/logo/peworld-white.svg"
              alt="logo peworld"
              width={178}
              height={50}
            />
          </div>
          <p
            className={`${openSans.className} mt-7 text-lg font-normal leading-7 text-[#fff]`}
          >
            Temukan Bakat, Wujudkan Impian: Pintu Kesuksesanmu Berada di Sini!
          </p>
          <hr className="mt-16" />
          <div className="flex justify-between mt-7 pb-7">
            <p
              className={`${openSans.className} text-lg font-normal leading-7 text-[#fff]`}
            >
              2023 Peworld. All right reserved
            </p>
            <div
              className={`${openSans.className} text-lg font-normal leading-7 text-[#fff] flex gap-5`}
            >
              <a>Telepon</a>
              <a>Email</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
