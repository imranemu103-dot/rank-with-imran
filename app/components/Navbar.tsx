"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a href="#home" className="text-2xl font-extrabold text-white">
          Rank with{" "}
          <span className="text-blue-500">
            Imran
          </span>
        </a>


        <nav className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">

          <a
            href="#home"
            className="transition hover:text-blue-500"
          >
            Home
          </a>

          <a
            href="#services"
            className="transition hover:text-blue-500"
          >
            Services
          </a>

          <a
            href="#about"
            className="transition hover:text-blue-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="transition hover:text-blue-500"
          >
            Contact
          </a>

        </nav>


        <a
          href="#contact"
          className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
        >
          Free Audit
        </a>

      </div>
    </header>
  );
}