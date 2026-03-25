import { useState } from "react";
import { User, Phone, Calendar, MapPin, Clock, MessageCircle, ChevronDown } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { WHATSAPP_NUMBER, WHATSAPP_URL, PHONE_DISPLAY } from "../constants";

const WA_SVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.118 1.526 5.845L.057 23.886a.5.5 0 0 0 .614.614l6.041-1.47A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.927 0-3.736-.519-5.284-1.424l-.379-.224-3.932.958.977-3.875-.246-.389A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

const INFO_ITEMS = [
  { icon: Phone, label: "Phone / WhatsApp", value: PHONE_DISPLAY },
  { icon: MapPin, label: "Location", value: "Hotel Paradise Inn, India" },
  { icon: Clock, label: "Check-in / Check-out", value: "12:00 PM  /  11:00 AM" },
];

const FIELD_CLASS =
  "w-full px-4 py-3.5 bg-white border border-[#E5E7EB] text-[#111827] placeholder-[#9CA3AF] rounded-sm text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all duration-200";

const Label = ({ children }) => (
  <label className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4AF37] mb-1.5">
    {children}
  </label>
);

export default function Contact() {
  const [ref, isVisible] = useScrollReveal();
  const [form, setForm] = useState({ name: "", phone: "", checkin: "", checkout: "", room: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const roomText = form.room ? `%0ARoom Type: ${encodeURIComponent(form.room)}` : "";
    const msgText = form.message ? `%0AMessage: ${encodeURIComponent(form.message)}` : "";
    const msg = `Hi%2C%20I%20want%20to%20book%20a%20room%20at%20Hotel%20Paradise%20Inn.%0AName%3A%20${encodeURIComponent(form.name)}%0APhone%3A%20${encodeURIComponent(form.phone)}%0ACheck-in%3A%20${form.checkin}%0ACheck-out%3A%20${form.checkout}${roomText}${msgText}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 md:py-32 bg-[#0F172A] relative overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(212,175,55,0.06) 0%, transparent 70%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 reveal ${isVisible ? "is-visible" : ""}`}
        >
          <p className="section-overline mb-4">Reservations</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your Stay
          </h2>
          <div className="gold-divider mx-auto mb-5" />
          <p className="text-white/50 text-base max-w-lg mx-auto">
            Reach out directly — we confirm bookings instantly via WhatsApp.
          </p>
        </div>

        {/* Two-column layout */}
        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden shadow-2xl reveal ${isVisible ? "is-visible" : ""}`}>

          {/* LEFT — Info Panel */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#D4AF37] to-[#A8852A] p-10 md:p-12 flex flex-col justify-between">
            <div>
              <p className="font-playfair text-2xl md:text-3xl font-bold text-white mb-2">
                Contact Information
              </p>
              <p className="text-white/70 text-sm mb-10 leading-relaxed">
                We're here to help you plan the perfect stay. Reach us anytime via phone or WhatsApp.
              </p>

              <ul className="space-y-7">
                {INFO_ITEMS.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-[10px] uppercase tracking-widest font-semibold mb-0.5">{label}</p>
                      <p className="text-white font-medium text-sm">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp quick action */}
            <div className="mt-12">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cta-whatsapp-btn"
                className="flex items-center justify-center gap-3 w-full bg-white text-[#A8852A] font-bold py-3.5 rounded-full text-sm uppercase tracking-widest transition-all duration-300 hover:bg-white/90 hover:-translate-y-0.5 shadow-[0_6px_20px_rgba(0,0,0,0.2)]"
              >
                <WA_SVG />
                Chat on WhatsApp
              </a>
              <p className="text-white/50 text-xs text-center mt-3">Typically responds within 5 minutes</p>
            </div>
          </div>

          {/* RIGHT — Booking Form */}
          <div className="lg:col-span-3 bg-[#F9F8F6] p-10 md:p-12">
            <p className="font-playfair text-2xl font-bold text-[#0F172A] mb-1">
              Send Booking Request
            </p>
            <p className="text-[#6B7280] text-sm mb-8">
              Fill in your details and we'll confirm via WhatsApp.
            </p>

            <form onSubmit={handleSubmit} data-testid="contact-form" className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="sm:col-span-1">
                  <Label>Full Name</Label>
                  <div className="relative">
                    <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                    <input
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      data-testid="contact-name-input"
                      className={`${FIELD_CLASS} pl-10`}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="sm:col-span-1">
                  <Label>Phone Number</Label>
                  <div className="relative">
                    <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      data-testid="contact-phone-input"
                      className={`${FIELD_CLASS} pl-10`}
                    />
                  </div>
                </div>

                {/* Check-in */}
                <div>
                  <Label>Check-in Date</Label>
                  <div className="relative">
                    <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                    <input
                      name="checkin"
                      type="date"
                      required
                      value={form.checkin}
                      onChange={handleChange}
                      data-testid="contact-checkin-input"
                      className={`${FIELD_CLASS} pl-10`}
                    />
                  </div>
                </div>

                {/* Check-out */}
                <div>
                  <Label>Check-out Date</Label>
                  <div className="relative">
                    <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                    <input
                      name="checkout"
                      type="date"
                      required
                      value={form.checkout}
                      onChange={handleChange}
                      data-testid="contact-checkout-input"
                      className={`${FIELD_CLASS} pl-10`}
                    />
                  </div>
                </div>

                {/* Room Type */}
                <div className="sm:col-span-2">
                  <Label>Room Type</Label>
                  <div className="relative">
                    <select
                      name="room"
                      value={form.room}
                      onChange={handleChange}
                      data-testid="contact-room-select"
                      className={`${FIELD_CLASS} appearance-none cursor-pointer`}
                    >
                      <option value="">Select a room type</option>
                      <option value="Deluxe Room (₹1,500/night)">Deluxe Room — ₹1,500 / night</option>
                      <option value="Super Deluxe Room (₹2,500/night)">Super Deluxe Room — ₹2,500 / night</option>
                      <option value="Family Room (₹4,000/night)">Family Room — ₹4,000 / night</option>
                    </select>
                    <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                  </div>
                </div>

                {/* Special Requests */}
                <div className="sm:col-span-2">
                  <Label>Special Requests <span className="text-[#9CA3AF] normal-case tracking-normal font-normal">(optional)</span></Label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Any special requirements, preferences, or questions..."
                    value={form.message}
                    onChange={handleChange}
                    data-testid="contact-message-input"
                    className={`${FIELD_CLASS} resize-none`}
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                data-testid="contact-submit-btn"
                className="w-full flex items-center justify-center gap-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold py-4 rounded-sm transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(15,23,42,0.3)] mt-1"
              >
                <MessageCircle size={16} className="flex-shrink-0" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.12em] sm:tracking-widest">
                  Send Booking Request via WhatsApp
                </span>
              </button>
              <p className="text-center text-[#9CA3AF] text-xs mt-2">
                Your details will be sent securely via WhatsApp
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
