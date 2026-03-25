import { Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_RAW } from "../constants";

const goTo = (e, href) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

/* Footer brand logo – text-based, larger for footer */
const FooterBrand = () => (
  <div className="flex flex-col items-start leading-none mb-5">
    <span
      className="font-playfair font-bold text-3xl tracking-[0.08em]"
      style={{
        background: "linear-gradient(135deg, #C9A227 0%, #F3E190 45%, #C9A227 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      PARADISE
    </span>
    <div className="flex items-center gap-1.5 w-full my-[3px]">
      <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/70 to-transparent" />
      <div className="w-1 h-1 bg-[#D4AF37]/50 rotate-45 flex-shrink-0" />
      <div className="h-px flex-1 bg-gradient-to-l from-[#D4AF37]/70 to-transparent" />
    </div>
    <span
      className="font-montserrat uppercase tracking-[0.3em] text-[10px] font-semibold"
      style={{ color: "rgba(212,175,55,0.65)" }}
    >
      Inn Homestays
    </span>
  </div>
);

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-[#080F1E] text-white/70 border-t border-white/10">
      {/* Gold top line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" onClick={(e) => goTo(e, "#home")} data-testid="footer-logo">
              <FooterBrand />
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              A premium homestay experience in the heart of the city. Comfort, luxury, and warmth —
              all at honest, direct prices. Book via WhatsApp for the best rates.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/15 hover:border-[#D4AF37]/60 flex items-center justify-center text-white/40 hover:text-[#D4AF37] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Rooms", href: "#rooms" },
                { label: "Gallery", href: "#gallery" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => goTo(e, link.href)}
                    className="text-white/50 hover:text-[#D4AF37] text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#D4AF37]/40 rounded-full flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="flex items-start gap-3 text-white/50 hover:text-[#D4AF37] text-sm transition-colors"
                  data-testid="footer-phone"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0 text-[#D4AF37]/60" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/50 hover:text-[#25D366] text-sm transition-colors"
                  data-testid="footer-whatsapp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" className="mt-0.5 flex-shrink-0 text-[#D4AF37]/60">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.118 1.526 5.845L.057 23.886a.5.5 0 0 0 .614.614l6.041-1.47A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.927 0-3.736-.519-5.284-1.424l-.379-.224-3.932.958.977-3.875-.246-.389A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-[#D4AF37]/60" />
                Hotel Paradise Inn, India
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center">
            &copy; {new Date().getFullYear()} Hotel Paradise Inn. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Designed with care for a premium experience.
          </p>
        </div>
      </div>

      {/* Developer Credit */}
      <div className="border-t border-white/5 py-4 px-4 bg-[#050A12]">
        <p className="text-center text-white/30 text-xs tracking-wide">
          Developed by{" "}
          <a
            href="https://manishbarakoti.online"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="dev-credit-link"
            className="text-[#D4AF37]/70 hover:text-[#D4AF37] font-medium transition-colors duration-200 hover:underline underline-offset-2"
          >
            Manish Barakoti
          </a>
        </p>
      </div>
    </footer>
  );
}
