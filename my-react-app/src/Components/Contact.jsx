import React from "react";

export default function ContactPage() {
  return (
    <main className="pt-20 bg-gradient-to-b from-sky-50 to-white min-h-screen">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">
            Contact Us
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 text-center max-w-2xl mx-auto">
            Share your travel plans and we&apos;ll help you design the perfect
            resort stay, from flights to activities.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Form */}
            <form className="rounded-3xl bg-white shadow-lg border border-sky-100 p-6 space-y-4">
              <div>
                <label className="text-xs font-medium text-slate-600">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600">
                  Message
                </label>
                <textarea
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2.5 text-sm h-28 resize-none focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="Tell us about your trip, dates and destination..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold py-2.5 transition"
              >
                Send Message
              </button>
            </form>

            {/* Contact info */}
            <div className="rounded-3xl bg-slate-900 text-slate-50 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold mb-3">
                  Talk to a travel expert
                </h2>
                <p className="text-sm text-slate-200">
                  Get free consultation for your next resort vacation. We&apos;ll
                  share options, prices and ideas in minutes.
                </p>

                <div className="mt-5 space-y-3 text-sm">
                  <p className="flex gap-2">
                    <span>📞</span>
                    <span>+91 99 99 99 9999</span>
                  </p>
                  <p className="flex gap-2">
                    <span>✉️</span>
                    <span>hello@dreamstayresorts.com</span>
                  </p>
                  <p className="flex gap-2">
                    <span>📍</span>
                    <span>Mumbai · Goa · Online Consultation</span>
                  </p>
                </div>
              </div>

              <p className="mt-6 text-[11px] text-slate-400">
                We usually reply within a few hours during working days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}