/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import { Open_Sans } from "next/font/google";
import Head from "next/head";
import axios from "axios";
import { getCookie } from "cookies-next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const openSans = Open_Sans({
  subsets: ["latin"],
});

function Detail(props) {
  const { data } = props;
  const user = getCookie("user") ? JSON.parse(getCookie("user")) : null;

  return (
    <>
      <Head>
        <title>Peworld | Profile</title>
      </Head>
      {/* Header start */}
      <header className="container mx-auto">
        {/* Navbar */}
        <Navbar />
      </header>
      {/* Header end */}

      {/* Main Section */}
      <main className="bg-[#F6F7F8] py-8">
        <div className="container mx-auto px-4 lg:px-9">
          <div className="bg-white drop-shadow-lg rounded-t-lg">
            <div className="bg-primary h-[200px] rounded-t-lg" />
            <div className="flex justify-center mt-[-80px]">
              <img
                src={data?.photo}
                alt="avatar"
                width={150}
                height={150}
                className="rounded-full w-[150px] h-[150px]"
              />
            </div>
            <div className="px-5">
              <h1
                className={`flex justify-center ${openSans.className} text-primary text-2xl font-semibold leading-10 my-2`}
              >
                {data?.fullname}
              </h1>
              <p
                className={`flex justify-center ${openSans.className} text-primary text-sm font-normal leading-6`}
              >
                {data?.job}
              </p>
              <div className="flex gap-1 justify-center">
                <img
                  src="/images/icon/map-pin.svg"
                  alt="location"
                  width={16}
                  height={16}
                />
                <p
                  className={`${openSans.className} text-[#9EA0A5] text-sm font-normal leading-5`}
                >
                  {data?.location}
                </p>
              </div>
              <div className="flex justify-center">
                <p
                  className={`${openSans.className} text-[#9EA0A5] text-sm font-normal leading-6 my-2 text-justify md:w-[800px]`}
                >
                  {data?.desc}
                </p>
              </div>
              {user ? (
                <div className="flex justify-center my-5">
                  <Link href={`/talent-list/contact/${data?.id}`}>
                    <button
                      className={`bg-primary hover:bg-[#5242a2] rounded px-20 py-2 ${openSans.className} text-white text-base font-bold leading-5`}
                    >
                      Hire
                    </button>
                  </Link>
                </div>
              ) : null}
              <h2
                className={`flex justify-center ${openSans.className} text-primary text-xl font-semibold leading-6 my-2`}
              >
                Skill
              </h2>
              <div className="flex justify-center">
                <div className="w-[300px] flex flex-wrap justify-center gap-2 mt-2 mb-5">
                  {data?.skills?.map((item, key) => (
                    <div
                      className="bg-[#fed417] rounded border-[#FBB017] border-2 px-3 py-1 mt-1"
                      key={key}
                    >
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pb-5">
                <div className="flex justify-center items-center gap-3 mb-3">
                  <img src="/images/logo/mail.svg" alt="email" />
                  <p
                    className={`${openSans.className} text-[#9EA0A5] text-sm font-normal leading-5`}
                  >
                    {data?.socmed?.email}
                  </p>
                </div>
                <div className="flex justify-center items-center gap-3 my-3">
                  <img src="/images/logo/instagram.svg" alt="instagram" />
                  <p
                    className={`${openSans.className} text-[#9EA0A5] text-sm font-normal leading-5`}
                  >
                    {data?.socmed?.instagram}
                  </p>
                </div>
                <div className="flex justify-center items-center gap-3 my-3">
                  <img src="/images/logo/github.svg" alt="github" />
                  <p
                    className={`${openSans.className} text-[#9EA0A5] text-sm font-normal leading-5`}
                  >
                    {data?.socmed?.github}
                  </p>
                </div>
                <div className="flex justify-center items-center gap-3 my-3">
                  <img src="/images/logo/gitlab.svg" alt="gitlab" />
                  <p
                    className={`${openSans.className} text-[#9EA0A5] text-sm font-normal leading-5`}
                  >
                    {data?.socmed?.gitlab}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Main Section end */}

      {/* Footer */}
      <Footer />
      {/* Footer end */}
    </>
  );
}

// Change to SSR page
export async function getServerSideProps(props) {
  const { id } = props.params;

  const request = await axios.get(
    `https://peworld-fe-yongki.vercel.app/api/list-talent?id=${id}`
  );

  return {
    props: request.data,
  };
}

export default Detail;
