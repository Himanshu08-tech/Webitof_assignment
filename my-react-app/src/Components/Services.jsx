import React from "react";

const services = [
  {
    icon: "🏝️",
    title: "Resort Booking",
    desc: "Beachfront resorts, infinity pools and sunset views – all in a single seamless booking.",
    color: "from-sky-400 to-cyan-500",
  },
  {
    icon: "✈️",
    title: "Flight & Transfers",
    desc: "Best flight deals with airport pickup & drop – making your entire journey completely stress‑free.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: "🌅",
    title: "Tours & Activities",
    desc: "Island tours, water sports, sightseeing and curated local experiences planned end‑to‑end.",
    color: "from-fuchsia-400 to-rose-500",
  },
  {
    icon: "🧖‍♀️",
    title: "Spa & Wellness",
    desc: "Signature spa therapies, sauna, yoga sessions and wellness rituals for total relaxation.",
    color: "from-indigo-400 to-sky-500",
  },
  {
    icon: "🍽️",
    title: "Food & Drinks",
    desc: "Pool‑side breakfast, multi‑cuisine dining, handcrafted cocktails and special candle‑light dinners.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: "🎉",
    title: "Events & Celebrations",
    desc: "Destination weddings, birthdays, pre‑wedding shoots and corporate events – fully planned and managed.",
    color: "from-emerald-500 to-lime-400",
  },
];

export default function Services() {
  return (
    <section
      className="relative bg-gradient-to-b from-sky-50 to-white py-14 md:py-20"
      id="services"
    >
      {/* soft top fade (transition from hero) */}
      <div className="pointer-events-none absolute -top-8 inset-x-0 h-8 bg-gradient-to-b from-transparent via-sky-50/70 to-sky-50" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-sky-500 uppercase">
            Our Services
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Everything for your perfect holiday
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            From hotel bookings to activities – we plan your entire vacation
            experience so you can simply relax and enjoy your stay.
          </p>
        </div>

        {/* Cards (6 items, 3x2 on desktop) */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((item) => (
            <ServiceCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ item }) {
  return (
    <article
      className="
        group relative overflow-hidden 
        rounded-3xl border border-sky-100 bg-white/80 backdrop-blur 
        p-6 shadow-sm 
        transition-all duration-300 
        hover:-translate-y-2 hover:shadow-2xl
      "
    >
      {/* gradient blob background */}
      <div
        className={`
          pointer-events-none absolute -top-10 -right-10 h-28 w-28 
          rounded-full opacity-40 blur-2xl 
          bg-gradient-to-br ${item.color}
          transition-transform duration-500 group-hover:scale-125
        `}
      />

      {/* content */}
      <div className="relative">
        {/* icon badge */}
        <div
          className={`
            inline-flex h-12 w-12 items-center justify-center 
            rounded-2xl text-xl text-white shadow-md shadow-sky-300/60
            bg-gradient-to-br ${item.color}
            transform transition-transform duration-300 group-hover:-translate-y-1
          `}
        >
          {item.icon}
        </div>

        <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
          {item.title}
        </h3>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {item.desc}
        </p>

        {/* bottom accent line + small glow dot */}
        <div className="mt-4 flex items-center gap-2">
          <div
            className={`
              h-[2px] w-14 rounded-full 
              bg-gradient-to-r ${item.color}
              opacity-90
            `}
          />
          <span
            className={`
              h-2 w-2 rounded-full 
              bg-gradient-to-br ${item.color}
              animate-pulse
            `}
          />
        </div>
      </div>
    </article>
  );
}