import { Wifi, Tv, Wind, MessageCircle } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { IMAGES, WHATSAPP_NUMBER } from "../constants";

const AMENITY_ICON = ({ icon: Icon }) => (
  <span className="flex items-center gap-1 text-[#57534E] text-xs font-medium">
    <Icon size={13} className="text-[#D4AF37]" />
  </span>
);

const ROOMS = [
  {
    name: "Deluxe Room",
    price: "₹1,500",
    priceNote: "per night",
    image: IMAGES.deluxe,
    description: "Cozy and elegantly designed room with premium wooden interiors and gold accents.",
    amenities: ["AC", "Free WiFi", "Smart TV", "24/7 Hot Water"],
    waMsg: "Hi%2C%20I%20want%20to%20enquire%20about%20the%20Deluxe%20Room%20at%20Hotel%20Paradise%20Inn",
    badge: "Best Value",
  },
  {
    name: "Super Deluxe Room",
    price: "₹2,500",
    priceNote: "per night",
    image: IMAGES.superDeluxe,
    description: "Stunning room with dramatic mirror panels and rich leather textures for a bold luxury feel.",
    amenities: ["AC", "Free WiFi", "Smart TV", "Mini Fridge"],
    waMsg: "Hi%2C%20I%20want%20to%20enquire%20about%20the%20Super%20Deluxe%20Room%20at%20Hotel%20Paradise%20Inn",
    badge: "Most Popular",
  },
  {
    name: "Family Room",
    price: "₹4,000",
    priceNote: "per night",
    image: IMAGES.lobby,
    description: "Spacious premium suite perfect for families — generous space, warm ambiance, and full comfort.",
    amenities: ["AC", "Free WiFi", "Smart TV", "Extra Beds Available"],
    waMsg: "Hi%2C%20I%20want%20to%20enquire%20about%20the%20Family%20Room%20at%20Hotel%20Paradise%20Inn",
    badge: "Family Special",
  },
];

function RoomCard({ room, index, isVisible }) {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${room.waMsg}`;
  return (
    <div
      className={`room-card bg-white overflow-hidden border-b-4 border-[#D4AF37] shadow-md reveal reveal-delay-${index + 1} ${isVisible ? "is-visible" : ""}`}
      data-testid={`room-card-${index}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={room.image}
          alt={room.name}
          className="room-img w-full h-full object-cover"
          loading="lazy"
        />
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-[#0F172A]/90 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-[#D4AF37] font-bold text-lg font-playfair">{room.price}</span>
          <span className="text-white/60 text-xs ml-1">{room.priceNote}</span>
        </div>
        {/* Label Badge */}
        <div className="absolute top-4 left-4 bg-[#D4AF37] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {room.badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-playfair text-2xl font-semibold text-[#0F172A] mb-2">{room.name}</h3>
        <p className="text-[#57534E] text-sm leading-relaxed mb-4">{room.description}</p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-5">
          {room.amenities.map((a) => (
            <span
              key={a}
              className="text-xs bg-[#F5F5F4] text-[#57534E] px-3 py-1 rounded-full border border-[#E7E5E4] font-medium"
            >
              {a}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`room-enquire-btn-${index}`}
          className="flex items-center justify-center gap-2 w-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
        >
          <MessageCircle size={16} />
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function Rooms() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="rooms" data-testid="rooms-section" className="py-24 md:py-32 bg-[#F5F5F4]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 reveal ${isVisible ? "is-visible" : ""}`}
        >
          <p className="section-overline mb-4">Accommodations</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Our Rooms &amp; Suites
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-[#57534E] text-lg max-w-xl mx-auto">
            Thoughtfully curated spaces — each room a unique experience in luxury and comfort.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROOMS.map((room, i) => (
            <RoomCard key={i} room={room} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
