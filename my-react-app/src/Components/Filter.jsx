import React, { useState, useRef } from "react";

const resorts = [
  {
    id: 1,
    name: "Oceanview Paradise Resort",
    location: "Goa, India",
    price: 8500,
    guests: 2,
    rooms: "Deluxe Sea View",
    image:
      "https://images.pexels.com/photos/34851205/pexels-photo-34851205.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    name: "Palm Grove Beach Villas",
    location: "Maldives",
    price: 22000,
    guests: 4,
    rooms: "Water Villa",
    image:
      "https://images.pexels.com/photos/34785624/pexels-photo-34785624.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    name: "Hilltop Serenity Retreat",
    location: "Manali, India",
    price: 6500,
    guests: 3,
    rooms: "Mountain View Suite",
    image:
      "https://images.pexels.com/photos/34786681/pexels-photo-34786681.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    name: "Lagoon Bay Resort & Spa",
    location: "Bali, Indonesia",
    price: 14000,
    guests: 2,
    rooms: "Private Pool Villa",
    image:
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    name: "Sunrise Cliff Resort",
    location: "Sri Lanka",
    price: 9500,
    guests: 4,
    rooms: "Family Suite",
    image:
      "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    name: "Coral Sands Beachfront",
    location: "Andaman, India",
    price: 12000,
    guests: 5,
    rooms: "Premium Cottage",
    image:
      "https://images.pexels.com/photos/7902914/pexels-photo-7902914.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function Filter() {
  const [budget, setBudget] = useState("any");
  const [guestFilter, setGuestFilter] = useState("any");
  const [sort, setSort] = useState("recommended");
  const sliderRef = useRef(null);

  const getBudgetMax = () => {
    if (budget === "under8") return 8000;
    if (budget === "under15") return 15000;
    if (budget === "under25") return 25000;
    return null;
  };

  const filterByGuests = (resort) => {
    if (guestFilter === "any") return true;
    if (guestFilter === "2") return resort.guests <= 2;
    if (guestFilter === "3to4")
      return resort.guests >= 3 && resort.guests <= 4;
    if (guestFilter === "5plus") return resort.guests >= 5;
    return true;
  };

  const maxBudget = getBudgetMax();

  let filtered = resorts.filter((r) =>
    maxBudget ? r.price <= maxBudget : true
  );
  filtered = filtered.filter(filterByGuests);

  if (sort === "priceLow") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  const scroll = (direction) => {
    if (!sliderRef.current || filtered.length === 0) return;

    const firstCard = sliderRef.current.querySelector("[data-card]");
    const cardWidth = firstCard?.getBoundingClientRect().width || 320;

    sliderRef.current.scrollBy({
      left: direction === "next" ? cardWidth + 16 : -(cardWidth + 16),
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-slate-50 py-16 md:py-20" id="category">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Explore our best resorts
            </h2>
          
          </div>
          <button
            onClick={() => {
              setBudget("any");
              setGuestFilter("any");
              setSort("recommended");
            }}
            className="self-start text-xs text-sky-600 hover:text-sky-800"
          >
            Reset filters
          </button>
        </div>

        {/* Filters */}
        <div className="rounded-3xl bg-white shadow-md border border-sky-100 px-4 py-4 sm:px-6 sm:py-5 mb-8">
          <div className="grid gap-4 sm:grid-cols-4">
            <FilterBlock label="Budget / night">
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-2xl border border-sky-100 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <option value="any">Any</option>
                <option value="under8">Up to ₹8,000</option>
                <option value="under15">Up to ₹15,000</option>
                <option value="under25">Up to ₹25,000</option>
              </select>
            </FilterBlock>

            <FilterBlock label="Guests">
              <select
                value={guestFilter}
                onChange={(e) => setGuestFilter(e.target.value)}
                className="w-full rounded-2xl border border-sky-100 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <option value="any">Any</option>
                <option value="2">1–2 Guests</option>
                <option value="3to4">3–4 Guests</option>
                <option value="5plus">5+ Guests</option>
              </select>
            </FilterBlock>

            <FilterBlock label="Sort by">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full rounded-2xl border border-sky-100 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <option value="recommended">Recommended</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
              </select>
            </FilterBlock>

            <div className="flex items-center justify-center sm:justify-end text-xs text-slate-500">
              {filtered.length} resorts found
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent" />

          <button
            onClick={() => scroll("prev")}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-9 w-9 items-center justify-center rounded-full bg-white shadow-md border border-slate-200 text-slate-700 hover:bg-slate-100 transition z-10"
          >
            ‹
          </button>
          <button
            onClick={() => scroll("next")}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-9 w-9 items-center justify-center rounded-full bg-white shadow-md border border-slate-200 text-slate-700 hover:bg-slate-100 transition z-10"
          >
            ›
          </button>

          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-3 snap-x snap-mandatory"
          >
            {filtered.map((resort) => (
              <ResortSlideCard key={resort.id} resort={resort} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterBlock({ label, children }) {
  return (
    <div className="flex flex-col gap-1 text-left">
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
        {label}
      </span>
      {children}
    </div>
  );
}

function ResortSlideCard({ resort }) {
  return (
    <article
      data-card
      className="
        snap-center shrink-0 
        w-[260px] sm:w-[320px] md:w-[360px]
        group relative rounded-3xl overflow-hidden 
        bg-white border border-sky-100 shadow-md 
        hover:shadow-2xl hover:-translate-y-1 
        transition-all duration-300
      "
    >
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={resort.image}
          alt={resort.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

        <div className="absolute bottom-3 left-3 rounded-full bg-black/65 px-3 py-1 text-[11px] text-white">
          From{" "}
          <span className="font-semibold">
            ₹{resort.price.toLocaleString("en-IN")}
          </span>{" "}
          / night
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900">
          {resort.name}
        </h3>
        <p className="text-xs text-slate-500 mt-1">{resort.location}</p>

        <div className="mt-3 flex items-center justify-between text-xs text-slate-600">
          <span>{resort.rooms}</span>
          <span>Up to {resort.guests} guests</span>
        </div>

        <button className="mt-4 w-full rounded-2xl bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold py-2.5 transition">
          View Details
        </button>
      </div>
    </article>
  );
}