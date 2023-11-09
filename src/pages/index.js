import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main id="home-page">
      {/* Header start */}
      <header className="container mx-auto px-2">
        {/* Navbar */}
        <nav className="flex justify-between py-5 mobile-container">
          <img
            src="/images/logo/peworld-main.svg"
            alt="logo"
            className="w-[7.9375rem] h-[2.1875rem]"
          />
          <div className="flex gap-4">
            <button
              className={`${openSans.className} border border-[#5e50a1] rounded px-5 text-[#5e50a1] text-sm font-bold`}
            >
              Masuk
            </button>
            <button
              className={`${openSans.className} bg-[#5e50a1] rounded px-5 text-[#fff] text-sm font-bold`}
            >
              Daftar
            </button>
          </div>
        </nav>
        {/* Hero Content */}
        <section className="grid grid-cols-1 md:grid-cols-3 items-center mt-20">
          <div className="col-span-1 md:col-span-2">
            <h1
              className={`${openSans.className} text-5xl font-semibold leading-[4.375rem] text-[#1F2A36]`}
            >
              Talenta terbaik negri
              <br />
              untuk perubahan
              <br />
              revolusi 4.0
            </h1>
            <p
              className={`${openSans.className} text-lg font-normal leading-7 text-[#46505C] mt-5`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <button
              className={`${openSans.className} bg-[#5E50A1] rounded px-6 py-5 text-[#fff] text-base font-bold mt-10`}
            >
              Mulai Dari Sekarang
            </button>
          </div>
          <div className="col-span-1 md:col-span-1">
            <img
              src="/images/homepage-image/hero-content.png"
              alt="hero-image"
              className="w-[31.25rem] h-[31.25rem]"
            />
          </div>
        </section>
      </header>
      {/* Header end */}

      {/* Section 1 */}
      <section className="container mx-auto px-2 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1 md:col-span-1 items-center">
            <img
              src="/images/homepage-image/section-1.png"
              alt="section 1"
              className="w-[31rem] h-[24.3655rem]"
            />
          </div>
          <div className="col-span-1 md:col-span-1 items-center">
            <h2
              className={`${openSans.className} text-4xl font-semibold leading-[3.5rem] text-[#1F2A36]`}
            >
              Kenapa harus mencari tallent di peworld
            </h2>

            {[
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
            ]?.map((item, key) => (
              <div className="flex gap-x-5 items-center py-5" key={key}>
                <img
                  src="/images/icon/tick-1.svg"
                  alt="ceklis"
                  className="w-[1.5rem] h-[1.5rem]"
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
    </main>
  );
}
