import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { WHATSAPP_URL, PHONE_RAW } from "../constants";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

/* Premium text-based brand logo */
const BrandLogo = () => (
  <div className="flex flex-col items-start leading-none select-none">
    <span
      className="font-playfair font-bold text-[1.45rem] sm:text-[1.6rem] tracking-[0.08em] text-logo-brand"
      style={{
        background: "linear-gradient(135deg, #C9A227 0%, #F3E190 45%, #C9A227 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      PARADISE
    </span>
    <div className="flex items-center gap-1.5 w-full my-[2px]">
      <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/80 to-transparent" />
      <div className="w-1 h-1 bg-[#D4AF37]/60 rotate-45 flex-shrink-0" />
      <div className="h-px flex-1 bg-gradient-to-l from-[#D4AF37]/80 to-transparent" />
    </div>
    <span
      className="font-montserrat uppercase tracking-[0.28em] text-[9px] sm:text-[10px] font-semibold"
      style={{ color: "rgba(212,175,55,0.75)" }}
    >
      Inn Homestays
    </span>
  </div>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="main-header"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A1020]/96 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-gradient-to-b from-black/65 to-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "py-4" : "py-5 md:py-6"
        }`}
      >
        {/* Text Brand Logo */}
        <a
          href="#home"
          onClick={(e) => goTo(e, "#home")}
          data-testid="header-logo"
          className="flex-shrink-0 group"
          aria-label="Paradise Inn Homestays – Home"
        >
          <BrandLogo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => goTo(e, link.href)}
              className="nav-link relative text-white/80 hover:text-[#D4AF37] text-xs font-semibold tracking-[0.18em] uppercase transition-colors duration-300"
              data-testid={`nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href={`tel:${PHONE_RAW}`}
            className="flex items-center gap-1.5 text-white/55 hover:text-[#D4AF37] text-xs tracking-wide transition-colors duration-200"
            data-testid="header-phone"
          >
            <Phone size={13} strokeWidth={2.5} />
            <span className="font-medium">{PHONE_RAW}</span>
          </a>

          {/* Divider */}
          <div className="w-px h-5 bg-white/15" />

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-book-btn"
            className="relative bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#B5952F] hover:to-[#C9A227] text-white text-xs font-bold px-6 py-2.5 rounded-full tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_18px_rgba(212,175,55,0.38)] hover:shadow-[0_6px_24px_rgba(212,175,55,0.55)]"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white/85 hover:text-[#D4AF37] p-1.5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-[#0A1020]/98 backdrop-blur-xl border-t border-[#D4AF37]/15 px-6 py-7"
          data-testid="mobile-menu"
        >
          {/* Mobile brand name */}
          <div className="mb-6 pb-5 border-b border-white/10">
            <BrandLogo />
          </div>
          <nav className="flex flex-col gap-0">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => goTo(e, link.href)}
                className="text-white/75 hover:text-[#D4AF37] py-3.5 border-b border-white/8 text-sm font-medium tracking-[0.12em] uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_RAW}`}
              className="flex items-center gap-2 text-white/55 hover:text-[#D4AF37] mt-5 text-sm transition-colors"
            >
              <Phone size={14} />
              {PHONE_RAW}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-gradient-to-r from-[#C9A227] to-[#D4AF37] text-white text-center font-bold px-6 py-3.5 rounded-full uppercase tracking-widest text-sm transition-all duration-300 shadow-[0_4px_18px_rgba(212,175,55,0.35)]"
              data-testid="mobile-book-btn"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
