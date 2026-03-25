import { MapPin } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function LocationMap() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="location" data-testid="location-section" className="py-24 md:py-32 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 reveal ${isVisible ? "is-visible" : ""}`}
        >
          <p className="section-overline mb-4">Find Us</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Our Location
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <div className="flex items-center justify-center gap-2 text-[#57534E]">
            <MapPin size={18} className="text-[#D4AF37]" />
            <p className="text-base">Hotel Paradise Inn, India</p>
          </div>
        </div>

        {/* Map */}
        <div
          className={`reveal ${isVisible ? "is-visible" : ""} relative overflow-hidden shadow-2xl border border-[#E7E5E4]`}
        >
          {/* Gold top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-10" />
          <iframe
            title="Hotel Paradise Inn Location"
            src="https://maps.google.com/maps?q=Paradise+Inn+Homestays&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            data-testid="google-maps-embed"
          />
        </div>

        {/* Info strip */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Address", value: "Hotel Paradise Inn, India" },
            { label: "Phone", value: "+91 90000 83725" },
            { label: "Check-in / Check-out", value: "12:00 PM / 11:00 AM" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center py-5 px-4 bg-white border border-[#E7E5E4] hover:border-[#D4AF37]/40 transition-colors"
            >
              <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-[#0F172A] font-medium text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
