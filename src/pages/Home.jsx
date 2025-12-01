import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const base = import.meta.env.BASE_URL;

  const projects = [
    {
      title: "VADL — Retractable Shovel Payload",
      img: "shovel-extension.jpg",
      link: "/#/projects/vadl",
      summary:
        "Lead Payload Engineer for a soil-collection mechanism using a compact gear-train, laser-cut laminations, and high-G-rated actuation.",
    },
    {
      title: "T.O.M. Makeathon — Assistive Tech",
      img: "tom-wheelchair.jpg",
      link: "/#/projects/tom",
      summary:
        "Delivered adapted Switch mounts, sun shade, and sock-aid for a local need-knower using human-centered design and rapid prototyping.",
    },
    {
      title: "CAM Project — Walking Simulation",
      img: "cam-physical-model.jpg",
      link: "/#/projects/cam",
      summary:
        "Designed a cam-follower system with Dynacam + MATLAB curves, SolidWorks assembly, and validated prototype ground-force replication.",
    },
    {
      title: "Fusion Project — Controls & Mechanisms",
      img: "pelican-case.png",
      link: "/#/projects/fusion",
      summary:
        "Modeled control-panel systems, Pelican-case internals, and motorized vacuum-chamber interfaces for an inertial fusion reactor effort.",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

      {/* LEFT — About section */}
      <section className="md:col-span-1 space-y-6">
        <img
          src={`${base}images/headshot.PNG`}
          alt="Headshot"
          className="h-36 w-36 rounded-full object-cover border border-neutral-800"
        />

        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Sean Confoy</h1>
          <p className="text-sm opacity-80 mt-2">
            Mechanical Engineer @ Vanderbilt University. Lead Payload Engineer for
            NASA-style student rocketry (VADL). Background in mechanism design,
            CAD modeling, rapid prototyping, and engineering research spanning
            aerospace, robotics, and fusion systems.
          </p>
        </div>

        <div className="space-y-1 text-sm opacity-80">
          <p>📍 Nashville, TN</p>
          <p>
            <a
              href="https://www.linkedin.com/in/sean-confoy/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:opacity-100"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a
              href="mailto:seanconfoy@gmail.com"
              className="underline hover:opacity-100"
            >
              seanconfoy@gmail.com
            </a>
          </p>
        </div>

        <a
          href={`${base}Sean-Confoy-Resume.pdf`}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 rounded-2xl border border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-900"
        >
          Download Résumé
        </a>
      </section>

      {/* RIGHT — Project Grid */}
      <section className="md:col-span-2">
        <h2 classname="text-xl font-semibold mb-4">Projects</h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((p) => (
            <Link
              key={p.title}
              to={p.link}
              className="block group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-900/20 border border-neutral-900">
                <img
                  src={`${base}images/${p.img}`}
                  alt=""
                  className="h-full w-full object-cover group-hover:opacity-90 transition"
                />
              </div>

              <h3 className="mt-3 font-medium group-hover:underline">
                {p.title}
              </h3>

              <p className="text-sm opacity-70 mt-1">{p.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
