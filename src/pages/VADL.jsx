import React from "react";
import { Link } from "react-router-dom";

export default function VADL() {
  const base = import.meta.env.BASE_URL;
  const FUSION_EMBED =
    "https://vanderbilt819.autodesk360.com/shares/public/SH90d2dQT28d5b602811501690b90a95d5a2?mode=embed";

  const images = [
    { src: "newgearbox.jpg", caption: "New ~100:1 gear reducer + sprocket system" },
    { src: "oldgearbox.jpg", caption: "Previous 14-gear sandwiched gearbox design" },
    { src: "Physicalassembly.jpg", caption: "Physical assembly and testing" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back Link */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-amber-400 transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to Projects
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {["Lead Payload Engineer", "Mechanism Design", "Gear Train", "SolidWorks", "Rapid Prototyping"].map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          VADL — Retractable Shovel Payload
        </h1>
        <p className="text-lg text-[var(--color-muted)]">
          Vanderbilt Aerospace Design Lab | NASA Student Launch Competition
        </p>
      </header>

      {/* Image Gallery */}
      <section className="mb-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {images.map((img, i) => (
            <div key={img.src} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[var(--color-slate)] border border-white/5">
                <img
                  src={`${base}images/${img.src}`}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="mt-2 text-xs text-[var(--color-muted)] text-center">{img.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="space-y-6 text-[var(--color-light)]">
        <p className="text-lg leading-relaxed">
          As <span className="text-amber-400 font-medium">Lead Payload Engineer</span>, I am 
          responsible for designing the soil-collection mechanism that passively deploys, digs, 
          and retracts using the rocket's payload bay rotation.
        </p>

        <p className="leading-relaxed text-[var(--color-muted)]">
          This year, I developed a <span className="text-white">new opening mechanism</span> built 
          around a <span className="text-white">50:1 gear reducer</span> paired with a 
          <span className="text-white"> 23-to-12 tooth sprocket reduction</span>, giving an 
          effective <span className="text-amber-400 font-medium">~100:1 ratio</span> between 
          payload bay rotation and the shovel hinge. The shovel only needs ~30 payload-bay 
          rotations to collect the required soil volume, so the system is sized specifically 
          for that operating window.
        </p>

        <p className="leading-relaxed text-[var(--color-muted)]">
          In the new architecture, the <span className="text-white">non-rotating shaft</span> is 
          concentric with the smaller sprocket, and a chain connects the sprockets to drive the 
          hinge. A <span className="text-white">bulkplate and M4 fasteners</span> secure the 
          reducer, shafts, and sprocket alignment. This redesign reduces failure points by 
          relying on professionally machined parts, proper set-screw interfaces, and known 
          manufacturing tolerances.
        </p>

        <p className="leading-relaxed text-[var(--color-muted)]">
          The previous payload used a <span className="text-white">14-gear sandwiched gearbox</span> at 
          ~30:1. While it functioned, the design suffered from gear deflection, tolerance buildup, 
          difficult assembly workflows, and backlash at the output gear. Under load, shafts slipped 
          even with D-shafts and set screws, and the plastic gears deformed at the set-screw interface.
        </p>

        <p className="leading-relaxed text-[var(--color-muted)]">
          We fully assembled and tested that design, and it technically worked but was too fragile 
          and complex to harden for launch. After field tests and full-airframe tip tests, we 
          concluded that fixing it would require more effort than designing a new system informed 
          by its shortcomings.
        </p>

        {/* Highlights Box */}
        <div className="mt-8 p-6 rounded-xl bg-[var(--color-charcoal)] border border-white/5">
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Key Highlights
          </h3>
          <ul className="space-y-2 text-[var(--color-muted)]">
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              New ~100:1 reducer + sprocket system sized for passive use
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              Professionally machined parts reduce tolerance issues
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              Prior 14-gear system thoroughly tested and used as a lesson
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              Passive deployment powered by payload bay rotation
            </li>
          </ul>
        </div>

        {/* Link */}
        <a
          href="https://www.vadl.org/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-amber-500/10 text-amber-400 rounded-lg hover:bg-amber-500/20 transition-colors border border-amber-500/20"
        >
          Visit VADL Website
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </section>

      {/* 3D Viewer */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white mb-2">Interactive Assembly</h2>
        <p className="text-sm text-[var(--color-muted)] mb-4">
          Drag to orbit, scroll to zoom, right-drag to pan
        </p>
        <div className="aspect-[16/10] rounded-xl overflow-hidden border border-white/5">
          <iframe
            src={FUSION_EMBED}
            title="VADL Assembly Viewer"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
        <div className="mt-3 text-center">
          <a
            href={FUSION_EMBED}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--color-muted)] hover:text-amber-400 transition-colors"
          >
            Open full-size viewer →
          </a>
        </div>
      </section>
    </div>
  );
}
