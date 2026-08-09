import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "3.99", label: "GPA", color: "text-blue-400" },
  { value: "4", label: "Engineering Roles", color: "text-purple-400" },
  { value: "7+", label: "Projects", color: "text-green-400" },
  { value: "10+", label: "Design Tools", color: "text-pink-400" },
];

const featuredProjects = [
  {
    title: "The Boring Company — Utility Extension Subsystem",
    slug: "boring",
    image: "boring-company-logo-4k.png",
    logoOnBlack: true,
    date: "2026 - Present",
    tag: "TBC",
    description:
      "Owning the utility extension subsystem that supplies boring machines with grout, accelerant, and other fluids as they mine further into a tunnel.",
  },
  {
    title: "Vanderbilt Aerospace Design Lab — NASA USLI",
    slug: "vadl",
    image: "payload.jpg",
    date: "Aug 2025 - May 2026",
    tag: "VADL",
    description:
      "Lead Payload Engineer developing an autonomous soil-collection system for NASA Student Launch. 2nd Overall and Payload Award among 33 universities.",
  },
];

const projects = [
  {
    title: "T.O.M. Makeathon — Assistive Technology",
    slug: "tom",
    image: "tom-wheelchair.jpg",
    date: "Sept 2024 - Sept 2025",
    tag: "Makeathon",
    description:
      "Designed custom Switch mounts, sun-shade, and sock-aid devices for individuals with mobility challenges during 48-hour design sprint.",
  },
  {
    title: "CAM Project — Walking Simulation",
    slug: "cam",
    image: "camfollower.jpg",
    date: "Sept 2024 - Dec 2024",
    tag: "Coursework",
    description:
      "Cam-follower mechanism simulating human footstep dynamics using Dynacam and MATLAB motion curve optimization.",
  },
  {
    title: "Machinist's Hammer — Precision Manufacturing",
    slug: "hammer",
    image: "hammer-full (1).png",
    date: "Jan 2024 - May 2024",
    tag: "Machining",
    description:
      "Fully functional machinist's hammer machined from 1018 steel using lathe, mill, bandsaw, threading, and knurling operations.",
  },
];

const skills = [
  "SolidWorks",
  "MATLAB",
  "3D Printing",
  "Mechanism Design",
  "Gear Systems",
  "Rapid Prototyping",
  "GD&T",
  "CAM",
  "Technical Drawing",
  "FEA",
];

const aboutPhotos = ["about11.JPG", "about22.jpeg", "about33.JPG", "about44.JPG"];

export default function Home() {
  const base = import.meta.env.BASE_URL;
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % aboutPhotos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="min-h-[80vh] flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm <span className="text-blue-400">Sean Confoy</span>
              </h1>
              <p className="text-lg text-[var(--color-muted)] mb-2">
                Mechanical Engineer
              </p>
              <p className="text-sm text-[var(--color-muted)] mb-6">
                The Boring Company | Bastrop, TX
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4 max-w-xl">
                I&apos;m a Mechanical Engineer who graduated from Vanderbilt University May 2026 with deep
                hands-on experience in complex mechanism design, rapid prototyping, and testing. I
                currently work for <span className="text-white font-medium">The Boring Company (TBC)</span> in
                Bastrop, TX where I am in charge of the utility extension subsystem to provide the
                boring machines with grout, accelerant, and other necessary fluids as they mine further
                into a tunnel. Before TBC, I served as the{" "}
                <span className="text-white font-medium">Lead Payload Engineer</span> for the Vanderbilt
                Aerospace Design Lab (VADL), where I designed an autonomous soil-collection payload for
                NASA&apos;s USLI competition—integrating gear reducers, a belt and pulley drive, and soil
                sensors to reliably collect and analyze soil after rocket landing.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4 max-w-xl">
                I&apos;m driven by building mechanisms that actually work under real constraints—tight mass
                allowance, limited power, difficult-to-model load cases, and rugged field conditions.
                Whether it&apos;s iterating gearbox designs, running FEA and SolidWorks assemblies, or
                troubleshooting chain tensioners at 2 a.m., I enjoy translating complicated/novel
                engineering challenges into clean, functional, and manufacturable hardware.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8 max-w-xl">
                Outside the lab, I like to stay active. I love{" "}
                <span className="text-white font-medium">rock climbing</span>, lifting, running around
                outside, and <span className="text-white font-medium">snowboarding</span> whenever I can
                make the time. I also enjoy playing golf, reading, and spending time with friends and
                family—anything that gives me balance and keeps life fun.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                <a
                  href={`${base}Sean-Confoy-Resume.pdf?v=2026-08-09`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Resume
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/sean-confoy/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-[var(--color-surface)] hover:bg-[var(--color-border)] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:seanconfoy@gmail.com"
                    className="p-2.5 rounded-lg bg-[var(--color-surface)] hover:bg-[var(--color-border)] transition-colors"
                    aria-label="Email"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Cycling photos */}
            <div className="flex-shrink-0 w-72 md:w-96 lg:w-[28rem]">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[var(--color-surface)]">
                {aboutPhotos.map((photo, index) => (
                  <img
                    key={photo}
                    src={`${base}images/${photo}`}
                    alt="Sean Confoy"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      index === currentPhoto ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {aboutPhotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhoto(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentPhoto
                          ? "bg-white w-6"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`View photo ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[var(--color-surface)] rounded-xl p-6 text-center border border-[var(--color-border)]"
              >
                <p className={`text-3xl md:text-4xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-sm text-[var(--color-muted)] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
          <p className="text-center text-[var(--color-muted)] mb-12 max-w-2xl mx-auto">
            I&apos;ve worked on a variety of projects, from tunnel systems to NASA rocketry.
            Here are a few of my favorites:
          </p>

          {/* Featured: TBC + VADL */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group bg-[var(--color-surface)] rounded-xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent-blue)] transition-colors"
              >
                <div className={`aspect-[16/9] overflow-hidden ${project.logoOnBlack ? "bg-black" : "bg-[var(--color-bg)]"}`}>
                  {project.image ? (
                    <img
                      src={`${base}images/${encodeURIComponent(project.image)}`}
                      alt={project.title}
                      className={`w-full h-full ${
                        project.logoOnBlack
                          ? "object-cover"
                          : "object-cover group-hover:scale-105 transition-transform duration-500"
                      }`}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-orange-500/20 via-[var(--color-surface)] to-[var(--color-bg)]">
                      <p className="text-3xl md:text-4xl font-bold tracking-tight text-orange-300">
                        TBC
                      </p>
                      <p className="text-sm text-[var(--color-muted)]">The Boring Company</p>
                    </div>
                  )}
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-[var(--color-muted)]">{project.date}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-muted)]">
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-[var(--color-muted)] leading-relaxed">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Other projects */}
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group bg-[var(--color-surface)] rounded-xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent-blue)] transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={`${base}images/${encodeURIComponent(project.image)}`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-base mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-[var(--color-muted)]">{project.date}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-muted)]">
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--color-muted)] line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 border-t border-[var(--color-border)]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-[var(--color-muted)] mb-8">
            I'm always open to discussing new projects, opportunities, or just chatting about engineering.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:seanconfoy@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              seanconfoy@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/sean-confoy/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-surface)] hover:bg-[var(--color-border)] border border-[var(--color-border)] font-medium rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto text-center text-sm text-[var(--color-muted)]">
          © {new Date().getFullYear()} Sean Confoy. Built with React.
        </div>
      </footer>
    </div>
  );
}
