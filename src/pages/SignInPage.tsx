import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useToast } from "../components/ui/use-toast";
import { ArrowLeft, Lock, Mail } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (email === "user@example.com" && password === "password123") {
        toast({
          title: "Welcome back",
          description: "Access granted to the Executive Portal.",
        });
        navigate("/");
      } else {
        toast({ title: "Invalid credentials", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Error", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#050505] selection:bg-primary selection:text-black">
      {/* Left Side: Cinematic Visual (Hidden on Mobile) */}
      <div className="relative hidden lg:flex items-center justify-center overflow-hidden border-r border-white/5">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
            alt="Dining"
            className="h-full w-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />
        </div>

        <div className="relative z-10 p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl font-bold tracking-widest text-white mb-4 uppercase">
              Executive
            </h2>
            <div className="h-[1px] w-12 bg-primary mx-auto mb-6" />
            <p className="font-body text-sm text-muted-foreground tracking-[0.2em] uppercase max-w-xs mx-auto italic">
              "The table is a place of sanctuary."
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Side: Auth Form */}
      <div className="flex items-center justify-center p-8 md:p-16">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-sm space-y-8"
        >
          <div className="space-y-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft size={12} /> Back to site
            </Link>
            <h1 className="font-heading text-3xl font-bold text-white tracking-tight">
              Portal Access
            </h1>
            <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">
              Enter your credentials to manage reservations
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-[10px] uppercase tracking-widest text-primary/80"
                >
                  Email Address
                </Label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20"
                    size={16}
                  />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@executive.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/[0.03] border-white/10 pl-10 h-12 text-sm focus:border-primary transition-all rounded-sm placeholder:text-white/10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label
                    htmlFor="password"
                    className="text-[10px] uppercase tracking-widest text-primary/80"
                  >
                    Password
                  </Label>
                  <Link
                    to="/forgot-password"
                    size="sm"
                    className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary"
                  >
                    Forgot?
                  </Link>
                </div>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20"
                    size={16}
                  />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-white/[0.03] border-white/10 pl-10 h-12 text-sm focus:border-primary transition-all rounded-sm"
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-[0.2em] text-[11px] rounded-sm transition-transform active:scale-[0.98]"
            >
              {isLoading ? "Authenticating..." : "Establish Session"}
            </Button>
          </form>

          <p className="text-center text-[10px] uppercase tracking-widest text-muted-foreground pt-4">
            New to the circle?{" "}
            <Link
              to="/signup"
              className="text-primary hover:underline underline-offset-4 font-bold"
            >
              Register Account
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
