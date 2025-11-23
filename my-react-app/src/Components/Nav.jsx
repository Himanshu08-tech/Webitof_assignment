import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const linkBase = "text-sm text-white/90 hover:text-white transition";
  const activeClass = "text-sky-300";

  const bookNow = () => {
    setOpen(false);
    navigate("/contact"); // or "/pricing" if you prefer
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between rounded-full bg-black/35 backdrop-blur-md border border-white/10 px-4 py-2">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90">
              <span className="text-xl">🏝️</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white tracking-wide">
                DreamStay Resorts
              </p>
              <p className="text-[11px] text-white/80">Find your dream stay</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeClass : ""}`
              }
            >
              Home
            </NavLink>

            {/* <NavLink
              to="/services"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeClass : ""}`
              }
            >
              Services
            </NavLink> */}

            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeClass : ""}`
              }
            >
              Pricing
            </NavLink>

            <NavLink
              to="/resorts"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeClass : ""}`
              }
            >
              Resorts
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeClass : ""}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeClass : ""}`
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeClass : ""}`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* CTA + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={bookNow}
              className="hidden sm:inline-flex px-4 py-2 rounded-full bg-white text-gray-900 text-xs font-semibold shadow-md hover:bg-gray-100 transition"
            >
              Book Now
            </button>

            <button
              className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full bg-black/40 border border-white/20 text-white"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Toggle menu</span>
              <div className="space-y-1">
                <span className="block h-0.5 w-4 bg-white" />
                <span className="block h-0.5 w-4 bg-white" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="mt-2 rounded-3xl bg-black/70 backdrop-blur-md border border-white/10 px-5 py-4 md:hidden text-sm text-white/90">
            <nav className="flex flex-col gap-3">
              <NavLink
                to="/"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeClass : ""}`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/services"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeClass : ""}`
                }
              >
                Services
              </NavLink>

              <NavLink
                to="/pricing"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeClass : ""}`
                }
              >
                Pricing
              </NavLink>

              <NavLink
                to="/resorts"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeClass : ""}`
                }
              >
                Resorts
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeClass : ""}`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/blog"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeClass : ""}`
                }
              >
                Blog
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeClass : ""}`
                }
              >
                Contact
              </NavLink>

              <button
                onClick={bookNow}
                className="mt-2 w-full px-4 py-2 rounded-full bg-white text-gray-900 text-xs font-semibold shadow-md hover:bg-gray-100 transition"
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}