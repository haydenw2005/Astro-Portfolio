import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#welcome", label: "Home" },
    { href: "#about-me", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[60] transition-all ${
        isScrolled
          ? "backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#welcome"
          className="text-white font-bold tracking-tight text-lg"
        >
          Hayden <span className="text-purple-300">White</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-200 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/images/Hayden_White_Resume_Jan_2025-1.pdf?url"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-purple-300 px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-purple-400 transition-colors"
          >
            Resume
          </a>
        </div>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:text-white"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-200 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/images/Hayden_White_Resume_Jan_2025-1.pdf?url"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-purple-300 px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-purple-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
