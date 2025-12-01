import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Fusion() {
  const base = import.meta.env.BASE_URL;

  const images = [
    { src: "pelican-case.png", caption: "Controls enclosure design" },
    { src: "board.png", caption: "Control board layout" },
    { src: "motor.jpg", caption: "Motor and mechanism assembly" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back Link */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-violet-400 transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to Projects
      </Link>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <div className="flex items-center gap-4 mb-4">
          <img
            src={`${base}images/fusion-logo.png`}
            alt="Fusion Logo"
            className="h-12 w-auto"
          />
          <div className="flex flex-wrap gap-2">
            {["CAD", "Controls", "Mechanisms", "Research"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Fusion Project — Controls & Mechanisms
        </h1>
        <p className="text-lg text-[var(--color-muted)]">
          Inertial Electrostatic Confinement Fusion Reactor
        </p>
      </motion.header>

      {/* Image Gallery */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12"
      >
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
      </motion.section>

      {/* Content */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6 text-[var(--color-light)]"
      >
        <p className="text-lg leading-relaxed">
          I contributed to the controls and mechanical systems for a student-built 
          <span className="text-violet-400 font-medium"> inertial electrostatic confinement (IEC) fusion reactor</span>.
        </p>

        <p className="leading-relaxed text-[var(--color-muted)]">
          My role focused on the <span className="text-white">controls-side CAD</span> and 
          <span className="text-white"> mechanical integration</span>. This included designing enclosures 
          for control electronics, routing for high-voltage systems, and mechanisms that interface 
          with the reactor's vacuum chamber and electrode assembly.
        </p>

        <p className="leading-relaxed text-[var(--color-muted)]">
          The project required careful attention to <span className="text-white">electromagnetic 
          interference (EMI) shielding</span>, <span className="text-white">thermal management</span>, 
          and <span className="text-white">safety interlocks</span>. All components had to be designed 
          with consideration for the high-voltage, high-vacuum operating environment.
        </p>

        <p className="leading-relaxed text-[var(--color-muted)]">
          Working on a fusion project provided exposure to interdisciplinary engineering challenges 
          spanning electrical, mechanical, and nuclear domains. The experience reinforced the 
          importance of systems-level thinking and rigorous safety protocols in complex experimental systems.
        </p>

        {/* Key Contributions */}
        <div className="mt-8 p-6 rounded-xl bg-[var(--color-charcoal)] border border-white/5">
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            Key Contributions
          </h3>
          <ul className="space-y-2 text-[var(--color-muted)]">
            <li className="flex items-start gap-2">
              <span className="text-violet-400 mt-1">•</span>
              Controls enclosure design with EMI shielding
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-400 mt-1">•</span>
              High-voltage routing and safety interlock mechanisms
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-400 mt-1">•</span>
              Mechanical interfaces for vacuum chamber components
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-400 mt-1">•</span>
              Thermal management solutions for power electronics
            </li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
}
