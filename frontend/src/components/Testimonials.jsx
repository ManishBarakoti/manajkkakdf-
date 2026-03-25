import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const STARS = (n) =>
  Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      size={14}
      className={i < n ? "text-[#D4AF37] fill-[#D4AF37]" : "text-gray-300"}
    />
  ));

const REVIEWS = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    rating: 5,
    review:
      "Absolutely loved our stay! The rooms are beautifully designed with a premium feel. Staff was very helpful and the WhatsApp booking was super convenient. Will definitely return!",
    date: "January 2025",
    initial: "R",
  },
  {
    name: "Priya Gupta",
    location: "Mumbai",
    rating: 5,
    review:
      "Amazing value for money. The rooms are clean, cozy, and feel luxurious. The black marble bathroom was stunning. Highly recommend for couples looking for a premium stay.",
    date: "December 2024",
    initial: "P",
  },
  {
    name: "Amit & Family",
    location: "Jaipur",
    rating: 5,
    review:
      "Perfect hotel for a family trip! Spacious rooms, wonderful ambiance, and the staff treated us like family. The lobby art work is beautiful. 10/10 experience!",
    date: "November 2024",
    initial: "A",
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section data-testid="testimonials-section" className="py-24 md:py-32 bg-[#F5F5F4]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 reveal ${isVisible ? "is-visible" : ""}`}
        >
          <p className="section-overline mb-4">Guest Reviews</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            What Our Guests Say
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-[#57534E] text-lg max-w-xl mx-auto">
            Real experiences from our cherished guests.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className={`bg-white p-8 border border-[#E7E5E4] hover:border-[#D4AF37]/40 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative reveal reveal-delay-${i + 1} ${isVisible ? "is-visible" : ""}`}
              data-testid={`review-card-${i}`}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-[#D4AF37]/20">
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">{STARS(review.rating)}</div>

              {/* Review text */}
              <p className="text-[#57534E] text-sm leading-relaxed mb-6 relative z-10">
                "{review.review}"
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-[#D4AF37]/40 to-transparent mb-5" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B5952F] flex items-center justify-center text-white font-bold font-playfair text-sm flex-shrink-0">
                  {review.initial}
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] text-sm">{review.name}</p>
                  <p className="text-[#57534E] text-xs">{review.location} &middot; {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
