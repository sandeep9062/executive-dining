import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0a] pt-20 pb-10">
      {/* Decorative Gradient Flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Column 1: Brand & Philosophy (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block group">
              <h3 className="font-heading text-2xl font-bold tracking-[0.3em] text-foreground transition-colors group-hover:text-primary">
                EXECUTIVE
              </h3>
              <div className="h-[1px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </Link>
            <p className="font-body text-sm leading-relaxed text-muted-foreground/80 max-w-sm">
              An immersive culinary sanctuary where heritage meets modern
              sophistication. Join us for an evening of unparalleled gastronomy
              and refined atmosphere.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="p-2 border border-white/10 rounded-full hover:border-primary hover:text-primary transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 border border-white/10 rounded-full hover:border-primary hover:text-primary transition-all"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-8">
              Navigation
            </h4>
            <ul className="space-y-4 font-body text-sm">
              {[
                { label: "The Experience", path: "/about" },
                { label: "Seasonal Menu", path: "/menu" },
                { label: "Private Dining", path: "/reservations" },
                { label: "Gift Vouchers", path: "/" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-8">
              Contact
            </h4>
            <ul className="space-y-5 text-sm font-body">
              <li className="flex gap-4 group">
                <MapPin
                  size={18}
                  className="text-primary shrink-0 transition-transform group-hover:-translate-y-1"
                />
                <span className="text-muted-foreground">
                  123 Prestige Avenue, Mayfair,
                  <br /> London W1K 5QJ
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone
                  size={18}
                  className="text-primary shrink-0 transition-transform group-hover:rotate-12"
                />
                <span className="text-muted-foreground">+44 20 7946 0958</span>
              </li>
              <li className="flex items-start gap-4">
                <Clock size={18} className="text-primary shrink-0" />
                <div className="text-muted-foreground leading-tight">
                  <p>Tue – Sat: 18:00 – 23:00</p>
                  <p className="mt-2 text-[10px] uppercase opacity-60">
                    Closed Sundays & Mondays
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-8">
              The Journal
            </h4>
            <p className="text-xs text-muted-foreground mb-4">
              Join our inner circle for seasonal updates.
            </p>
            <div className="flex border-b border-white/20 pb-2 transition-focus-within:border-primary">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-none outline-none text-sm w-full font-body placeholder:text-white/20"
              />
              <button className="text-[10px] uppercase tracking-widest font-bold hover:text-primary transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <div className="flex flex-col md:flex-row items-center gap-6 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
            <p>© {new Date().getFullYear()} Executive Group</p>
            <Link to="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-all"
            >
              Back to top <ArrowUp size={14} />
            </button>
            <div className="h-4 w-[1px] bg-white/10" />
            <button className="flex items-center gap-2 rounded-full border border-white/5 px-4 py-2 font-body text-[10px] uppercase tracking-widest text-muted-foreground hover:bg-white/5 transition-all">
              Staff Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
