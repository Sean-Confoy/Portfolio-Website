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
            Vanderbilt Fusion Project — Controls & Mechanisms
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
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Write-up */}
      <section className="mt-8 space-y-4 text-neutral-300">
        <p>
          The Vanderbilt Fusion Project is a student-run effort to design and
          operate an inertial electrostatic confinement reactor — a compact
          fusion device capable of generating over <strong>1 million fusion
          events per second</strong>.
        </p>

        <p>
          On the <strong>Controls Team</strong>, I contributed to both digital
          and hardware-side improvements for safer, more repeatable reactor
          operation. My early work involved fully modeling the internal geometry
          of a Pelican case to support <strong>panel, rail, and cable-routing
          integration</strong>. This CAD allowed mechanical, electrical, and
          controls subsystems to coordinate spatially before any hardware was
          built.
        </p>

        <p>
          I also designed a <strong>control panel board</strong> that
          incorporated a keyed high-voltage switch, a <strong>SCRAM</strong>
          (emergency shutdown) button, gas-flow switch, and nine BNC
          connector ports — all dimensioned and spaced properly within
          mechanical tolerances.
        </p>

        <p>
          A major contribution was developing a
          <strong> motorized actuation system</strong> to replace the manual
          vacuum-chamber knob. This involved designing printed adapters,
          investigating torque and gearing requirements, and testing revised
          versions with stiffer walls and better shaft interfaces. The
          automation work brought us closer to remotely controlled operation,
          improving safety for high-voltage runs.
        </p>

        {/* Link */}
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
