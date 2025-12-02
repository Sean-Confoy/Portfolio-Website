import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "3.99", label: "GPA", color: "text-blue-400" },
  { value: "3", label: "Internships", color: "text-purple-400" },
  { value: "10+", label: "Projects", color: "text-green-400" },
  { value: "2+", label: "Years Research", color: "text-pink-400" },
];

const projects = [
  {
    title: "Vanderbilt Aerospace Design Lab — NASA USLI",
    slug: "vadl",
    image: "newgearbox.jpg",
    date: "2023 - Present",
    tag: "VADL",
    description:
      "Lead Payload Engineer designing soil-collection mechanisms with ~100:1 gear reduction for NASA-style student rocketry competition.",
  },
  {
    title: "T.O.M. Makeathon — Assistive Technology",
    slug: "tom",
    image: "tom-wheelchair.jpg",
    date: "2023",
    tag: "Makeathon",
    description:
      "Designed custom Switch mounts, sun-shade, and sock-aid devices for individuals with mobility challenges during 48-hour design sprint.",
  },
  {
    title: "CAM Project — Walking Simulation",
    slug: "cam",
    image: "cam-physical-model.jpg",
    date: "2023",
    tag: "Coursework",
    description:
      "Cam-follower mechanism simulating human footstep dynamics using Dynacam and MATLAB motion curve optimization.",
  },
  {
    title: "Fusion Reactor — Controls & Mechanisms",
    slug: "fusion",
    image: "pelican-case.png",
    date: "2023",
    tag: "Research",
    description:
      "Controls-side CAD and mechanical integration for student-built inertial electrostatic confinement fusion reactor.",
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

export default function Home() {
  const base = import.meta.env.BASE_URL;

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
                Mechanical Engineer | Student
              </p>
              <p className="text-sm text-[var(--color-muted)] mb-6">
                Nashville, TN
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8 max-w-xl">
                Mechanical engineering student at Vanderbilt University with hands-on 
                experience from VADL rocketry and research projects. Currently serving as 
                <span className="text-white font-medium"> Lead Payload Engineer</span> for 
                Vanderbilt's Aerospace Design Lab, where I design mechanisms for NASA-style 
                student launch competitions. Passionate about turning complex engineering 
                challenges into elegant, functional solutions.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                <a
                  href={`${base}Sean-Confoy-Resume.pdf`}
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

            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="profile-ring">
                <img
                  src={`${base}images/headshot.PNG`}
                  alt="Sean Confoy"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover"
                />
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

      {/* About Section */}
      <section id="about" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-96">
              <img
                src={`${base}images/headshot.PNG`}
                alt="Sean working"
                className="w-full aspect-[4/5] object-cover rounded-2xl"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-[var(--color-muted)]">
                <p>
                  I'm a Mechanical Engineering student at <span className="text-white font-medium">Vanderbilt University</span>, 
                  and I've been building things for as long as I can remember. That early interest in making things 
                  never went away—I love teaching myself new skills and diving deep into challenging projects.
                </p>
                <p>
                  My engineering journey has taken me through aerospace systems, assistive technology, and even 
                  fusion reactor development. I thrive on projects that demand creative problem-solving, whether 
                  it's designing gear trains that survive high-G launches or engineering components for experimental systems.
                </p>
                <p>
                  Outside of engineering, I'm passionate about staying active and spending time outdoors. You'll often 
                  find me <span className="text-white font-medium">rock climbing</span>, hitting the gym, or 
                  on the slopes <span className="text-white font-medium">snowboarding</span>. I also enjoy playing 
                  golf, reading, and most importantly, spending quality time with friends and family.
                </p>
              </div>
            </div>
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
            I've worked on a variety of projects, from NASA rocketry to assistive technology. 
            Here are a few of my favorites:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group bg-[var(--color-surface)] rounded-xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent-blue)] transition-colors"
              >
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
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-[var(--color-muted)]">
                      {project.date}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-muted)]">
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-muted)] line-clamp-3">
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
