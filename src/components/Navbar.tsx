import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "Reservations", path: "/reservations" },
  { label: "About & Gallery", path: "/about" },
];

const authItems = [{ label: "Sign In", path: "/signin" }];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-8">
        {/* Brand Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="h-8 w-[2px] bg-primary transition-transform group-hover:scale-y-125" />
          <span className="font-heading text-xl font-bold tracking-[0.2em] text-foreground transition-colors group-hover:text-primary">
            EXECUTIVE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path} className="relative group">
                  <Link
                    to={item.path}
                    className={`font-body text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {/* Active Underline Animation */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-primary"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <ul className="flex items-center gap-4">
            {authItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="font-body text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/reservations"
            className="relative overflow-hidden border border-primary/50 px-8 py-2.5 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-black"
          >
            Book a Table
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground transition-colors hover:text-primary"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 right-0 top-full h-screen bg-background/95 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col items-center justify-center gap-8 pt-20">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-heading text-2xl font-light tracking-widest ${
                      location.pathname === item.path
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              {authItems.map((item, i) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-2xl font-light tracking-widest text-foreground"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-10"
              >
                <Link
                  to="/reservations"
                  onClick={() => setIsOpen(false)}
                  className="gold-gradient px-12 py-4 font-body text-xs font-bold uppercase tracking-widest text-black"
                >
                  Reserve Now
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
