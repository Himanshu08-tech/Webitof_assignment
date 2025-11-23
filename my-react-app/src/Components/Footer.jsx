import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-slate-100 mt-16 pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==== TOP SECTION ==== */}
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl">
                🏝️
              </div>
              <div>
                <p className="text-lg font-semibold tracking-wide">
                  DreamStay Resorts
                </p>
                <p className="text-[12px] text-slate-300">
                  Find your dream hotel &amp; resort
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-300 max-w-md leading-relaxed">
              Hand-picked luxury stays, personalized itineraries aur hassle-free
              bookings – taaki aapka har vacation ek memorable story ban sake.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-sky-300 transition">Home</a></li>
              <li><a href="#" className="hover:text-sky-300 transition">Destinations</a></li>
              <li><a href="#" className="hover:text-sky-300 transition">Packages</a></li>
              <li><a href="#" className="hover:text-sky-300 transition">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Mumbai · Goa · Online Consultation</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:+919999999999" className="hover:text-sky-300 transition">
                  +91 99 99 99 9999
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <a
                  href="mailto:hello@dreamstayresorts.com"
                  className="hover:text-sky-300 transition"
                >
                  hello@dreamstayresorts.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ==== CENTERED DIVIDER ==== */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col items-center justify-center gap-4 text-[12px] text-slate-400 text-center">

          <p>
            © {new Date().getFullYear()} DreamStay Resorts. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-sky-300 transition">Terms</a>
            <a href="#" className="hover:text-sky-300 transition">Privacy</a>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <span className="h-7 w-7 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 transition cursor-pointer text-xs">in</span>
              <span className="h-7 w-7 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 transition cursor-pointer text-xs">f</span>
              <span className="h-7 w-7 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 transition cursor-pointer text-xs">⦿</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
