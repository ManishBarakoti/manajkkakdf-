import { ChevronDown } from "lucide-react";
import { IMAGES, WHATSAPP_URL } from "../constants";

const WA_ICON = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.118 1.526 5.845L.057 23.886a.5.5 0 0 0 .614.614l6.041-1.47A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.927 0-3.736-.519-5.284-1.424l-.379-.224-3.932.958.977-3.875-.246-.389A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

export default function Hero() {
  const scrollToRooms = () =>
    document.querySelector("#rooms")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGES.hero})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />

      {/* Badge strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto">
        <p className="section-overline mb-4 hero-delay-1">Welcome to Paradise</p>

        <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 hero-delay-2">
          Experience Comfort
          <span className="block text-[#D4AF37]">&amp; Luxury</span>
        </h1>

        <p className="font-playfair text-xl md:text-2xl text-white/75 italic mb-3 hero-delay-3">
          at Hotel Paradise Inn
        </p>

        <p className="text-base md:text-lg text-white/60 mb-10 max-w-xl mx-auto leading-relaxed hero-delay-4">
          Book your stay directly with us &mdash; Best price guaranteed
        </p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-10 hero-delay-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center hero-delay-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-whatsapp-btn"
            className="flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#B5952F] text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_24px_rgba(212,175,55,0.45)]"
          >
            <WA_ICON />
            Book on WhatsApp
          </a>
          <button
            onClick={scrollToRooms}
            data-testid="hero-view-rooms-btn"
            className="flex items-center justify-center gap-3 border-2 border-white/60 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
          >
            View Rooms
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
