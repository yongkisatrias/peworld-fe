import React from "react";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { useRouter } from "next/router";

const openSans = Open_Sans({
  subsets: ["latin"],
});

function Navbar() {
  const router = useRouter();
  return (
    <>
      <nav className="flex justify-between py-5 px-2">
        <Image
          src="/images/logo/peworld-main.svg"
          alt="logo"
          width={127}
          height={35}
          onClick={() => router.push(`/`)}
          className="cursor-pointer"
        />
        <div className="flex gap-4">
          <button
            className={`${openSans.className} border border-[#5e50a1] rounded px-5 text-[#5e50a1] text-sm font-bold`}
          >
            Masuk
          </button>
          <button
            className={`${openSans.className} bg-primary rounded px-5 text-white text-sm font-bold`}
          >
            Daftar
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
