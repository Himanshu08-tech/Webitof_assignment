import React from "react";

const posts = [
  {
    id: 1,
    title: "How to Choose the Perfect Beach Resort",
    excerpt:
      "From location and views to food and activities – here’s a simple checklist to help you pick the right resort for your next vacation.",
    tag: "Tips",
    readTime: "6 min read",
    date: "June 10, 2024",
    image:
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    title: "Top 5 Island Destinations for Couples",
    excerpt:
      "Romantic sunsets, private villas and candle‑light dinners – discover the best islands for your honeymoon or anniversary trip.",
    tag: "Couples",
    readTime: "5 min read",
    date: "May 28, 2024",
    image:
      "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    title: "Family-Friendly Resorts Kids Will Love",
    excerpt:
      "Pools with slides, kids clubs and spacious family suites – here’s what to look for when traveling with children.",
    tag: "Family Travel",
    readTime: "7 min read",
    date: "May 12, 2024",
    image:
      "https://images.pexels.com/photos/7902914/pexels-photo-7902914.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    title: "A Weekend Escape to the Hills",
    excerpt:
      "Short on time but need a break? Plan a refreshing 2–3 day hill getaway with this simple, ready‑to‑use itinerary.",
    tag: "Short Trips",
    readTime: "4 min read",
    date: "April 29, 2024",
    image:
      "https://images.pexels.com/photos/34786681/pexels-photo-34786681.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    title: "Making the Most of an All‑Inclusive Resort",
    excerpt:
      "All‑inclusive doesn’t just mean free food – here’s how to get the maximum value out of your stay.",
    tag: "Guides",
    readTime: "5 min read",
    date: "April 15, 2024",
    image:
      "https://images.pexels.com/photos/34851205/pexels-photo-34851205.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    title: "Essential Packing List for a Beach Holiday",
    excerpt:
      "Avoid overpacking and forgetting the basics with this beach holiday packing checklist.",
    tag: "Packing",
    readTime: "3 min read",
    date: "March 30, 2024",
    image:
      "https://images.pexels.com/photos/34785624/pexels-photo-34785624.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-20 bg-slate-50 min-h-screen">
      {/* Blog hero */}
      <section className="bg-gradient-to-r from-slate-900 via-sky-900 to-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-200">
            Blog
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">
            Travel Stories &amp; Resort Tips
          </h1>
          <p className="mt-3 text-sm sm:text-base text-sky-100 max-w-2xl mx-auto">
            Get ideas, inspiration and practical advice to plan your next
            resort vacation – from choosing the right stay to making the most of
            every moment.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* optional label */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Latest articles
            </h2>
            <p className="text-xs text-slate-500 hidden sm:block">
              Updated regularly with new resort ideas &amp; travel tips
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function BlogCard({ post }) {
  return (
    <article
      className="
        group rounded-3xl overflow-hidden bg-white 
        border border-sky-100 shadow-sm 
        hover:shadow-2xl hover:-translate-y-1 
        transition-all duration-300 flex flex-col
      "
    >
      {/* Image */}
      <div className="relative h-40 sm:h-44 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
        <span className="absolute top-3 left-3 rounded-full bg-black/60 text-[11px] text-white px-3 py-1">
          {post.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <p className="text-[11px] text-slate-500">
          {post.date} · {post.readTime}
        </p>
        <h3 className="mt-2 text-base sm:text-lg font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 flex-1">
          {post.excerpt}
        </p>

        <button className="mt-3 inline-flex items-center text-sm font-semibold text-sky-600 group-hover:text-sky-800">
          Read article
          <span className="ml-1 transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </article>
  );
}