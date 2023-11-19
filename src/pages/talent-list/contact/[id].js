import React from "react";
import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { getCookie } from "cookies-next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
          <div className="md:col-span-1 py-12 hidden md:block">
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
          <div className="md:col-span-2 col-span-3 py-12 grid">
            <h1 className="text-3xl font-semibold">Contact {data?.fullname}</h1>
            <p className="text-[#46505C] text-lg font-normal mt-2 mb-5">
              Please complete all the columns below to contact the talent you
              want to recruit.
            </p>
            <label
              className="text-[#9EA0A5] text-sm font-normal mb-2 mt-4"
              htmlFor="purpose"
            >
              The purpose of this message
            </label>
            <input
              id="purpose"
              className="h-[3.125rem] rounded border border-[#E2E5ED] pl-4 text-[#858D96] text-base font-normal"
              placeholder="Enter a purpose"
              type="text"
            />
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
            />
            <label
              className="text-[#9EA0A5] text-sm font-normal mb-2 mt-4"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="rounded border border-[#E2E5ED] pl-4 pt-2 text-[#858D96] text-base font-normal"
              placeholder="Enter message"
              type="text"
              rows={5}
            />
            <button className="bg-[#FBB017] rounded py-3 mt-10 text-white text-base font-bold">
              Send
            </button>
          </div>
        </div>
      </section>
      {/* Main section end */}

      {/* Footer */}
      <Footer />
      {/* Footer end */}
    </div>
  );
}

// Change to SSR page
export async function getServerSideProps({ req, res, params }) {
  const { id } = params;

  const user = getCookie("user", { req, res });
  const token = getCookie("token", { req, res });

  if (!user && token) {
    return {
      redirect: {
        permanent: false,
        destination: `/talent-list/detail/${id}`,
      },
    };
  }

  const request = await axios.get(
    `http://localhost:3000/api/list-talent?id=${id}`
  );

  return {
    props: request.data,
  };
}

export default ContactPage;
