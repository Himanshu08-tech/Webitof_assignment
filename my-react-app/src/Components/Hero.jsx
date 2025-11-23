import React from "react";
import Services from "./Services";
import Why from "./Why"; // <-- Add this import

export default function Hero() {
  return (
    <>
      <section
        className="relative w-full h-[80vh] md:h-screen overflow-hidden"
        id="home"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Soft vertical gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/40" />

        {/* Decorative curves */}
        <div className="pointer-events-none absolute -bottom-16 left-4 md:left-16 h-40 w-40 border-l-4 border-white/40 rounded-full opacity-70 -rotate-12" />
        <div className="pointer-events-none absolute -bottom-16 right-4 md:right-16 h-40 w-40 border-r-4 border-white/40 rounded-full opacity-70 rotate-12" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <p className="text-white/90 text-2xl sm:text-3xl md:text-4xl font-light italic tracking-wide">
            Find Your Dream Hotel!
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.7)]">
            Find Your Dream Hotel &amp; Resort
          </h1>
        </div>
      </section>

      {/* Other Sections */}
      <Services />
      <Why />
      
    </>
  );
}
