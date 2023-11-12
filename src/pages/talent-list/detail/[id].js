import React from "react";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
});

function Detail(props) {
  const { data } = props;
  return (
    <>
      <Head>
        <title>Peworld | Top Talent</title>
      </Head>
      {/* Header start */}
      <header className="container mx-auto">
        {/* Navbar */}
        <Navbar />
      </header>
      {/* Header end */}

      <main className="bg-[#F6F7F8] py-8">
        <div className="container mx-auto px-2">
          <div className="bg-[#fff] drop-shadow-lg rounded-t-lg">
            <div className="bg-[#5E50A1] h-[200px] rounded-t-lg" />
            <div className="flex justify-center mt-[-80px]">
              <img
                src={data?.photo}
                alt="avatar"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <div className="px-2">
              <h1
                className={`flex justify-center ${openSans.className} text-[#1F2A36] text-2xl font-semibold leading-10 my-2`}
              >
                {data?.fullname}
              </h1>
              <p
                className={`flex justify-center ${openSans.className} text-[#1F2A36] text-sm font-normal leading-6`}
              >
                {data?.job}
              </p>
              <div className="flex gap-1 justify-center">
                <img src="/images/icon/map-pin.svg" />
                <p
                  className={`${openSans.className} text-[#9EA0A5] text-sm font-normal leading-5`}
                >
                  {data?.location}
                </p>
              </div>
              <p
                className={`flex justify-center ${openSans.className} text-[#9EA0A5] text-sm font-normal leading-6 my-2`}
              >
                {data?.desc}
              </p>
              <div className="flex justify-center my-5">
                <button
                  className={`bg-[#5E50A1] rounded px-20 py-2 ${openSans.className} text-[#fff] text-base font-bold leading-5`}
                >
                  Hire
                </button>
              </div>
              <h2
                className={`flex justify-center ${openSans.className} text-[#1F2A36] text-xl font-semibold leading-6 my-2`}
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
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
      {/* Footer end */}
    </>
  );
}

// Merubah menjadi halaman ssr
export async function getServerSideProps(props) {
  const { id } = props.params;

  const request = await axios.get(
    `http://localhost:3000/api/list-talent?id=${id}`
  );

  return {
    props: request.data,
  };
}

export default Detail;
