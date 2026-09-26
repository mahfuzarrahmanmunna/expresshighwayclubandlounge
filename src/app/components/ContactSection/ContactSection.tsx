"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section className="relative z-10 w-full bg-[#F7F5F0] py-24 md:py-32 overflow-hidden">
      
      {/* --- Background Atmosphere --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Sunlight from Top Right */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[radial-gradient(circle_at_80%_0%,_rgba(216,195,154,0.12),transparent_35%)]" />
        {/* Giant Ghost Typography */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[16rem] sm:text-[24rem] md:text-[32rem] text-[#0B0B0D] whitespace-nowrap pointer-events-none select-none leading-none opacity-[0.025]">
          INQUIRE
        </span>
        {/* Fine Grain Texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* ==========================================
              LEFT COLUMN: Editorial & Contact Info
              ========================================== */}
          <div className="flex flex-col justify-between md:pr-12 md:border-r md:border-[#0B0B0D]/10">
            
            <div className="flex flex-col gap-8 mb-16 md:mb-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: smoothEase }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 md:w-16 h-px bg-[#C5A059]" />
                  <span className="text-[#987D3E] text-[10px] md:text-xs tracking-[0.4em] uppercase font-light whitespace-nowrap">
                    07 — Contact
                  </span>
                </div>
                
                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#0B0B0D] leading-[0.9] tracking-[-0.02em] font-normal">
                  An Invitation <br/>
                  <span className="italic font-extralight text-[#0B0B0D]/60">Awaits.</span>
                </h2>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: smoothEase, delay: 0.1 }}
                className="text-[#0B0B0D]/50 text-sm md:text-base font-light leading-[1.9] tracking-wide max-w-md"
              >
                Connect with our membership concierge to discover how the Express Highway Club can elevate your journey. We are available around the clock to assist you.
              </motion.p>
            </div>

            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: smoothEase, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[#987D3E] text-[9px] tracking-[0.3em] uppercase font-light">Visit</span>
                <p className="text-[#0B0B0D] text-sm md:text-base font-light tracking-wide">Express Highway, Mile Marker 42</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[#987D3E] text-[9px] tracking-[0.3em] uppercase font-light">Email</span>
                <p className="text-[#0B0B0D] text-sm md:text-base font-light tracking-wide">concierge@expresshighwayclub.com</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[#987D3E] text-[9px] tracking-[0.3em] uppercase font-light">Call</span>
                <p className="text-[#0B0B0D] text-sm md:text-base font-light tracking-wide">+1 (555) 123-4567</p>
              </div>
            </motion.div>

          </div>

          {/* ==========================================
              RIGHT COLUMN: Minimalist Form
              ========================================== */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: smoothEase, delay: 0.3 }}
            className="flex items-center"
          >
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10">
              
              {/* Input: Name */}
              <div className="relative flex flex-col gap-2">
                <span className="text-[#987D3E] text-[9px] tracking-[0.3em] uppercase font-light">Full Name</span>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-[#0B0B0D]/20 focus:border-[#C5A059] outline-none py-3 text-[#0B0B0D] text-lg font-light placeholder-[#0B0B0D]/30 transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Input: Email */}
              <div className="relative flex flex-col gap-2">
                <span className="text-[#987D3E] text-[9px] tracking-[0.3em] uppercase font-light">Email Address</span>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-[#0B0B0D]/20 focus:border-[#C5A059] outline-none py-3 text-[#0B0B0D] text-lg font-light placeholder-[#0B0B0D]/30 transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Input: Message */}
              <div className="relative flex flex-col gap-2">
                <span className="text-[#987D3E] text-[9px] tracking-[0.3em] uppercase font-light">Inquiry</span>
                <textarea
                  required
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-[#0B0B0D]/20 focus:border-[#C5A059] outline-none py-3 text-[#0B0B0D] text-lg font-light placeholder-[#0B0B0D]/30 transition-colors duration-300 resize-none"
                  placeholder="I would like to know more about membership..."
                />
              </div>

              {/* Submit Button */}
              <div className="mt-4 flex justify-end">
                <button 
                  type="submit" 
                  className="group relative overflow-hidden bg-[#C5A059] text-[#0B0B0D] px-12 py-4 text-[10px] tracking-[0.3em] uppercase font-medium transition-colors duration-500 hover:text-[#0B0B0D] border border-[#C5A059] disabled:opacity-70"
                  disabled={isSubmitted}
                >
                  <span className="relative z-10">
                    {isSubmitted ? "Message Sent" : "Send Inquiry"}
                  </span>
                  {/* Sweep Effect */}
                  <div className="absolute inset-0 bg-[#987D3E] translate-x-[-100%] transition-transform duration-500 ease-out group-hover:translate-x-0"></div>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

    </section>
  );
}