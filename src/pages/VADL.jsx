// src/pages/VADL.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function VADL() {
  const base = import.meta.env.BASE_URL;
  const FUSION_EMBED =
    "https://vanderbilt819.autodesk360.com/shares/public/SH90d2dQT28d5b602811501690b90a95d5a2?mode=embed";

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <Link to="/#projects" className="text-sm opacity-70 hover:opacity-100">
        ← Back to Projects
      </Link>

      {/* Header */}
      <header className="mt-2 flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <img
            src={`${base}images/VADL-Logo.png`}
            alt="VADL Logo"
            className="h-12 w-auto"
          />
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Vanderbilt Aerospace Design Lab — Retractable Shovel Payload
          </h1>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            "Lead Payload Engineer",
            "Mechanism Design",
            "Gear Train",
            "SolidWorks",
            "Rapid Prototyping",
            "Testing",
          ].map((t) => (
            <span
              key={t}
              className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* Images */}
      <section className="mt-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "shovel-extension.jpg", // new opening mechanism CAD
            "gear-train.png", // old gearbox CAD
            "physical-assembly.jpg", // physical old gearbox
          ].map((f) => (
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

      {/* Longer blurb with old vs new design */}
      <section className="mt-8 space-y-4 text-neutral-300 leading-relaxed">
        <p>
          As <strong>Lead Payload Engineer</strong>, I am responsible for
          designing the soil-collection mechanism that passively deploys, digs,
          and retracts using the rocket’s payload bay rotation. This year, I
          developed a <strong>new opening mechanism</strong> built around a{" "}
          <strong>50:1 gear reducer</strong> paired with a{" "}
          <strong>23-to-12 tooth sprocket reduction</strong>, giving an
          effective <strong>~100:1 ratio</strong> between payload bay rotation
          and the shovel hinge. The shovel only needs ~30 payload-bay rotations
          to collect the required soil volume, so the system is sized
          specifically for that operating window.
        </p>

        <p>
          In the new architecture, the <strong>non-rotating shaft</strong> is
          concentric with the smaller sprocket, and a chain connects the
          sprockets to drive the hinge. A <strong>bulkplate and M4 fasteners</strong>{" "}
          secure the reducer, shafts, and sprocket alignment. This redesign
          reduces failure points by relying on{" "}
          <strong>
            professionally machined parts, proper set-screw interfaces,
          </strong>{" "}
          and known manufacturing tolerances. Because the mechanism is powered
          passively by payload-bay rotation, it removes the need for additional
          actuators and simplifies the electrical system.
        </p>

        <p>
          The second image shows last year’s payload, which used a{" "}
          <strong>14-gear sandwiched gearbox</strong> at ~30:1. While it
          functioned, the design suffered from gear deflection, tolerance
          buildup, difficult assembly workflows, and backlash at the output
          gear. Under load, shafts slipped even with D-shafts and set screws,
          and the plastic gears deformed at the set-screw interface. Attempts to
          clamp the gearbox tighter or tweak fits still left unacceptable{" "}
          <strong>play and misalignment</strong>.
        </p>

        <p>
          We fully assembled and tested that design, shown in the third image,
          and it technically worked but was too fragile and complex to harden
          for launch. After field tests and full-airframe tip tests, we
          concluded that fixing it would require more effort than designing a
          new system informed by its shortcomings.
        </p>

        <p>
          The new mechanism has been fully CADed, is currently being assembled,
          and will undergo validation once integrated into the payload bay. It
          is expected to be <strong>more robust, manufacturable, and
          repeatable</strong> than the prior gearbox, while delivering the same
          soil-collection functionality with fewer failure modes.
        </p>

        <div className="rounded-2xl border border-neutral-900 p-5">
          <h2 className="font-medium tracking-tight">Highlights</h2>
          <ul className="mt-2 list-disc ps-5">
            <li>New ~100:1 reducer + sprocket system sized for passive use</li>
            <li>Professionally machined parts reduce tolerance issues</li>
            <li>Prior 14-gear system thoroughly tested and used as a lesson</li>
            <li>New mechanism in assembly; validation pending integration</li>
          </ul>
        </div>

        <a
          href="https://www.vadl.org/"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 rounded-2xl border border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-900"
        >
          Visit VADL Website
        </a>
      </section>

      {/* Small viewer like CAM */}
      <section className="mt-10">
        <h2 className="font-medium tracking-tight">
          Interactive Assembly (small viewer)
        </h2>
        <p className="mt-2 text-neutral-300 text-sm">
          Drag to orbit, scroll to zoom, right-drag to pan.
        </p>

        <div className="mt-4 flex justify-center">
          <div className="w-full max-w-3xl aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-900">
            <iframe
              src={FUSION_EMBED}
              title="VADL Assembly Viewer"
              className="h-full w-full"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-3 text-center">
          <a
            href={FUSION_EMBED}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-sm opacity-80 hover:opacity-100 underline"
          >
            Open full-size viewer in a new tab
          </a>
        </div>
      </section>
    </main>
  );
}
