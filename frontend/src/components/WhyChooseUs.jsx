import { MessageCircle, Tag, Zap, Shield } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const FEATURES = [
  {
    icon: Tag,
    title: "Direct Booking",
    desc: "Book directly with us and skip the commission. You get the best price — always.",
    color: "from-[#D4AF37]/20 to-[#D4AF37]/5",
  },
  {
    icon: MessageCircle,
    title: "Instant WhatsApp Response",
    desc: "Chat directly with our team. Get instant confirmation and answers within minutes.",
    color: "from-[#25D366]/20 to-[#25D366]/5",
  },
  {
    icon: Tag,
    title: "Best Local Price",
    desc: "Lowest guaranteed rates in the area. No hidden fees, no surprises at checkout.",
    color: "from-[#D4AF37]/20 to-[#D4AF37]/5",
  },
  {
    icon: Shield,
    title: "Trusted & Verified",
    desc: "Hundreds of happy guests. Premium hygiene standards and 24/7 support on standby.",
    color: "from-[#3B82F6]/20 to-[#3B82F6]/5",
  },
];

export default function WhyChooseUs() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section data-testid="why-choose-section" className="py-24 md:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 80% 20%, #D4AF37 0%, transparent 40%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 reveal ${isVisible ? "is-visible" : ""}`}
        >
          <p className="section-overline mb-4">Why Us</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose
            <span className="text-[#D4AF37]"> Paradise Inn</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            We believe luxury shouldn't cost a fortune. Here's why guests keep coming back.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className={`group p-7 border border-white/15 hover:border-[#D4AF37]/50 rounded-sm transition-all duration-300 hover:-translate-y-2 bg-[#1E293B] hover:bg-[#263548] reveal reveal-delay-${i + 1} ${isVisible ? "is-visible" : ""}`}
              data-testid={`feature-card-${i}`}
            >
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 flex items-center justify-center mb-5 group-hover:bg-[#D4AF37]/25 transition-colors duration-300">
                <f.icon size={22} className="text-[#D4AF37]" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-white mb-3">{f.title}</h3>
              <p className="text-white/75 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
