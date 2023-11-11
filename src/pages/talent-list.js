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

      {/* Footer */}
      <Footer />
      {/* Footer end */}
    </main>
  );
}

export default TalentList;
