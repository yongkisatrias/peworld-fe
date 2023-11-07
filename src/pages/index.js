export default function Home() {
  return (
    <main className="home-page">
      <header className="container mx-auto">
        <nav className="flex justify-between py-5">
          <img
            src="/images/logo/peworld-main.svg"
            alt="logo"
            className="w-[127px] h-[35px]"
          />
          <div className="flex gap-4 auth-btn">
            <button className="border border-[#5E50A1] text-[#5E50A1] text-sm font-bold px-4 rounded">
              Masuk
            </button>
            <button className="bg-[#5E50A1] border border-[#5E50A1] text-[#fff] text-sm font-bold px-4 rounded">
              Daftar
            </button>
          </div>
        </nav>
      </header>
    </main>
  );
}
