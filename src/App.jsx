import React from "react";
import { HashRouter, Routes, Route, Link, Outlet, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import VADL from "./pages/VADL";
import TOM from "./pages/TOM";
import CAM from "./pages/CAM";
import Hammer from "./pages/Hammer";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "";

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold">
            Sean Confoy
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {isHome ? (
              <>
                <button onClick={() => scrollTo('home')} className="text-[var(--color-muted)] hover:text-white transition-colors">
                  Home
                </button>
                <button onClick={() => scrollTo('about')} className="text-[var(--color-muted)] hover:text-white transition-colors">
                  About
                </button>
                <button onClick={() => scrollTo('projects')} className="text-[var(--color-muted)] hover:text-white transition-colors">
                  Projects
                </button>
                <button onClick={() => scrollTo('contact')} className="text-[var(--color-muted)] hover:text-white transition-colors">
                  Contact
                </button>
              </>
            ) : (
              <Link to="/" className="text-[var(--color-muted)] hover:text-white transition-colors">
                Home
              </Link>
            )}
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects/vadl" element={<VADL />} />
          <Route path="projects/tom" element={<TOM />} />
          <Route path="projects/cam" element={<CAM />} />
          <Route path="projects/hammer" element={<Hammer />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
