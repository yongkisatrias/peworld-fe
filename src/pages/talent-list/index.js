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

function TalentList(props) {
  const router = useRouter();
  const [setListData] = React.useState(props?.data?.slice(0, 4));
  const [currentPage, setCurrentPage] = React.useState(1);
  const countData = Math.round(props?.data?.length / 4);
  const [searchBar, setSearchBar] = React.useState("");
  const allTalents = props?.data;

  const handlePagination = (nextPage) => {
    setCurrentPage(nextPage);

    if (nextPage > 1) {
      setListData(props?.data?.slice(4 * (nextPage - 1), 4 * nextPage));
    } else {
      setListData(props?.data?.slice(0, 4));
    }
  };

  return (
    <>
      <Head>
        <title>Peworld | Talent List</title>
      </Head>
      {/* Header start */}
      <header className="container mx-auto">
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
      <main className="bg-[#F6F7F8] py-8">
        <div className="container mx-auto px-2">
          {/* Search Bar */}
          <div className="bg-[#fff] drop-shadow-[0_1px_20px_rgba(197,197,197,0.25)] flex justify-between p-4 rounded-lg gap-4">
            <input
              placeholder="Search for any skill or name"
              className="w-full"
              onChange={(item) => setSearchBar(item.target.value)}
            />
            <button
              className={`${openSans.className} bg-[#5E50A1] rounded px-5 py-2 text-[#fff] text-base font-semibold leading-5`}
            >
              Search
            </button>
          </div>
          {/* Content */}
          <div className="bg-[#fff] drop-shadow-[0_1px_20px_rgba(197,197,197,0.25)] rounded-lg mt-8 px-5">
            {/* Talent List */}
            {allTalents
              .filter(
                (item) =>
                  item.fullname
                    .toLowerCase()
                    .includes(searchBar.toLowerCase()) ||
                  item.skills.some((skill) =>
                    skill.toLowerCase().includes(searchBar.toLowerCase())
                  )
              )
              .slice((currentPage - 1) * 4, currentPage * 4) // Apply pagination after filtering
              .map((item, key) => (
                <div
                  className="grid grid-cols-1 md:grid-cols-6 gap-10 py-10 border-b-2"
                  key={key}
                >
                  <div className="md:col-span-5 col-span-1 flex gap-5">
                    <img
                      src={item?.photo}
                      width={100}
                      height={100}
                      alt="profile picture"
                      className="rounded-full h-[100px]"
                    />
                    <div>
                      <h4
                        className={`${openSans.className} text-[#1F2A36] text-xl font-semibold`}
                      >
                        {item?.fullname}
                      </h4>
                      <p
                        className={`${openSans.className} text-[#9EA0A5] text-sm font-normal mt-1`}
                      >
                        {item?.job}
                      </p>
                      <div className="flex gap-1 mt-1">
                        <img src="/images/icon/map-pin.svg" />
                        <p
                          className={`${openSans.className} text-[#9EA0A5] text-sm font-normal`}
                        >
                          {item?.location}
                        </p>
                      </div>
                      {/* Skill */}
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, key) => (
                          <div
                            className={`bg-[#fed417] rounded border-[#FBB017] border-2 px-3 py-1 mt-1`}
                            key={key}
                          >
                            <p
                              className={`${openSans.className} text-[#fff] text-xs font-semibold`}
                            >
                              {skill}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    className={`${openSans.className} md:col-span-1 col-span-1 bg-[#5E50A1] rounded text-[#fff] text-base font-semibold leading-5 my-7 py-2`}
                    onClick={() =>
                      router.push(`/talent-list/detail/${item?.id}`)
                    }
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
          {[...new Array(countData)].map((item, key) => {
            const increment = ++key;

            return (
              <button
                className={`${openSans.className} border-2 rounded p-2 ${
                  increment === currentPage
                    ? "bg-[#5E50A1] text-[#fff]"
                    : "bg-[#fff]"
                }`}
                key={increment}
                onClick={() => handlePagination(increment)}
              >
                <p className="w-[25px] h-[25px]">{increment}</p>
              </button>
            );
          })}

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
      </main>
      {/* Main Section end */}

      {/* Footer */}
      <Footer />
      {/* Footer end */}
    </>
  );
}

// Merubah menjadi halaman ssr
export async function getServerSideProps() {
  const request = await axios.get("http://localhost:3000/api/list-talent");

  return {
    props: request.data,
  };
}

export default TalentList;
