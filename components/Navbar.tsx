"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
  { label: "Home", href: "#home" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 py-5 transition-all duration-300 ${
          scrolled
            ? "bg-black/60 backdrop-blur-md rounded-b-xl"
            : "bg-transparent"
        } text-white`}
      >
        {/* Logo */}
        <div className="text-lg font-bold tracking-wide">
          Norfolk Bell Tent Hire
        </div>

        {/* Desktop menu */}
        <ul className="hidden gap-8 text-sm md:flex">
          {navItems.map((item) => (
  <li key={item.href}>
    <a
      href={item.href}
      className="hover:opacity-100 hover:text-amber-200 transition-colors duration-200 cursor-pointer transition"
    >
      {item.label}
    </a>
  </li>
))}
        </ul>

        {/* Desktop button */}
        <button className="btn-primary hidden md:block">
          Get Quote
        </button>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md text-white px-6 py-6 space-y-4">
          {navItems.map((item) => (
  <a
    key={item.href}
    href={item.href}
    className="block text-lg border-b border-white/10 pb-2"
    onClick={() => setOpen(false)}
  >
    {item.label}
  </a>
))}

          <button className="btn-primary w-full mt-4">
            Get Quote
          </button>
        </div>
      )}
    </header>
  );
}