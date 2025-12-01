import React from "react";
import { HashRouter, Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import VADL from "./pages/VADL";
import TOM from "./pages/TOM";
import CAM from "./pages/CAM";
import Fusion from "./pages/Fusion";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "";

  return (
    <div className="min-h-screen bg-[var(--color-midnight)]">
      {/* Gradient background effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[var(--color-midnight)]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="group flex items-center gap-3"
          >
            <span className="text-lg font-semibold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              Sean Confoy
            </span>
            <span className="hidden sm:inline text-xs font-mono text-[var(--color-muted)] bg-[var(--color-slate)] px-2 py-0.5 rounded">
              ME @ Vanderbilt
            </span>
          </Link>

          <nav className="flex items-center gap-6">
            {isHome && (
              <>
                <a 
                  href="#about" 
                  className="text-sm text-[var(--color-muted)] hover:text-white transition-colors"
                >
                  About
                </a>
                <a 
                  href="#projects" 
                  className="text-sm text-[var(--color-muted)] hover:text-white transition-colors"
                >
                  Projects
                </a>
              </>
            )}
            <a
              href="mailto:seanconfoy@gmail.com"
              className="text-sm px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full hover:bg-amber-500/20 transition-all border border-amber-500/20"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-muted)]">
            © {new Date().getFullYear()} Sean Confoy
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/sean-confoy/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[var(--color-muted)] hover:text-amber-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:seanconfoy@gmail.com"
              className="text-sm text-[var(--color-muted)] hover:text-amber-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
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
          <Route path="projects/fusion" element={<Fusion />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
