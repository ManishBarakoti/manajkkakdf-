import { Check } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { IMAGES } from "../constants";

const HIGHLIGHTS = [
  "Comfortable & Stylishly Designed Rooms",
  "Prime Location — Easy Accessibility",
  "Affordable Pricing, Premium Experience",
  "Warm, Friendly & Attentive Service",
];

export default function About() {
  const [textRef, textVisible] = useScrollReveal();
  const [imgRef, imgVisible] = useScrollReveal();

  return (
    <section id="about" data-testid="about-section" className="py-24 md:py-32 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div
            ref={textRef}
            className={`reveal ${textVisible ? "is-visible" : ""}`}
          >
            <p className="section-overline mb-4">Our Story</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
              A Home Away
              <span className="block text-[#D4AF37]">From Home</span>
            </h2>
            <div className="gold-divider mb-8" />
            <p className="text-[#57534E] text-base md:text-lg leading-relaxed mb-6">
              Nestled in the heart of the city, Hotel Paradise Inn offers a perfect blend of modern
              luxury and homely warmth. From the moment you arrive, our thoughtfully designed spaces
              and personalized service ensure every stay becomes an unforgettable experience.
            </p>
            <p className="text-[#57534E] text-base leading-relaxed mb-10">
              Whether you're traveling for business or leisure, our rooms are crafted to give you
              the best comfort at the most honest price — directly, with no middleman.
            </p>

            {/* Highlights */}
            <ul className="space-y-4">
              {HIGHLIGHTS.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 reveal reveal-delay-${i + 1} ${textVisible ? "is-visible" : ""}`}
                >
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#D4AF37]/15 flex items-center justify-center">
                    <Check size={12} className="text-[#D4AF37]" strokeWidth={3} />
                  </div>
                  <span className="text-[#1C1917] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div
            ref={imgRef}
            className={`reveal ${imgVisible ? "is-visible" : ""} relative`}
          >
            {/* Decorative border */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#D4AF37]/30 rounded-sm z-0" />
            <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl">
              <img
                src={IMAGES.deluxe}
                alt="Luxury Hotel Room"
                className="w-full h-[480px] object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              {/* Stat overlay */}
              <div className="absolute bottom-6 left-6 bg-[#0F172A]/85 backdrop-blur-sm px-6 py-4 rounded-sm border-l-2 border-[#D4AF37]">
                <p className="text-[#D4AF37] text-2xl font-bold font-playfair">5+</p>
                <p className="text-white/70 text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
