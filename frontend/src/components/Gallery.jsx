import { useScrollReveal } from "../hooks/useScrollReveal";
import { IMAGES } from "../constants";

const GALLERY_ITEMS = [
  { src: IMAGES.deluxe, alt: "Deluxe Room – Warm Wooden Interiors", span: "md:col-span-1 md:row-span-2" },
  { src: IMAGES.superDeluxe, alt: "Super Deluxe Room – Mirror Panel Design", span: "md:col-span-1" },
  { src: IMAGES.bathroom, alt: "Premium Black Marble Bathroom", span: "md:col-span-1" },
  { src: IMAGES.lobby, alt: "Elegant Hotel Lobby", span: "md:col-span-2" },
];

export default function Gallery() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="gallery" data-testid="gallery-section" className="py-24 md:py-32 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 reveal ${isVisible ? "is-visible" : ""}`}
        >
          <p className="section-overline mb-4">Visual Journey</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Gallery
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-[#57534E] text-lg max-w-xl mx-auto">
            A glimpse into the premium spaces and experiences that await you.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 [&>div]:h-64 md:[&>div]:h-auto" style={{gridTemplateRows: "280px 280px"}}>
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`gallery-item overflow-hidden relative group cursor-pointer shadow-lg ${item.span}`}
              data-testid={`gallery-item-${i}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#0F172A]/0 group-hover:bg-[#0F172A]/40 transition-all duration-500 flex items-end p-5">
                <p className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400">
                  {item.alt}
                </p>
              </div>
              {/* Gold corner accent */}
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
