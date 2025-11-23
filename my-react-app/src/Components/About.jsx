import React from "react";

export default function About() {
  return (
    <section
      className="relative bg-gradient-to-b from-white to-sky-50 py-16 md:py-20"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.25em] text-sky-500 uppercase">
            About Us
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Why travel with DreamStay Resorts?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            We don&apos;t just book rooms – we design complete travel experiences
            for you with hand‑picked resorts, verified partners and dedicated
            travel experts.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Left: text */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
              Personalized stays, curated just for you.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              For over 5 years, we&apos;ve been planning beach, hill and island
              getaways for couples, families and groups. For every trip, we take
              care of the best flight options, resort deals, local experiences
              and on‑ground support – so you can simply relax while we handle
              all the planning.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="mt-0.5 text-emerald-500">✔</span>
                <span>Hand‑picked 4★ &amp; 5★ resorts with verified reviews.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-emerald-500">✔</span>
                <span>Dedicated travel expert from enquiry to check‑out.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-emerald-500">✔</span>
                <span>Flexible payment options &amp; fully transparent pricing.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-emerald-500">✔</span>
                <span>24/7 support during your trip for complete peace of mind.</span>
              </li>
            </ul>

            {/* Stats */}
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-800">
              <Stat label="Trips planned" value="10k+" />
              <Stat label="Destinations" value="60+" />
              <Stat label="Repeat guests" value="70%" />
            </div>
          </div>

          {/* Right: image card */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-sky-100 bg-white">
              <div className="relative h-64 sm:h-72 md:h-80">
                <img
                  src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Resort pool and palm trees"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                    Curated stays
                  </p>
                  <p className="text-sm sm:text-base font-semibold">
                    Beach · Hills · Islands
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <p className="text-sm text-slate-700">
                  “Our priority is not just the best price, but the best
                  experience – that&apos;s why we personally review every
                  property and carefully design each itinerary by hand.”
                </p>
              </div>
            </div>

            {/* Floating note (optional) */}
            {/* <div className="absolute -bottom-4 -right-2 sm:-right-4 rounded-2xl bg-white shadow-lg border border-sky-100 px-4 py-3 text-xs text-slate-700">
              <p className="font-semibold text-slate-900">Rated 4.9 / 5</p>
              <p className="text-[11px] text-slate-500">
                1,500+ verified guest reviews
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="text-xl font-semibold text-slate-900">{value}</p>
      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
    </div>
  );
}