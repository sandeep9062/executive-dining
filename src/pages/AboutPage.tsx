import AnimatedSection from "@/components/AnimatedSection";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  {
    src: gallery1,
    alt: "Restaurant bar area",
    span: "md:col-span-2 md:row-span-2",
  },
  { src: gallery2, alt: "Private dining room", span: "" },
  { src: gallery3, alt: "Chef at work", span: "" },
  { src: gallery4, alt: "Wine cellar", span: "md:col-span-2" },
  { src: gallery5, alt: "Fresh oysters", span: "" },
  { src: gallery6, alt: "Outdoor terrace", span: "md:col-span-2" },
];

import { MoveRight, Wine, Utensils, Award } from "lucide-react";
// Assuming your images are imported as before

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 selection:bg-primary selection:text-black">
      <div className="container mx-auto px-6 lg:px-12">
        {/* --- Hero Section: Asymmetric & Bold --- */}
        <section className="grid lg:grid-cols-12 gap-12 items-end mb-32">
          <div className="lg:col-span-7">
            <AnimatedSection variant="fade-up">
              <span className="inline-block px-3 py-1 mb-6 border border-primary/30 rounded-full font-body text-[10px] font-bold uppercase tracking-[0.3em] text-primary bg-primary/5">
                Established 2012
              </span>
              <h1 className="font-heading text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                The Art of <br />
                <span className="italic font-light text-primary/90">
                  Fine Gastronomy.
                </span>
              </h1>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-5 pb-4">
            <AnimatedSection variant="slide-left" delay={0.2}>
              <p className="font-body text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-8">
                Nestled in the heart of Mayfair, Executive is a sanctuary where
                heritage meets modern sophistication. We don't just serve food;
                we curate moments that linger.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* --- Features: Subtle Icons & Refined Typography --- */}
        <div className="grid md:grid-cols-3 gap-12 mb-40 border-y border-white/5 py-16">
          {[
            {
              icon: <Utensils size={24} />,
              title: "Seasonal Origin",
              desc: "Ingredients sourced from local sustainable farms.",
            },
            {
              icon: <Wine size={24} />,
              title: "Curated Cellar",
              desc: "Over 400 rare vintages selected by our Sommelier.",
            },
            {
              icon: <Award size={24} />,
              title: "Michelin Standard",
              desc: "Commitment to excellence in every precise detail.",
            },
          ].map((feature, i) => (
            <AnimatedSection
              key={feature.title}
              delay={i * 0.1}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 text-primary/60 group-hover:text-primary transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 tracking-widest uppercase">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                {feature.desc}
              </p>
            </AnimatedSection>
          ))}
        </div>

        {/* --- Bento Grid Gallery: Modern Composition --- */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <AnimatedSection>
              <h2 className="font-heading text-4xl md:text-6xl font-bold">
                The Gallery
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <button className="group flex items-center gap-3 font-body text-xs font-bold uppercase tracking-widest text-primary">
                Follow @Executive{" "}
                <MoveRight
                  size={16}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
            {/* Featured Image - Large Square */}
            <AnimatedSection
              variant="scale-in"
              className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-sm"
            >
              <img
                src={gallery1}
                className="absolute inset-0 h-full w-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                alt="Bar"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex items-end">
                <p className="font-heading text-xl uppercase tracking-widest">
                  The Grand Bar
                </p>
              </div>
            </AnimatedSection>

            {/* Portraits / Vertical Sliders */}
            <AnimatedSection
              delay={0.1}
              className="md:col-span-1 md:row-span-2 rounded-sm overflow-hidden bg-zinc-900"
            >
              <img
                src={gallery2}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                alt="Private Dining"
              />
            </AnimatedSection>

            <AnimatedSection
              delay={0.2}
              className="md:col-span-1 rounded-sm overflow-hidden bg-zinc-900"
            >
              <img
                src={gallery3}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                alt="Chef"
              />
            </AnimatedSection>

            {/* Horizontal Detail */}
            <AnimatedSection
              delay={0.3}
              className="md:col-span-1 rounded-sm overflow-hidden bg-zinc-900"
            >
              <img
                src={gallery5}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                alt="Oysters"
              />
            </AnimatedSection>

            {/* Long Horizontal */}
            <AnimatedSection
              delay={0.4}
              className="md:col-span-2 rounded-sm overflow-hidden bg-zinc-900"
            >
              <img
                src={gallery4}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                alt="Cellar"
              />
            </AnimatedSection>
          </div>
        </section>

        {/* --- Signature CTA --- */}
        <AnimatedSection className="max-w-4xl mx-auto text-center border border-white/10 p-16 bg-white/[0.02] backdrop-blur-sm">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8 italic">
            "A table is the only place where we do not get bored during the
            first hour."
          </h2>
          <p className="font-body text-primary uppercase tracking-[0.4em] text-[10px] font-bold">
            — Laurent Marchand, Executive Chef
          </p>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default AboutPage;
