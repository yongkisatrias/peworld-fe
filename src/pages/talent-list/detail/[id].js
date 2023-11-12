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

function Detail() {
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

      <main></main>

      {/* Footer */}
      <Footer />
      {/* Footer end */}
    </>
  );
}

export default Detail;
