import { Open_Sans } from "next/font/google";
import Image from "next/image";
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
      <header className="container mx-auto px-2">
        {/* Navbar */}
        <Navbar />
        {/* Hero Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 items-center mt-10">
          <div className="col-span-1 md:col-span-1 md:order-first order-last">
            <h1
              className={`${openSans.className} text-5xl font-semibold leading-[4.375rem] text-[#1F2A36]`}
            >
              Talenta terbaik negri untuk perubahan revolusi 4.0
            </h1>
            <p
              className={`${openSans.className} text-lg font-normal leading-7 text-[#46505C] mt-5`}
            >
              Dengan fitur pencarian canggih, kesempatan karier tak terbatas,
              dan jaringan yang luas, kami membawa Anda menuju masa depan kerja
              yang lebih baik. Daftar sekarang!
            </p>
            <button
              className={`${openSans.className} bg-primary rounded px-6 py-5 text-[#fff] text-base font-bold mt-10`}
              onClick={() => router.push(`/talent-list/`)}
            >
              Mulai Dari Sekarang
            </button>
          </div>
          <div className="col-span-1 md:col-span-1 justify-self-end mb-10">
            <Image
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
      <section className="container mx-auto px-2 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="col-span-1 md:col-span-1">
            <Image
              src="/images/homepage-image/section-1.png"
              alt="section 1"
              width={568}
              height={488}
            />
          </div>
          <div className="col-span-1 md:col-span-1 justify-self-end">
            <h2
              className={`${openSans.className} text-4xl font-semibold leading-[3.5rem] text-[#1F2A36]`}
            >
              Kenapa harus mencari tallent di peworld
            </h2>

            {[
              "Temukan talenta terbaik dengan cepat.",
              "Memastikan antara kebutuhan perusahaan dan keterampilan unik para kandidat.",
              "Gambaran lengkap tentang kandidat dengan portofolio interaktif mereka.",
              "Prioritaskan keamanan data kandidat dan perusahaan dengan sistem keamanan tinggi.",
            ]?.map((item, key) => (
              <div className="flex gap-x-5 items-center py-5" key={key}>
                <Image
                  src="/images/icon/tick-1.svg"
                  alt="ceklis"
                  width={24}
                  height={24}
                />
                <p
                  className={`${openSans.className} text-base font-normal leading-7 text-[#46505C]`}
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
      <section className="container mx-auto px-2 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="col-span-1 md:col-span-1 md:order-first order-last ">
            <h2
              className={`${openSans.className} text-4xl font-semibold leading-[3.5rem] text-[#1F2A36]`}
            >
              Skill Tallent
            </h2>
            <p
              className={`${openSans.className} text-lg font-normal leading-7 text-[#46505C]`}
            >
              Talent kami memiliki skill yang sangat dibutuhkan oleh perusahaan,
              diantaranya adalah
            </p>

            <div className="grid grid-cols-2 md:grid-cols-2">
              <div>
                {["Java", "Kotlin", "PHP", "Javascript"]?.map((item, key) => (
                  <div className="flex gap-x-5 items-center py-5" key={key}>
                    <Image
                      src="/images/icon/tick-2.svg"
                      alt="ceklis"
                      width={24}
                      height={24}
                    />
                    <p
                      className={`${openSans.className} text-base font-normal leading-7 text-[#46505C]`}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                {["Golang", "C++", "Ruby", "10+ Bahasa Lainnya"]?.map(
                  (item, key) => (
                    <div className="flex gap-x-5 items-center py-5" key={key}>
                      <Image
                        src="/images/icon/tick-2.svg"
                        alt="ceklis"
                        width={24}
                        height={24}
                      />
                      <p
                        className={`${openSans.className} text-base font-normal leading-7 text-[#46505C]`}
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
            <Image
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
      <section className="container mx-auto px-2 my-24 flex justify-center sm:w-[100%]">
        <div className="flex justify-around flex-wrap bg-primary rounded-tl-3xl rounded-br-3xl w-[71.25rem] h-[14.1875rem] items-center">
          <h2
            className={`${openSans.className} text-[#fff] text-4xl font-semibold leading-10`}
          >
            Tunggu apalagi?
            <br />
            Mari bergabung!
          </h2>
          <button
            className={`${openSans.className} bg-white rounded w-[13.125rem] h-[3.94413rem] text-[#796EAF] text-base font-bold leading-5`}
          >
            Mulai Dari Sekarang
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
