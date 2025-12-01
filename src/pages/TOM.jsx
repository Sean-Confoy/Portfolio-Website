import React from "react";
import { Link } from "react-router-dom";

export default function TOM() {
  const base = import.meta.env.BASE_URL;

  const images = [
    { src: "tom-sketch.jpg", caption: "Initial design sketches" },
    { src: "tom-team.jpg", caption: "Team collaboration" },
    { src: "tom-wheelchair.jpg", caption: "Final wheelchair-mounted solution" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back Link */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-emerald-400 transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to Projects
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={`${base}images/tom-logo.png`}
            alt="TOM Logo"
            className="h-12 w-auto"
          />
          <div className="flex flex-wrap gap-2">
            {["Human-Centered Design", "3D Printing", "CAD", "Rapid Prototyping"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          T.O.M. Makeathon — Assistive Technology
        </h1>
        <p className="text-lg text-[var(--color-muted)]">
          Tikkun Olam Makers | 48-Hour Design Sprint
        </p>
      </header>

      {/* Image Gallery */}
      <section className="mb-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {images.map((img) => (
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
          The Vanderbilt <span className="text-emerald-400 font-medium">Tikkun Olam Makers (T.O.M.)</span> Makeathon 
          brings together engineers, designers, and community members to build customized assistive devices for 
          "need-knowers" — individuals who rely on practical, personalized solutions for everyday independence.
        </p>

        <p className="leading-relaxed text-[var(--color-muted)]">
          Our team worked with <span className="text-white">Miyako</span>, a young girl with physical mobility 
          limitations who needed better access to play, comfort, and daily activities.
        </p>

        <p className="leading-relaxed text-[var(--color-muted)]">
          Over 48 hours, we prototyped three functional devices: an adapted <span className="text-white">sock-aid</span> for 
          independent dressing, a <span className="text-white">sun-shade mount</span> for her wheelchair, and a 
          <span className="text-white"> modular Nintendo Switch holder</span> designed for both her wheelchair and 
          her family car. Each device was built from direct interviews with the family, ensuring the solutions 
          addressed real, immediate needs instead of generic assumptions.
        </p>

        <p className="leading-relaxed text-[var(--color-muted)]">
          I led the design and fabrication of the Switch-mount system. Working from ergonomic measurements, I created 
          a custom <span className="text-white">backplate</span> for the car seat and a set of 
          <span className="text-white"> 3D-printed clamps</span> and <span className="text-white">ball-and-socket joints</span> that 
          ensured stable but fully adjustable viewing. Multiple collar sizes were produced to match differences between 
          wheelchair tubing and vehicle hardware, letting Miyako reposition the Switch without straining her neck or arms.
        </p>

        <p className="leading-relaxed text-[var(--color-muted)]">
          The Makeathon reinforced the importance of <span className="text-emerald-400 font-medium">fast iteration, 
          user-centered design, and creative prototyping</span>. Our devices were delivered as fully functional prototypes, 
          and Miyako's family emphasized how meaningful it was to see solutions built specifically for her day-to-day life.
        </p>

        {/* Devices Built */}
        <div className="mt-8 p-6 rounded-xl bg-[var(--color-charcoal)] border border-white/5">
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Devices Built
          </h3>
          <ul className="space-y-2 text-[var(--color-muted)]">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span><span className="text-white">Sock-aid</span> — Custom tool for independent dressing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span><span className="text-white">Sun-shade mount</span> — Wheelchair-attachable shade system</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span><span className="text-white">Nintendo Switch holder</span> — Modular mount for wheelchair and car</span>
            </li>
          </ul>
        </div>

        {/* Link */}
        <a
          href="https://www.vanderbilt.edu/the-wondry/tikkun-olam-makers-2023-makeathon/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg hover:bg-emerald-500/20 transition-colors border border-emerald-500/20"
        >
          Event Overview
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </section>
    </div>
  );
}
