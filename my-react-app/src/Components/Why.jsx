import React from "react";

const reasons = [
  {
    title: "Curated, not crowded",
    desc: "We personally hand‑pick every hotel and resort based on real guest reviews, location, service quality and overall experience – not just online photos.",
    icon: "✨",
  },
  {
    title: "End‑to‑end travel support",
    desc: "From finding the right stay and best flight options to airport transfers and on‑trip assistance, our team stays with you at every step.",
    icon: "🧭",
  },
  {
    title: "Transparent & flexible pricing",
    desc: "No hidden charges, clear inclusions and flexible customization for meals, room upgrades and experiences according to your budget.",
    icon: "💳",
  },
];

const highlights = [
  {
    label: "Hand‑picked properties",
    value: "120+",
  },
  {
    label: "Guest satisfaction score",
    value: "4.9 / 5",
  },
  {
    label: "Repeat guests",
    value: "70%",
  },
];

export default function WhyChooseUs() {
  return (
    <main className="pt-20 bg-slate-50 min-h-screen">
      {/* Top hero */}
      <section className="bg-gradient-to-r from-slate-900 via-sky-900 to-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-200">
            Why Choose Us
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">
            More than just hotel booking
          </h1>
          <p className="mt-3 text-sm sm:text-base text-sky-100 max-w-2xl mx-auto">
            At DreamStay Resorts, we combine carefully selected properties,
            honest guidance and personalized planning to turn your vacation
            into a memorable experience – not just a transaction.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-start">
          {/* Left: reasons cards */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
              What makes DreamStay different?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mb-6">
              Instead of showing you hundreds of random options, we listen to
              your travel style, preferences and budget – then suggest a few,
              truly suitable stays and experiences that we would choose for
              ourselves.
            </p>

            <div className="space-y-4">
              {reasons.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-sky-100 bg-white/80 backdrop-blur p-4 sm:p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex gap-3"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-500 text-lg text-white shadow-md shadow-sky-300/70">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right: image + highlights */}
          <div className="space-y-6">
            {/* Image card */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-sky-100 bg-white">
              <div className="relative h-64 sm:h-72">
                <img
                  src="https://images.pexels.com/photos/34851205/pexels-photo-34851205.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Guests enjoying a resort pool"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                    Trusted by travellers
                  </p>
                  <p className="text-sm sm:text-base font-semibold">
                    Couples · Families · Groups
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="rounded-3xl bg-white shadow-lg border border-sky-100 p-5 sm:p-6">
              <p className="text-sm font-semibold text-slate-900 mb-3">
                Numbers that matter
              </p>
              <div className="grid grid-cols-3 gap-4">
                {highlights.map((h) => (
                  <div key={h.label}>
                    <p className="text-lg sm:text-xl font-semibold text-slate-900">
                      {h.value}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      {h.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[11px] text-slate-500">
                These figures are based on our internal data and guest
                feedback across different destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">
                Still deciding where to stay?
              </h2>
              <p className="mt-2 text-sm text-slate-200">
                Share your dates, destination and budget, and we&apos;ll send
                you 2–3 personalized options with transparent pricing.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 hover:bg-sky-400 text-sm font-semibold text-white px-6 py-2.5 shadow-md transition"
            >
              Talk to a travel expert
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}