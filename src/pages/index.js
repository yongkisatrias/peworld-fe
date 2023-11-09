import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main id="home-page">
      {/* Header start */}
      <header className="container mx-auto">
        {/* Navbar */}
        <nav className="flex justify-between py-5 mobile-container">
          <img
            src="/images/logo/peworld-main.svg"
            alt="logo"
            className="w-[7.9375rem] h-[2.1875rem]"
          />
          <div className="flex gap-4">
            <button
              className={`${openSans.className} border border-[#5e50a1] rounded px-5 text-[#5e50a1] text-sm font-bold leading-6`}
            >
              Masuk
            </button>
            <button
              className={`${openSans.className} bg-[#5e50a1] rounded px-5 text-[#fff] text-sm font-bold leading-6`}
            >
              Daftar
            </button>
          </div>
        </nav>
        {/* Hero Content */}
        {/* <section className="grid grid-cols-1 md:grid-cols-3 items-center mt-10 mobile-container">
          <div className="col-span-2">
            <h1 className="hero-primary">
              Talenta terbaik negri
              <br />
              untuk perubahan
              <br />
              revolusi 4.0
            </h1>
            <p className="hero-secondary mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <button className="mt-5 hero-button px-5 py-5">
              Mulai Dari Sekarang
            </button>
          </div>
          <div className="col-span-1">
            <img
              src="/images/homepage-image/hero-content.png"
              alt="hero-image"
            />
          </div>
        </section> */}
      </header>
      {/* Header end */}
    </main>
  );
}
