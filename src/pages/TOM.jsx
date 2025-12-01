import React from "react";
import { Link } from "react-router-dom";

export default function TOM() {
  const base = import.meta.env.BASE_URL;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">

      {/* Back Link */}
      <Link to="/#projects" className="text-sm opacity-70 hover:opacity-100">
        ← Back to Projects
      </Link>

      {/* Header */}
      <header className="mt-2 flex items-center gap-4">
        <img
          src={`${base}images/tom-logo.png`}
          alt="TOM logo"
          className="h-10 w-auto"
        />

        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            T.O.M. Makeathon — Assistive Technology
          </h1>

          <div className="mt-2 flex flex-wrap gap-2">
            {[
              "Human-Centered Design",
              "3D Printing",
              "CAD",
              "Rapid Prototyping",
            ].map((t) => (
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

      {/* ---------------- IMAGE GALLERY ---------------- */}
      <section className="mt-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {["tom-sketch.jpg", "tom-team.jpg", "tom-wheelchair.jpg"].map(
            (f) => (
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
            )
          )}
        </div>
      </section>

      {/* ---------------- LONGER BLURB ---------------- */}
      <section className="mt-10 space-y-4 text-neutral-300 leading-relaxed">
        <p>
          The Vanderbilt Tikkun Olam Makers (T.O.M.) Makeathon brings together
          engineers, designers, and community members to build customized
          assistive devices for “need-knowers” — individuals who rely on
          practical, personalized solutions for everyday independence. Our team
          worked with <strong>Miyako</strong>, a young girl with physical
          mobility limitations who needed improved access to play, comfort, and
          daily activities.
        </p>

        <p>
          Over 48 hours, we prototyped three functional devices: an adapted{" "}
          <strong>sock-aid</strong> for independent dressing, a{" "}
          <strong>sun-shade mount</strong> for her wheelchair, and a{" "}
          <strong>modular Nintendo Switch holder</strong> designed for both her
          wheelchair and her family car. Each device was built from direct
          interviews with the family, ensuring the solutions addressed real,
          immediate needs instead of generic assumptions.
        </p>

        <p>
          I led the design and fabrication of the Switch-mount system. Working
          from ergonomic measurements, I created a custom{" "}
          <strong>backplate</strong> for the car seat and a set of{" "}
          <strong>3D-printed clamps</strong> and{" "}
          <strong>ball-and-socket joints</strong> that ensured stable but fully
          adjustable screen viewing. Multiple collar sizes were produced to
          match differences between wheelchair tubing and vehicle hardware. The
          modularity allowed Miyako to reposition the Switch instantly and use
          it comfortably without straining her neck or arms.
        </p>

        <p>
          The Makeathon reinforced the importance of{" "}
          <strong>fast iteration, user-centered design, and creative
          prototyping</strong>. Our devices were delivered as fully functional
          prototypes, and Miyako’s family expressed how meaningful it was to see
          solutions built specifically for her needs.
        </p>

        <a
          href="https://www.vanderbilt.edu/the-wondry/tikkun-olam-makers-2023-makeathon/"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-2 rounded-2xl border border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-900"
        >
          Event Overview
        </a>
      </section>
    </main>
  );
}
