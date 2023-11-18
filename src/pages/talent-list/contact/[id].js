import React from "react";
import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

import Navbar from "@/components/Navbar";

const openSans = Open_Sans({
  subsets: ["latin"],
});

function ContactPage(props) {
  const { data } = props;
  return (
    <div className={openSans.className}>
      <Head>
        <title>Peworld | Contact</title>
      </Head>
      {/* Header start */}
      <header className="container mx-auto px-2">
        {/* Navbar */}
        <Navbar />
      </header>
      {/* Header end */}

      {/* Main section */}
      <section className="bg-[#F6F7F8]">
        <div className="container mx-auto px-2 grid grid-cols-3 gap-16">
          {/* Left section */}
          <div className="col-span-1 py-12">
            <div className="bg-white px-7 pt-5">
              <div className="flex justify-center py-4">
                <img
                  src={data?.photo}
                  alt="avatar"
                  width={150}
                  height={150}
                  className="rounded-full w-[150px] h-[150px]"
                />
              </div>
              <h1
                className={`${openSans.className} text-primary text-2xl font-semibold leading-[3.5rem]`}
              >
                {data?.fullname}
              </h1>
              <div className="flex gap-2">
                <Image
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
              <div className="">
                <p
                  className={`${openSans.className} text-[#9EA0A5] text-sm font-normal leading-6 my-2 text-justify`}
                >
                  {data?.desc}
                </p>
              </div>
              <h2
                className={`flex ${openSans.className} text-primary text-xl font-semibold leading-6 mt-5`}
              >
                Skill
              </h2>
              <div className="flex">
                <div className="flex flex-wrap gap-3 mt-2 mb-5">
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

          {/* Right section */}
          <div className="col-span-2 py-12">
            <div className="bg-white">
              <h1>Contact Louis Tomlinson</h1>
            </div>
          </div>
        </div>
      </section>
      {/* Main section end */}
    </div>
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

export default ContactPage;
