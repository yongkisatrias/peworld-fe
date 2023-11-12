import React from "react";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
});

function TalentList() {
  return (
    <main id="talent-list">
      {/* Header start */}
      <header className="container mx-auto px-2">
        {/* Navbar */}
        <Navbar />
      </header>
      {/* Header end */}

      {/* Sub Header */}
      <section className="bg-[#5E50A1]">
        <div className="container mx-auto px-2">
          <h1
            className={`${openSans.className} text-2xl font-bold leading-5 text-[#fff] py-5`}
          >
            Top Jobs
          </h1>
        </div>
      </section>
      {/* Sub Header end */}

      {/* Main Section */}
      <section className="bg-[#F6F7F8] py-8">
        <div className="container mx-auto px-2">
          {/* Search Bar */}
          <div className="bg-[#fff] drop-shadow-[0_1px_20px_rgba(197,197,197,0.25)] flex justify-between p-4 rounded-lg gap-4">
            <input placeholder="Search for any skill" className="w-full" />
            <button
              className={`${openSans.className} bg-[#5E50A1] rounded px-5 py-2 text-[#fff] text-base font-semibold leading-5`}
            >
              Search
            </button>
          </div>
          {/* Content */}
          <div className="bg-[#fff] drop-shadow-[0_1px_20px_rgba(197,197,197,0.25)] rounded-lg mt-8 px-5">
            {/* Talent List */}
            {[...new Array(4)].map((item, key) => (
              <div
                className="grid grid-cols-1 md:grid-cols-6 gap-10 py-10 border-b-2"
                key={key}
              >
                <div className="col-span-5 flex gap-5">
                  <img
                    src={"https://i.pravatar.cc/300"}
                    width={100}
                    height={100}
                    alt="profile picture"
                    className="rounded-full h-[100px]"
                  />
                  <div>
                    <h4
                      className={`${openSans.className} text-[#1F2A36] text-xl font-semibold`}
                    >
                      Louis Tomlinson
                    </h4>
                    <p
                      className={`${openSans.className} text-[#9EA0A5] text-sm font-normal mt-1`}
                    >
                      Web developer
                    </p>
                    <div className="flex gap-1 mt-1">
                      <img src="/images/icon/map-pin.svg" />
                      <p
                        className={`${openSans.className} text-[#9EA0A5] text-sm font-normal`}
                      >
                        Lorem ipsum
                      </p>
                    </div>
                    {/* Skill */}
                    <div className="flex gap-2">
                      {["PHP", "JavaScript", "HTML"].map((item, key) => (
                        <div
                          className={`bg-[#fed417] rounded border-[#FBB017] border-2 px-3 py-1 mt-1`}
                          key={key}
                        >
                          <p
                            className={`${openSans.className} text-[#fff] text-xs font-semibold`}
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  className={`${openSans.className} col-span-1 bg-[#5E50A1] rounded text-[#fff] text-base font-semibold leading-5 mr-10 my-7`}
                >
                  Lihat Profile
                </button>
              </div>
            ))}
          </div>
          {/* Content end */}
        </div>
        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {/* Previous */}
          <button className="bg-[#fff] border-2 rounded p-2">
            <img
              src="images/icon/prev.svg"
              alt="previous"
              width={25}
              height={25}
            />
          </button>
          {/* List */}
          {[...new Array(6)].map((item, key) => (
            <button
              className={`${openSans.className} border-2 rounded p-2 ${
                key === 0 ? "bg-[#5E50A1] text-[#fff]" : "bg-[#fff]"
              }`}
              key={key}
            >
              <p className="w-[25px] h-[25px]">{++key}</p>
            </button>
          ))}

          {/* Next */}
          <button className="bg-[#fff] border-2 rounded p-2">
            <img
              src="images/icon/next.svg"
              alt="previous"
              width={25}
              height={25}
            />
          </button>
        </div>
        {/* Pagination end */}
      </section>
      {/* Main Section end */}

      {/* Footer */}
      <Footer />
      {/* Footer end */}
    </main>
  );
}

export default TalentList;
