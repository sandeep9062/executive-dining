import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";
import { Calendar, Clock, Users, Info, ShieldCheck } from "lucide-react";

const ReservationPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    requests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Reservation request received. Our concierge will contact you shortly.",
    );
    setForm({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      guests: "2",
      requests: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-24 selection:bg-primary selection:text-black">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 border border-primary/30 rounded-full font-body text-[10px] font-bold uppercase tracking-[0.3em] text-primary bg-primary/5">
            Availability is Limited
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-white leading-tight mb-6">
            Secure Your{" "}
            <span className="italic font-light text-primary/90">Table.</span>
          </h1>
          <p className="font-body text-sm text-muted-foreground uppercase tracking-widest opacity-70">
            Please allow 24 hours for online booking confirmation.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Form Side (Span 7) */}
          <div className="lg:col-span-7">
            <AnimatedSection variant="fade-up" delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Personal Details Group */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-primary mb-2">
                    <span className="text-[10px] font-bold border border-primary/40 rounded-full w-5 h-5 flex items-center justify-center">
                      1
                    </span>
                    <h2 className="font-heading text-sm uppercase tracking-[0.2em] font-bold">
                      Personal Details
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="peer w-full bg-transparent border-b border-white/10 py-3 font-body text-sm text-white focus:outline-none focus:border-primary transition-all placeholder-transparent"
                        placeholder="Full Name"
                      />
                      <label className="absolute left-0 -top-3.5 text-muted-foreground text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-[10px]">
                        Full Name
                      </label>
                    </div>

                    <div className="relative group">
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="peer w-full bg-transparent border-b border-white/10 py-3 font-body text-sm text-white focus:outline-none focus:border-primary transition-all placeholder-transparent"
                        placeholder="Phone"
                      />
                      <label className="absolute left-0 -top-3.5 text-muted-foreground text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-[10px]">
                        Phone Number
                      </label>
                    </div>
                  </div>

                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="peer w-full bg-transparent border-b border-white/10 py-3 font-body text-sm text-white focus:outline-none focus:border-primary transition-all placeholder-transparent"
                      placeholder="Email"
                    />
                    <label className="absolute left-0 -top-3.5 text-muted-foreground text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-[10px]">
                      Email Address
                    </label>
                  </div>
                </div>

                {/* Logistics Group */}
                <div className="space-y-6 pt-6">
                  <div className="flex items-center gap-3 text-primary mb-2">
                    <span className="text-[10px] font-bold border border-primary/40 rounded-full w-5 h-5 flex items-center justify-center">
                      2
                    </span>
                    <h2 className="font-heading text-sm uppercase tracking-[0.2em] font-bold">
                      Booking Logistics
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-muted-foreground text-[10px] uppercase tracking-widest flex items-center gap-2">
                        <Calendar size={12} /> Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={form.date}
                        onChange={handleChange}
                        className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:border-primary outline-none transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-muted-foreground text-[10px] uppercase tracking-widest flex items-center gap-2">
                        <Clock size={12} /> Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        required
                        value={form.time}
                        onChange={handleChange}
                        className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:border-primary outline-none transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-muted-foreground text-[10px] uppercase tracking-widest flex items-center gap-2">
                        <Users size={12} /> Party
                      </label>
                      <select
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:border-primary outline-none transition-all appearance-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n} className="bg-[#111]">
                            {n} {n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                        <option value="9+" className="bg-[#111]">
                          9+ (Private)
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="relative pt-4">
                  <textarea
                    name="requests"
                    value={form.requests}
                    onChange={handleChange}
                    rows={2}
                    className="peer w-full bg-transparent border-b border-white/10 py-3 font-body text-sm text-white focus:outline-none focus:border-primary transition-all placeholder-transparent resize-none"
                    placeholder="Requests"
                  />
                  <label className="absolute left-0 -top-1 text-muted-foreground text-[10px] uppercase tracking-widest">
                    Special Accommodations
                  </label>
                </div>

                <button
                  type="submit"
                  className="group relative w-full overflow-hidden border border-primary bg-primary py-5 font-body text-xs font-bold uppercase tracking-[0.3em] text-black transition-all hover:bg-transparent hover:text-primary"
                >
                  <span className="relative z-10">Confirm Request</span>
                </button>
              </form>
            </AnimatedSection>
          </div>

          {/* Info Side (Span 5) */}
          <div className="lg:col-span-5">
            <AnimatedSection
              variant="slide-left"
              delay={0.3}
              className="space-y-8 lg:pl-12 lg:border-l border-white/5"
            >
              <div className="bg-white/[0.02] border border-white/5 p-8 space-y-6">
                <h3 className="font-heading text-xl font-semibold text-white">
                  Guest Information
                </h3>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Info size={18} className="text-primary shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                        Dress Code
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Smart elegant. We kindly request guests refrain from
                        wearing sportswear or open-toed shoes.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <ShieldCheck size={18} className="text-primary shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                        Cancellation Policy
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Cancellations must be made 24 hours in advance to avoid
                        a fee of £50 per person.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <p className="text-[10px] text-muted-foreground italic leading-relaxed">
                    By submitting this request, you agree to our terms of
                    service and privacy policy. A credit card may be required to
                    secure your booking after initial review.
                  </p>
                </div>
              </div>

              {/* Contact Quick Link */}
              <div className="text-center lg:text-left px-4">
                <p className="text-xs text-muted-foreground mb-2">
                  Need immediate assistance?
                </p>
                <a
                  href="tel:+442079460958"
                  className="font-heading text-lg font-bold text-white hover:text-primary transition-colors"
                >
                  +44 20 7946 0958
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReservationPage;
