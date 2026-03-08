import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { User, Mail, Lock, UserPlus, ArrowRight } from "lucide-react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      toast({
        title: "Welcome to Executive",
        description: "Your membership has been created.",
      });
      navigate("/sign-in");
    } catch (error) {
      toast({ title: "Registration Failed", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#050505] selection:bg-primary selection:text-black">
      {/* Left Side: Brand Story (Visible on Large Screens) */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 border-r border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
            alt="Bar Detail"
            className="h-full w-full object-cover opacity-30 scale-110 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/20 to-[#050505]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <span className="font-heading text-xl font-bold tracking-[0.3em] text-white uppercase">
            Executive
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-10"
        >
          <h2 className="font-heading text-5xl font-bold text-white mb-6 leading-tight">
            The journey to <br />
            <span className="italic font-light text-primary">
              refined taste
            </span>{" "}
            begins.
          </h2>
          <p className="font-body text-sm text-muted-foreground tracking-widest uppercase max-w-sm">
            Join our inner circle for priority reservations and exclusive chef's
            table invites.
          </p>
        </motion.div>
      </div>

      {/* Right Side: Registration Form */}
      <div className="flex items-center justify-center p-6 md:p-12 lg:p-24 bg-[#080808]">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md space-y-10"
        >
          <div className="space-y-2">
            <h1 className="font-heading text-3xl font-bold text-white tracking-tight">
              Create Membership
            </h1>
            <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">
              Please provide your details below
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-4">
              {/* Full Name */}
              <div className="space-y-2">
                <Label className="text-[10px] uppercase tracking-[0.2em] text-primary/70">
                  Full Name
                </Label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20"
                    size={14}
                  />
                  <Input
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/[0.03] border-white/10 pl-10 h-12 text-sm focus:border-primary transition-all rounded-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label className="text-[10px] uppercase tracking-[0.2em] text-primary/70">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20"
                    size={14}
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/[0.03] border-white/10 pl-10 h-12 text-sm focus:border-primary transition-all rounded-sm"
                  />
                </div>
              </div>

              {/* Password Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-[0.2em] text-primary/70">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20"
                      size={14}
                    />
                    <Input
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="bg-white/[0.03] border-white/10 pl-10 h-12 text-sm focus:border-primary transition-all rounded-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-[0.2em] text-primary/70">
                    Confirm
                  </Label>
                  <div className="relative">
                    <Lock
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20"
                      size={14}
                    />
                    <Input
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="bg-white/[0.03] border-white/10 pl-10 h-12 text-sm focus:border-primary transition-all rounded-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-[0.2em] text-[11px] rounded-sm group transition-all"
            >
              {isLoading ? (
                "Processing..."
              ) : (
                <span className="flex items-center gap-2">
                  Complete Registration{" "}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              )}
            </Button>
          </form>

          <div className="pt-6 border-t border-white/5 text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Already part of the tradition?{" "}
              <Link
                to="/signin"
                className="text-primary hover:text-white transition-colors ml-1 font-bold"
              >
                Sign In
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
