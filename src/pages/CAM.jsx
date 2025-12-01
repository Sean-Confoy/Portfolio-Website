import React from "react";
import { Link } from "react-router-dom";

export default function CAM() {
  const base = import.meta.env.BASE_URL;
  const FUSION_EMBED =
    "https://vanderbilt819.autodesk360.com/shares/public/SH90d2dQT28d5b60281194afa67d1e0644a2?mode=embed";

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">

      {/* Back link */}
      <Link to="/#projects" className="text-sm opacity-70 hover:opacity-100">
        ← Back to Projects
      </Link>

      {/* Header */}
      <header className="mt-2 flex flex-col gap-2">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
          CAM Project — Walking Motion Simulation
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {[
            "Dynacam",
            "SolidWorks",
            "MATLAB",
            "Mechanism Design",
            "Physical Prototyping",
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

      {/* ---------------- TOP IMAGE GALLERY ---------------- */}
      <section className="mt-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            "cam-physical-model.jpg",
            "cam-assembly.jpg",
            "follower-motion.jpg",
          ].map((f, idx) => (
            <div
              key={f}
              className={`overflow-hidden bg-neutral-900/10 ${
                idx === 1
                  ? "aspect-[5/3]" // slightly wider for the CAD BOM image
                  : "aspect-[4/3]"
              }`}
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

      {/* ---------------- LONGER PROJECT WRITE-UP ---------------- */}
      <section className="mt-10 space-y-4 text-neutral-300 leading-relaxed">

        <p>
          This project focused on designing and building a{" "}
          <strong>cam–follower mechanism</strong> capable of replicating
          the vertical force profile of a human step. The cam profile was
          generated in <strong>Dynacam</strong> to produce smooth displacement,
          velocity, acceleration, and jerk curves that closely matched the
          biomechanics of walking.
        </p>

        <p>
          To validate the theoretical cam profile, I used{" "}
          <strong>MATLAB</strong> to run numerical checks ensuring the motion
          curve translated into realistic stepping dynamics. The geometry was
          then modeled and assembled in <strong>SolidWorks</strong>, with
          careful attention to alignment of the cam, follower, and spring-loaded
          elements.
        </p>

        <p>
          A prototype was constructed with accessible materials:{" "}
          <strong>ball bearings</strong> for smooth follower travel,{" "}
          <strong>springs</strong> to create resistive force, and a drill-powered
          cam driver for simple actuation. During testing, the follower motion
          closely traced the desired path and produced a step-like ground
          contact force profile.
        </p>

        <p>
          This project highlighted the importance of linking theoretical motion
          design with hands-on prototyping — showing how a simulated cam profile
          can be validated with real hardware. It strengthened my skills in CAD,
          mechanism synthesis, data validation, and iterative testing while
          demonstrating a functional representation of biomechanical motion.
        </p>
      </section>

      {/* ---------------- INTERACTIVE AUTODESK VIEWER ---------------- */}
      <section className="mt-12">
        <h2 className="font-medium tracking-tight">Interactive Assembly (small viewer)</h2>
        <p className="mt-1 text-neutral-400 text-sm">
          Drag to orbit, scroll to zoom, right-drag to pan.
        </p>

        <div className="mt-4 flex justify-center">
          <div className="w-full max-w-3xl aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-900">
            <iframe
              src={FUSION_EMBED}
              title="CAM Assembly Viewer"
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
            className="text-sm opacity-80 hover:opacity-100 underline"
          >
            Open full-size viewer in a new tab
          </a>
        </div>
      </section>
    </main>
  );
}
