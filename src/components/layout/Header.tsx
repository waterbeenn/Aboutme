import { useState } from "react";
import { Hamburger, X } from "lucide-react";
import { portfolioData } from "../lib/portfolio-data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Project", href: "#projects" },
    { label: "Career", href: "#career" },
  ];

  const handleNavClick = (href: string) => {
    if (href !== "#") {
      const element = document.querySelector(href);
      if (element) {
        const header = document.querySelector("header");
        const headerHeight = header ? header.offsetHeight : 80;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementTop - headerHeight, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="backdrop-blur-sm bg-white/30 border-b border-white/20 fixed top-0 left-0 right-0 w-full z-40">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-3xl font-poppins font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {portfolioData.profile.name}
        </h1>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-gray-700 font-medium hover:text-purple-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger-button focus:outline-none"
        >
          {menuOpen ? (
            <X className="w-6 h-6" style={{ color: "#793EEA" }} />
          ) : (
            <Hamburger className="w-6 h-6" style={{ color: "#793EEA" }} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white/50 backdrop-blur-sm border-t border-white/20">
          <nav className="flex flex-col gap-4 max-w-6xl mx-auto px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-gray-700 font-medium hover:text-purple-600 transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
