import React from "react";

import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { MoveRight, ArrowDown } from "lucide-react";

import heroImg from "@/assets/hero-restaurant.jpg";
const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for the hero image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[110vh] w-full overflow-hidden flex items-center"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Executive Dining"
          className="h-full w-full object-cover scale-105 brightness-[0.4]"
        />
      </motion.div>

      <div className="container relative z-10 mx-auto px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-6 flex items-center gap-4 font-body text-[10px] font-bold uppercase tracking-[0.5em] text-primary/80">
              <span className="h-[1px] w-12 bg-primary/50" />
              Est. 2012 • London
            </span>

            <h1 className="font-heading text-6xl font-bold leading-[0.9] text-white md:text-8xl lg:text-9xl">
              REDEFINING <br />
              <span className="italic font-light text-primary/90 ml-12 md:ml-24">
                Excellence.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-8"
          >
            <Link
              to="/reservations"
              className="group relative flex items-center justify-center overflow-hidden border border-primary/50 px-12 py-5 font-body text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:border-primary"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                Secure a Table
              </span>
              <div className="absolute inset-0 z-0 translate-y-full bg-primary transition-transform duration-500 ease-out group-hover:translate-y-0" />
            </Link>

            <p className="max-w-xs font-body text-xs leading-relaxed tracking-wide text-muted-foreground uppercase opacity-80">
              A curated sensory journey through the finest seasonal ingredients.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary/40"
      >
        <ArrowDown size={20} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
