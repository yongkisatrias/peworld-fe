import React from "react";
import Head from "next/head";

import Navbar from "@/components/Navbar";

function ContactPage() {
  return (
    <div>
      <Head>
        <title>Peworld | Contact</title>
      </Head>
      {/* Header start */}
      <header className="container mx-auto px-2">
        {/* Navbar */}
        <Navbar />
      </header>
      {/* Header end */}
    </div>
  );
}

export default ContactPage;
