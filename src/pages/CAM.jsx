import React from "react";
import { Link } from "react-router-dom";

export default function CAM() {
  const base = import.meta.env.BASE_URL;

  const images = [
    { src: "cam-physical-model.jpg", caption: "Physical cam-follower prototype" },
    { src: "cam-assembly.jpg", caption: "Assembly CAD model" },
    { src: "follower-motion.jpg", caption: "Follower motion analysis" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back Link */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-sky-400 transition-colors mb-8"
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
            src={`${base}images/cam-logo.png`}
            alt="CAM Logo"
            className="h-12 w-auto"
          />
          <div className="flex flex-wrap gap-2">
            {["Dynacam", "MATLAB", "Motion Analysis", "Prototyping"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          CAM Project — Walking Simulation
        </h1>
        <p className="text-lg text-[var(--color-muted)]">
          Mechanical Design | Cam-Follower Mechanism
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
          This project involved designing and building a <span className="text-sky-400 font-medium">cam-follower 
          mechanism</span> that simulates the vertical displacement of a human footstep during walking.
        </p>

        <p className="leading-relaxed text-[var(--color-muted)]">
          Using <span className="text-white">Dynacam</span> software and <span className="text-white">MATLAB</span>, 
          I developed motion curves that accurately replicate the rise-dwell-fall pattern of a foot during the 
          gait cycle. The cam profile was optimized to produce smooth acceleration profiles while minimizing 
          jerk and pressure angle constraints.
        </p>

        <p className="leading-relaxed text-[var(--color-muted)]">
          The physical prototype demonstrates how the cam's rotation translates into precise vertical motion 
          of the follower. The design accounts for <span className="text-white">contact stress</span>, 
          <span className="text-white"> follower dynamics</span>, and <span className="text-white">manufacturing 
          tolerances</span> to ensure reliable operation.
        </p>

        <p className="leading-relaxed text-[var(--color-muted)]">
          Key challenges included balancing the desired motion profile against practical constraints like 
          maximum pressure angle, cam size limitations, and follower spring requirements. The final design 
          successfully achieves the target motion characteristics while remaining manufacturable.
        </p>

        {/* Technical Specs */}
        <div className="mt-8 p-6 rounded-xl bg-[var(--color-charcoal)] border border-white/5">
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Technical Approach
          </h3>
          <ul className="space-y-2 text-[var(--color-muted)]">
            <li className="flex items-start gap-2">
              <span className="text-sky-400 mt-1">•</span>
              Dynacam for cam profile generation and analysis
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 mt-1">•</span>
              MATLAB for motion curve optimization
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 mt-1">•</span>
              SolidWorks for 3D modeling and assembly
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 mt-1">•</span>
              Physical prototype validates theoretical motion curves
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
