export default function Home() {
  return (
    <main id="home-page">
      {/* Header start */}
      <header className="container mx-auto">
        {/* Navbar */}
        <nav className="flex justify-between py-5">
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
      </header>
      {/* Header end */}
    </main>
  );
}
