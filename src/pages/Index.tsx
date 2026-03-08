import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { MoveRight, ArrowDown } from "lucide-react";

import heroImg from "@/assets/hero-restaurant.jpg";

import dish1 from "@/assets/dish-1.jpg";

import dish2 from "@/assets/dish-2.jpg";

import dish3 from "@/assets/dish-3.jpg";
import HeroSection from "@/components/HeroSection";

const specialties = [
  {
    name: "Seared Scottish Salmon",
    desc: "With seasonal microgreens, edible flowers & yuzu beurre blanc",
    image: dish1,
  },

  {
    name: "Wagyu Beef Tenderloin",
    desc: "Black truffle jus, pomme purée & roasted root vegetables",
    image: dish2,
  },

  {
    name: "Chocolate Opéra",
    desc: "24-karat gold leaf, hazelnut praline & single-origin ganache",
    image: dish3,
  },
];

const Index = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for the hero image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main ref={containerRef} className="bg-[#050505]">
      {/* --- Cinematic Hero Section --- */}

      <HeroSection />

      {/* --- Chef's Specialties: The Editorial Grid --- */}
      <section className="relative z-10 -mt-20 bg-transparent pb-32">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Section Header Sidebar */}
            <div className="lg:col-span-4 self-start lg:sticky lg:top-32">
              <AnimatedSection variant="fade-up">
                <p className="font-body text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4">
                  Le Menu
                </p>
                <h2 className="font-heading text-4xl font-bold text-white md:text-5xl mb-6">
                  Signature <br /> Creations
                </h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8 pr-12">
                  Each dish is a testament to our philosophy of precision,
                  sourcing only the most exceptional ingredients from local
                  artisans.
                </p>
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-3 font-body text-[10px] font-bold uppercase tracking-widest text-primary hover:gap-5 transition-all"
                >
                  Discover Full Menu <MoveRight size={14} />
                </Link>
              </AnimatedSection>
            </div>

            {/* Specialties Column */}
            <div className="lg:col-span-8 space-y-24">
              {specialties.map((item, i) => (
                <AnimatedSection
                  key={item.name}
                  delay={i * 0.1}
                  variant="fade-up"
                  className="group"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                    </div>
                    <div className="space-y-4">
                      <span className="font-body text-[10px] text-primary tracking-[0.2em]">
                        0{i + 1}
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <div className="h-[1px] w-12 bg-primary/30 group-hover:w-full transition-all duration-700" />
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Call to Action Section --- */}
      <section className="py-40 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-7xl font-bold text-white mb-12 italic">
              Experience the Art <br /> of the Meal.
            </h2>
            <Link
              to="/reservations"
              className="gold-gradient px-16 py-5 font-body text-xs font-bold uppercase tracking-widest text-black hover:scale-105 transition-transform inline-block"
            >
              Request a Reservation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Index;
