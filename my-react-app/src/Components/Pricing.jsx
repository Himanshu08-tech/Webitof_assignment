import React, { useState } from "react";

const plans = [
  {
    name: "Beach Escape",
    tag: "Best for short stays",
    popular: false,
    nightPrice: 6999,
    packagePrice: 23999,
    description:
      "Ideal for quick getaways – 3★ / 4★ beachfront resorts with all essentials covered.",
    features: [
      "Standard room with partial sea / pool view",
      "Daily breakfast included",
      "Airport pickup or drop (one way)",
      "Basic sightseeing recommendations",
    ],
  },
  {
    name: "Signature Getaway",
    tag: "Most popular",
    popular: true,
    nightPrice: 9999,
    packagePrice: 32999,
    description:
      "Our most loved plan – upgraded rooms, curated experiences and extra flexibility.",
    features: [
      "Deluxe sea / pool view room",
      "Daily breakfast + one special dinner",
      "Roundtrip airport transfers",
      "One guided local experience or tour",
      "Flexible check‑in (subject to availability)",
    ],
  },
  {
    name: "Luxury All‑Inclusive",
    tag: "Premium experience",
    popular: false,
    nightPrice: 16999,
    packagePrice: 52999,
    description:
      "For those who want everything taken care of – premium resorts with all‑round inclusions.",
    features: [
      "Suite / villa with private balcony or pool",
      "All meals with selected drinks",
      "Private airport transfers",
      "2 curated tours or activities",
      "Dedicated on‑trip concierge support",
    ],
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState("night"); // 'night' | 'package'

  return (
    <main className="pt-20 bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-900 via-sky-900 to-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-200">
            Pricing
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">
            Simple, transparent resort packages
          </h1>
          <p className="mt-3 text-sm sm:text-base text-sky-100 max-w-2xl mx-auto">
            Choose a plan that matches your style and budget. All prices are
            fully customizable based on travel dates, destination and hotel
            category.
          </p>

          {/* Billing toggle */}
          <div className="mt-6 inline-flex items-center rounded-full bg-black/40 border border-white/15 p-1 text-xs sm:text-sm">
            <button
              onClick={() => setBilling("night")}
              className={`px-4 py-1.5 rounded-full transition ${
                billing === "night"
                  ? "bg-white text-slate-900 font-semibold shadow"
                  : "text-sky-100"
              }`}
            >
              Per Night
            </button>
            <button
              onClick={() => setBilling("package")}
              className={`px-4 py-1.5 rounded-full transition ${
                billing === "package"
                  ? "bg-white text-slate-900 font-semibold shadow"
                  : "text-sky-100"
              }`}
            >
              3N–4D Package
            </button>
          </div>

          <p className="mt-2 text-[11px] text-sky-200">
            Exact pricing depends on dates, season and final hotel selection.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} billing={billing} />
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-500 text-center max-w-3xl mx-auto">
            Taxes are approximate and may vary. Flights are not included by
            default but can be added to any plan. For groups, honeymoon
            add‑ons, or custom itineraries, please contact our team for a
            tailored quote.
          </p>
        </div>
      </section>
    </main>
  );
}

function PricingCard({ plan, billing }) {
  const price =
    billing === "night" ? plan.nightPrice : plan.packagePrice;
  const priceLabel =
    billing === "night" ? "per night" : "per person · 3N–4D";

  return (
    <article
      className={`
        relative rounded-3xl border bg-white shadow-sm 
        flex flex-col overflow-hidden
        transition-all duration-300
        ${
          plan.popular
            ? "border-sky-300 shadow-xl shadow-sky-100 scale-[1.02]"
            : "border-sky-100 hover:shadow-xl hover:-translate-y-1"
        }
      `}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute top-3 right-3 rounded-full bg-emerald-500 text-xs font-semibold text-white px-3 py-1 shadow">
          Most Popular
        </div>
      )}

      {/* Header */}
      <div className="p-5 sm:p-6 border-b border-slate-100 bg-gradient-to-br from-sky-50 to-white">
        <p className="text-xs uppercase tracking-[0.18em] text-sky-500">
          {plan.tag}
        </p>
        <h2 className="mt-1 text-lg sm:text-xl font-semibold text-slate-900">
          {plan.name}
        </h2>

        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-2xl sm:text-3xl font-bold text-slate-900">
            ₹{price.toLocaleString("en-IN")}
          </span>
          <span className="text-xs text-slate-500">{priceLabel}</span>
        </div>

        <p className="mt-2 text-sm text-slate-600">
          {plan.description}
        </p>
      </div>

      {/* Features */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <ul className="space-y-2 text-sm text-slate-700 flex-1">
          {plan.features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="mt-0.5 text-emerald-500">✔</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <button
          className={`
            mt-5 w-full rounded-2xl text-sm font-semibold py-2.5 transition
            ${
              plan.popular
                ? "bg-sky-500 hover:bg-sky-400 text-white"
                : "bg-slate-900 hover:bg-slate-800 text-white"
            }
          `}
        >
          Request this package
        </button>
      </div>
    </article>
  );
}