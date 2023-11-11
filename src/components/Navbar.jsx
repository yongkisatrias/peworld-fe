import React from "react";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

function Navbar() {
  return (
    <>
      <nav className="flex justify-between py-5 mobile-container">
        <Image
          src="/images/logo/peworld-main.svg"
          alt="logo"
          width={127}
          height={35}
        />
        <div className="flex gap-4">
          <button
            className={`${openSans.className} border border-[#5e50a1] rounded px-5 text-[#5e50a1] text-sm font-bold`}
          >
            Masuk
          </button>
          <button
            className={`${openSans.className} bg-[#5e50a1] rounded px-5 text-[#fff] text-sm font-bold`}
          >
            Daftar
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
