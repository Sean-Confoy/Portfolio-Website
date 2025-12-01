import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "VADL — Retractable Shovel Payload",
    slug: "vadl",
    image: "newgearbox.jpg",
    tags: ["Lead Engineer", "Mechanism Design", "SolidWorks"],
    description:
      "Lead Payload Engineer for a soil-collection mechanism using gear reduction, chain drive, and high-G-rated hardware for NASA-style student rocketry.",
    accent: "amber",
  },
  {
    title: "T.O.M. Makeathon — Assistive Tech",
    slug: "tom",
    image: "tom-wheelchair.jpg",
    tags: ["Human-Centered Design", "3D Printing", "Rapid Prototyping"],
    description:
      "Designed custom Switch mounts, sun-shade, and sock-aid for a local need-knower using human-centered design principles.",
    accent: "emerald",
  },
  {
    title: "CAM Project — Walking Simulation",
    slug: "cam",
    image: "cam-physical-model.jpg",
    tags: ["Dynacam", "MATLAB", "Motion Analysis"],
    description:
      "Cam-follower system with Dynacam + MATLAB motion curves and a working prototype that matches footstep dynamics.",
    accent: "sky",
  },
  {
    title: "Fusion Project — Controls & Mechanisms",
    slug: "fusion",
    image: "pelican-case.png",
    tags: ["CAD", "Controls", "Fusion Reactor"],
    description:
      "Controls-side CAD and mechanisms for a student-built inertial electrostatic confinement fusion reactor.",
    accent: "violet",
  },
];

const accentColors = {
  amber: "from-amber-500/20 to-orange-500/10 border-amber-500/30 hover:border-amber-400/50",
  emerald: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 hover:border-emerald-400/50",
  sky: "from-sky-500/20 to-blue-500/10 border-sky-500/30 hover:border-sky-400/50",
  violet: "from-violet-500/20 to-purple-500/10 border-violet-500/30 hover:border-violet-400/50",
};

const tagColors = {
  amber: "bg-amber-500/10 text-amber-400",
  emerald: "bg-emerald-500/10 text-emerald-400",
  sky: "bg-sky-500/10 text-sky-400",
  violet: "bg-violet-500/10 text-violet-400",
};

export default function Home() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section id="about" className="grid lg:grid-cols-3 gap-12 items-start mb-24">
        {/* Left - Photo & Info */}
        <div className="lg:col-span-1">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl blur-xl" />
            <img
              src={`${base}images/headshot.PNG`}
              alt="Sean Confoy"
              className="relative w-40 h-40 rounded-2xl object-cover border border-white/10"
            />
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Sean Confoy
              </h1>
              <p className="text-[var(--color-muted)] mt-1">
                Mechanical Engineering @ Vanderbilt
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 text-[var(--color-muted)]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Nashville, TN
              </div>
              <a
                href="https://www.linkedin.com/in/sean-confoy/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[var(--color-muted)] hover:text-amber-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:seanconfoy@gmail.com"
                className="flex items-center gap-2 text-[var(--color-muted)] hover:text-amber-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                seanconfoy@gmail.com
              </a>
            </div>

            <a
              href={`${base}Sean-Confoy-Resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-amber-500 text-[var(--color-midnight)] font-medium rounded-lg hover:bg-amber-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Résumé
            </a>
          </div>
        </div>

        {/* Right - Bio */}
        <div className="lg:col-span-2 space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[var(--color-light)] leading-relaxed">
              I'm a Mechanical Engineering student at Vanderbilt University, passionate about 
              turning complex engineering challenges into elegant, functional solutions.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              As <span className="text-amber-400 font-medium">Lead Payload Engineer</span> for 
              the Vanderbilt Aerospace Design Lab (VADL), I design mechanisms for NASA-style 
              student rocketry competitions. My experience spans mechanism design, CAD, rapid 
              prototyping, and research across aerospace, assistive devices, and fusion systems.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              I thrive on projects that demand creative problem-solving, whether it's designing 
              gear trains that survive high-G launches, building assistive technology for 
              individuals with mobility challenges, or engineering components for fusion reactors.
            </p>
          </div>

          {/* Skills */}
          <div className="pt-4">
            <h3 className="text-sm font-medium text-[var(--color-muted)] uppercase tracking-wider mb-3">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "SolidWorks",
                "MATLAB",
                "3D Printing",
                "Mechanism Design",
                "Gear Systems",
                "Rapid Prototyping",
                "CAM",
                "GD&T",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-[var(--color-slate)] text-[var(--color-light)] rounded-lg border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Featured Projects</h2>
          <p className="text-[var(--color-muted)] mb-8">
            A selection of engineering work from research, competitions, and coursework.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.slug}>
                <Link
                  to={`/projects/${project.slug}`}
                  className={`group block h-full p-1 rounded-2xl bg-gradient-to-br ${accentColors[project.accent]} border transition-all duration-300`}
                >
                  <div className="h-full bg-[var(--color-charcoal)] rounded-xl overflow-hidden">
                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={`${base}images/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs px-2 py-1 rounded-md ${tagColors[project.accent]}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--color-muted)] line-clamp-2">
                        {project.description}
                      </p>

                      {/* Arrow */}
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] group-hover:text-white transition-colors">
                        View Project
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
