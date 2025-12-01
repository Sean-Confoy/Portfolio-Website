// src/pages/Fusion.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Fusion() {
  const base = import.meta.env.BASE_URL;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <Link to="/#projects" className="text-sm opacity-70 hover:opacity-100">
        ← Back to Projects
      </Link>

      {/* Header */}
      <header className="mt-2 flex items-center gap-4">
        <img
          src={`${base}images/fusion-logo.png`}
          alt="Fusion logo"
          className="h-10 w-auto"
        />
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Vanderbilt Fusion Project — Controls &amp; Mechanisms
          </h1>
          <div className="mt-2 flex flex-wrap gap-2">
            {["Controls", "CAD", "Automation"].map((t) => (
              <span
                key={t}
                className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Images */}
      <section className="mt-8">
        <div className="mt-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["pelican-case.png", "board.png", "motor.jpg"].map((f) => (
            <div
              key={f}
              className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900/10"
            >
              <img
                src={`${base}images/${f}`}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Longer write-up */}
      <section className="mt-8 space-y-4 text-neutral-300 leading-relaxed">
        <p>
          The Vanderbilt Fusion Project is a student-run effort to design and
          operate an inertial electrostatic confinement reactor — a compact
          fusion device capable of generating over{" "}
          <strong>1 million fusion events per second</strong>.
        </p>
        <p>
          On the <strong>Controls Team</strong>, I contributed to both CAD and
          mechanisms that make reactor operation safer and more repeatable. One
          of my early tasks was fully modeling the internal geometry of a
          Pelican case so that <strong>panel, rail, and cable routing</strong>{" "}
          could be designed in CAD before hardware was purchased. This allowed
          mechanical, electrical, and controls subteams to coordinate spatially
          and avoid interference inside the case.
        </p>
        <p>
          I also designed a <strong>control panel board</strong> with a keyed
          high-voltage switch, a conspicuous <strong>SCRAM</strong> (emergency
          shutdown) button, gas-flow switch, and nine BNC connectors. The layout
          balanced clear labeling and human factors with mechanical tolerances
          and wiring access.
        </p>
        <p>
          Another major contribution was developing a{" "}
          <strong>motorized actuation concept</strong> to replace the manual
          vacuum-chamber knob. I iterated on printed adapters, evaluated torque
          requirements, and stiffened designs to better survive repeated use.
          Moving toward remote actuation is a key step for running high-voltage
          experiments more safely and consistently.
        </p>

        <a
          href="https://www.vanderbiltfusion.org/"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-2 rounded-2xl border border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-900"
        >
          Visit Project Website
        </a>
      </section>
    </main>
  );
}
