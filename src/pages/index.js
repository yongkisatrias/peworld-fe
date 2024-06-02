/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */

import { Open_Sans } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();
  return (
    <main id="home-page">
      <Head>
        <title>Peworld | Home</title>
      </Head>
      {/* Header start */}
      <header className="container mx-auto px-4 lg:px-9">
        {/* Navbar */}
        <Navbar />
        {/* Hero Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 items-center mt-10">
          <div className="col-span-1 md:col-span-1 md:order-first order-last">
            <h1
              className={`${openSans.className} text-5xl font-semibold leading-[4.375rem] text-primary`}
            >
              The country's best talent for the industrial revolution 4.0
            </h1>
            <p
              className={`${openSans.className} text-lg font-normal leading-7 text_secondary mt-5`}
            >
              With advanced search features, unlimited career opportunities, and
              an extensive network, we lead you to a better working future. Join
              us now!
            </p>
            <button
              className={`${openSans.className} bg-primary hover:bg-[#5242a2] rounded px-6 py-5 text-white text-base font-bold mt-10`}
              onClick={() => router.push(`/talent-list/`)}
            >
              Search Talent Now!
            </button>
          </div>
          <div className="col-span-1 md:col-span-1 justify-self-end mb-10">
            <img
              src="/images/homepage-image/hero-content.png"
              alt="hero-image"
              width={617}
              height={617}
            />
          </div>
        </section>
      </header>
      {/* Header end */}

      {/* Section 1 */}
      <section className="container mx-auto px-4 lg:px-9 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="col-span-1 md:col-span-1">
            <img
              src="/images/homepage-image/section-1.png"
              alt="section 1"
              width={568}
              height={488}
            />
          </div>
          <div className="col-span-1 md:col-span-1 justify-self-end">
            <h2
              className={`${openSans.className} text-4xl font-semibold leading-[3.5rem] text-primary`}
            >
              Why should you look for talent in Peword?
            </h2>

            {[
              "Find top talent quickly.",
              "Ascertain the company's needs and the unique skills of the candidates.",
              "A complete overview of candidates with their interactive portfolio.",
              "Prioritize the security of candidate data and companies with high security systems.",
            ]?.map((item, key) => (
              <div className="flex gap-x-5 items-center py-5" key={key}>
                <img
                  src="/images/icon/tick-1.svg"
                  alt="ceklis"
                  width={24}
                  height={24}
                />
                <p
                  className={`${openSans.className} text-base font-normal leading-7 text_secondary`}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section 1 end */}

      {/* Section 2 */}
      <section className="container mx-auto px-4 lg:px-9 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="col-span-1 md:col-span-1 md:order-first order-last ">
            <h2
              className={`${openSans.className} text-4xl font-semibold leading-[3.5rem] text-primary`}
            >
              Talent Skills
            </h2>
            <p
              className={`${openSans.className} text-lg font-normal leading-7 text_secondary`}
            >
              Our talents have skills that are really needed by companies,
              including:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-2">
              <div>
                {["Java", "Kotlin", "PHP", "Javascript"]?.map((item, key) => (
                  <div className="flex gap-x-5 items-center py-5" key={key}>
                    <img
                      src="/images/icon/tick-2.svg"
                      alt="ceklis"
                      width={24}
                      height={24}
                    />
                    <p
                      className={`${openSans.className} text-base font-normal leading-7 text_secondary`}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                {["Golang", "C++", "Ruby", "10+ Other Languages"]?.map(
                  (item, key) => (
                    <div className="flex gap-x-5 items-center py-5" key={key}>
                      <img
                        src="/images/icon/tick-2.svg"
                        alt="ceklis"
                        width={24}
                        height={24}
                      />
                      <p
                        className={`${openSans.className} text-base font-normal leading-7 text_secondary`}
                      >
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 justify-self-end mb-10">
            <img
              src="/images/homepage-image/section-2.png"
              alt="section 2"
              width={570}
              height={490}
            />
          </div>
        </div>
      </section>
      {/* Section 2 end */}

      {/* CTA */}
      <section className="container mx-auto px-4 lg:px-9 my-24 flex justify-center sm:w-[100%]">
        <div className="flex justify-around flex-wrap bg-primary rounded-tl-3xl rounded-br-3xl w-[71.25rem] h-[14.1875rem] items-center px-5">
          <h2
            className={`${openSans.className} text-white text-2xl font-semibold leading-10 md:text-4xl`}
          >
            What are you waiting for?
            <br />
            Let's started!
          </h2>
          <button
            className={`${openSans.className} bg-white hover:bg-[#f3f6f4] rounded w-[13.125rem] h-[3.94413rem] text-[#796EAF] text-base font-bold leading-5`}
            onClick={() => router.push(`/register/`)}
          >
            Join Now!
          </button>
        </div>
      </section>
      {/* CTA end */}

      {/* Footer */}
      <Footer />
      {/* Footer end */}
    </main>
  );
}

// To change the page to static HTML
export async function getStaticProps() {
  return {
    props: {},
  };
}
