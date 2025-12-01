// src/App.jsx
import React from "react";
import { HashRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import Home from "./pages/Home.jsx";
import VADL from "./pages/VADL.jsx";
import CAM from "./pages/CAM.jsx";
import TOM from "./pages/TOM.jsx";
import Fusion from "./pages/Fusion.jsx";

function Layout() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 border-b border-neutral-900">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight">
            Sean Confoy
          </Link>

          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="opacity-80 hover:opacity-100">
              About
            </a>
            <a href="#projects" className="opacity-80 hover:opacity-100">
              Projects
            </a>
          </nav>

          <a
            className="rounded-2xl border border-neutral-800 px-3 py-1.5 text-sm hover:bg-neutral-900"
            href="mailto:seanconfoy@gmail.com"
          >
            Email
          </a>
        </div>
      </header>

      {/* Routed content */}
      <Outlet />

      {/* Footer */}
      <footer className="border-t border-neutral-900 mt-20">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm opacity-70">
          © {new Date().getFullYear()} Sean Confoy. Built with React + Tailwind.
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
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
