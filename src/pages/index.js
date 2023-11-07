export default function Home() {
  return (
    <main id="home-page">
      {/* Header start */}
      <header className="container mx-auto">
        {/* Navbar */}
        <nav className="flex justify-between py-8 mobile-container">
          <img
            src="/images/logo/peworld-main.svg"
            alt="logo"
            className="w-[127px] h-[35px]"
          />
          <div className="flex gap-4">
            <button className="btn-login px-5">Masuk</button>
            <button className="btn-register px-5">Daftar</button>
          </div>
        </nav>
        {/* Hero Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 items-center mt-10 mobile-container">
          <div className="col-span-1">
            <h1 className="hero-primary">
              Talenta terbaik negri untuk perubahan revolusi 4.0
            </h1>
            <p className="hero-secondary mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <button className="mt-5 hero-button px-5 py-5">
              Mulai Dari Sekarang
            </button>
          </div>
          <div className="col-span-1 flex justify-end">
            <img
              src="/images/homepage-image/hero-content.png"
              alt="hero-image"
            />
          </div>
        </section>
      </header>
      {/* Header end */}
    </main>
  );
}
