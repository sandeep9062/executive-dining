const categories = [
  "Appetizers",
  "Mains",
  "Sides",
  "Desserts",
  "Wine List",
] as const;

type Category = (typeof categories)[number];

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

const menuData: Record<Category, MenuItem[]> = {
  Appetizers: [
    {
      name: "Oysters Rockefeller",
      description:
        "Half dozen East Coast oysters, spinach gratin, Pernod cream",
      price: "£24",
    },
    {
      name: "Tuna Tartare",
      description:
        "Yellowfin tuna, avocado mousse, sesame tuile, ponzu dressing",
      price: "£22",
    },
    {
      name: "Foie Gras Terrine",
      description: "Duck liver, Sauternes jelly, brioche toast, fig compote",
      price: "£28",
    },
    {
      name: "Burrata Caprese",
      description:
        "Pugliese burrata, heritage tomatoes, basil oil, aged balsamic",
      price: "£19",
    },
  ],
  Mains: [
    {
      name: "Wagyu Beef Tenderloin",
      description: "8oz Australian wagyu, black truffle jus, pomme purée",
      price: "£68",
    },
    {
      name: "Dover Sole Meunière",
      description: "Whole Dover sole, brown butter, capers, lemon, parsley",
      price: "£52",
    },
    {
      name: "Rack of Lamb",
      description: "Herb-crusted New Zealand lamb, ratatouille, rosemary jus",
      price: "£48",
    },
    {
      name: "Lobster Thermidor",
      description: "Whole Maine lobster, cognac cream, gruyère, saffron rice",
      price: "£62",
    },
    {
      name: "Duck Confit",
      description: "Gressingham duck leg, lentils du Puy, cherry gastrique",
      price: "£42",
    },
  ],
  Sides: [
    {
      name: "Truffle Fries",
      description: "Hand-cut fries, Parmesan, truffle oil, chive",
      price: "£12",
    },
    {
      name: "Grilled Asparagus",
      description: "Charred green asparagus, hollandaise, shaved Parmesan",
      price: "£11",
    },
    {
      name: "Creamed Spinach",
      description: "Baby spinach, nutmeg béchamel, toasted pine nuts",
      price: "£10",
    },
    {
      name: "Pomme Purée",
      description: "Butter-rich mashed potatoes, sea salt, chive oil",
      price: "£9",
    },
  ],
  Desserts: [
    {
      name: "Chocolate Opéra",
      description:
        "24-karat gold leaf, hazelnut praline, single-origin ganache",
      price: "£18",
    },
    {
      name: "Crème Brûlée",
      description: "Madagascar vanilla custard, caramelised sugar, shortbread",
      price: "£14",
    },
    {
      name: "Tarte Tatin",
      description: "Caramelised apple, puff pastry, Calvados crème fraîche",
      price: "£16",
    },
    {
      name: "Cheese Selection",
      description:
        "Five artisan cheeses, quince paste, oat crackers, honeycomb",
      price: "£22",
    },
  ],
  "Wine List": [
    {
      name: "Château Margaux 2015",
      description: "Bordeaux, France — Full-bodied, complex, silky tannins",
      price: "£320",
    },
    {
      name: "Cloudy Bay Sauvignon Blanc",
      description: "Marlborough, NZ — Crisp, citrus, tropical notes",
      price: "£58",
    },
    {
      name: "Barolo Riserva 2016",
      description: "Piedmont, Italy — Bold, earthy, dried roses & tar",
      price: "£145",
    },
    {
      name: "Dom Pérignon 2012",
      description: "Champagne, France — Elegant, toasty, fine mousse",
      price: "£280",
    },
    {
      name: "Sancerre Blanc 2021",
      description: "Loire Valley, France — Mineral, flinty, crisp acidity",
      price: "£62",
    },
  ],
};

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  MoveRight,
  Wine,
  UtensilsCrossed,
  Dessert,
  Carrot,
  Sparkles,
  ChefHat,
} from "lucide-react";

// Icons for categories
const categoryIcons: Record<string, React.ReactNode> = {
  Appetizers: <UtensilsCrossed size={14} />,
  Mains: <ChefHat size={14} />,
  Sides: <Carrot size={14} />,
  Desserts: <Dessert size={14} />,
  "Wine List": <Wine size={14} />,
};

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState<Category>("Appetizers");

  return (
    <main className="min-h-screen bg-[#030303] pt-32 pb-24 selection:bg-primary selection:text-black">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* --- Dynamic Header --- */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-24">
          <div className="lg:col-span-8">
            <AnimatedSection variant="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-primary/50" />
                <span className="font-body text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                  The Gastronomy Collection
                </span>
              </div>
              <h1 className="font-heading text-6xl md:text-9xl font-bold tracking-tighter text-white leading-[0.85]">
                Seasonal <br />
                <span className="italic font-light text-primary/90">
                  Curations.
                </span>
              </h1>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <AnimatedSection delay={0.2}>
              <div className="border-l border-white/10 pl-6">
                <p className="font-body text-[11px] text-muted-foreground uppercase tracking-widest leading-relaxed mb-4">
                  Experience a symphony of flavors curated by Executive Chef
                  Laurent Marchand.
                </p>
                <div className="flex items-center gap-2 text-primary font-body text-[10px] font-bold tracking-widest uppercase">
                  <Sparkles size={12} /> Kitchen opens at 18:00
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* --- Navigation - The "Floating" Sidebar --- */}
          <aside className="lg:col-span-3">
            <nav className="flex lg:flex-col flex-wrap gap-2 sticky top-32">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`relative group flex items-center justify-between w-full p-4 rounded-sm transition-all duration-500 overflow-hidden ${
                    activeTab === cat
                      ? "bg-white/[0.03] shadow-2xl"
                      : "hover:bg-white/[0.01]"
                  }`}
                >
                  <div className="flex flex-col items-start z-10">
                    <span
                      className={`font-body text-[9px] font-bold uppercase tracking-[0.2em] mb-1 transition-colors ${
                        activeTab === cat ? "text-primary" : "text-white/20"
                      }`}
                    >
                      {cat === "Wine List" ? "The Cellar" : "Collection"}
                    </span>
                    <span
                      className={`font-heading text-lg md:text-xl font-medium tracking-tight transition-all duration-500 ${
                        activeTab === cat
                          ? "text-white translate-x-2"
                          : "text-muted-foreground"
                      }`}
                    >
                      {cat}
                    </span>
                  </div>
                  <div
                    className={`transition-all duration-500 ${activeTab === cat ? "text-primary opacity-100 rotate-0" : "opacity-0 -rotate-45"}`}
                  >
                    {categoryIcons[cat]}
                  </div>
                  {/* Active Indicator Bar */}
                  {activeTab === cat && (
                    <motion.div
                      layoutId="menu-active-bar"
                      className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                    />
                  )}
                </button>
              ))}
            </nav>
          </aside>

          {/* --- The Menu Canvas --- */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
              >
                {menuData[activeTab].map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="group relative flex flex-col"
                  >
                    <div className="flex items-baseline justify-between mb-3">
                      <h3 className="font-heading text-xl font-bold text-white group-hover:text-primary transition-colors duration-500 tracking-tight">
                        {item.name}
                      </h3>
                      <div className="flex-1 mx-4 h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent self-center translate-y-[2px]" />
                      <span className="font-heading text-lg font-medium text-primary/80 tracking-tighter">
                        {item.price}
                      </span>
                    </div>

                    <p className="font-body text-[13px] text-muted-foreground leading-relaxed italic opacity-70 group-hover:opacity-100 transition-all duration-500 max-w-[90%]">
                      {item.description}
                    </p>

                    {/* Reveal Decoration */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      className="absolute -bottom-4 left-0 right-0 h-[1px] bg-gradient-to-r from-primary/30 to-transparent origin-left transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* --- Info Footnote --- */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-32 p-12 bg-white/[0.01] border border-white/5 rounded-sm text-center"
            >
              <p className="font-body text-[10px] text-muted-foreground uppercase tracking-[0.4em] mb-4">
                Executive Notes
              </p>
              <p className="text-xs font-body text-white/40 leading-loose italic max-w-xl mx-auto">
                "Our ingredients are selected at the peak of their season. Our
                Wagyu is sourced from the Jack's Creek family in Australia, and
                our oysters are delivered daily from the Mersea Island beds."
              </p>
              <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-8 text-[9px] uppercase tracking-widest text-primary/60">
                <span>Service Charge 12.5%</span>
                <span className="h-1 w-1 bg-white/20 rounded-full hidden md:block" />
                <span>Allergens Info Available</span>
                <span className="h-1 w-1 bg-white/20 rounded-full hidden md:block" />
                <span>VAT Included</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MenuPage;
