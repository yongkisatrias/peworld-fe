/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import { Open_Sans } from "next/font/google";
import { useRouter } from "next/router";
import { getCookie, deleteCookie } from "cookies-next";

const openSans = Open_Sans({
  subsets: ["latin"],
});

function Navbar() {
  const router = useRouter();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    if (getCookie("user")) {
      setUser(JSON.parse(getCookie("user")));
    }
  }, []);

  return (
    <>
      <nav className="flex justify-between py-5 px-4 lg:px-9">
        <img
          src="/images/logo/peworld-main.svg"
          alt="logo"
          width={127}
          height={35}
          onClick={() => router.push(`/`)}
          className="cursor-pointer"
        />

        {user ? (
          <div className="flex gap-3">
            <img
              src={user?.photo ?? <img src="/images/avatar/avatar.png" />}
              width={40}
              className="rounded-full"
              alt="photo-profile"
            />{" "}
            <button
              className={`${openSans.className} bg-[#c94747] hover:bg-[#ce5959] rounded px-4 text-white text-base`}
              onClick={() => {
                deleteCookie("user");
                deleteCookie("token");
                setUser(null);
                router.reload();
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <button
              className={`${openSans.className} border border-[#5e50a1] hover:bg-[#f3f6f4] rounded px-5 text-[#5e50a1] text-sm font-bold`}
              onClick={() => router.push(`/login`)}
            >
              Login
            </button>
            <button
              className={`${openSans.className} bg-primary hover:bg-[#5242a2] rounded px-5 text-white text-sm font-bold`}
              onClick={() => router.push(`/register`)}
            >
              Register
            </button>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
