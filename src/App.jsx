export default function App() {
  const projects = [
    {
      title: "T.O.M. Makeathon — Assistive Tech",
      timeframe: "2024",
      tags: ["CAD", "3D Printing", "Human-Centered Design"],
      summary:
        "Led design/build on a sock-aid, sun-shade, and modular Switch mounts. Custom clamps/backplates delivered as working prototypes.",
    },
    {
      title: "Amblyopia Eye Patch Redesign",
      timeframe: "2024–2025",
      tags: ["Medical Device", "Arduino", "Prototyping"],
      summary:
        "Comfortable wrap-around patch + glasses insert with light sensing to detect peeking; electronics planned for Bluetooth feedback.",
    },
    {
      title: "Vanderbilt Fusion Project — Controls & Mechanisms",
      timeframe: "2024–Present",
      tags: ["SolidWorks", "Mechanisms", "Controls"],
      summary:
        "Modeled Pelican-case control panel. Designed motorized actuation to replace manual vacuum-chamber knob; iterated gearing & prints.",
    },
    {
      title: "AFAR — Field Archaeology Leadership",
      timeframe: "2017–2020",
      tags: ["Leadership", "Field Ops", "Public Speaking"],
      summary:
        "Team lead on cistern/hillside excavations; presented findings at international venues incl. National Museum of Finland.",
    },
  ];

  const experience = [
    {
      org: "Vanderbilt Aerospace Design Lab (VADL)",
      role: "Lead Payload Engineer",
      dates: "Aug 2025 – Present",
      bullets: [
        "Engineered retractable shovel payload with planetary gearbox for reliable soil collection on competition rocket.",
        "Ran design reviews, failure/risk analysis, and NASA-style documentation; mentored a small payload team.",
      ],
    },
    {
      org: "PAE Engineers (NYC)",
      role: "Mechanical Engineering Intern",
      dates: "May 2025 – Aug 2025",
      bullets: [
        "Designed HVAC duct layouts to ASHRAE standards; updated plumbing/MEP schematics and water riser diagrams.",
        "Performed load calcs, CFM sizing, and static pressure evaluations on exhaust runs.",
      ],
    },
    {
      org: "Huntington Ingalls Industries",
      role: "Mechanical Engineering Intern",
      dates: "Jun 2024 – Aug 2024",
      bullets: [
        "Built complex 3D models (e.g., 1.12M sq ft dry dock) and 2D drawings for naval renovations.",
        "Inspected USS John F. Kennedy systems: piping, electrical, and integrations.",
      ],
    },
  ];

  const skills = {
    Software: [
      "SolidWorks (CSWA)", "Inventor", "Fusion 360", "AutoCAD",
      "MATLAB", "Python", "LabVIEW", "Mathematica", "Maya"
    ],
    Hardware: [
      "Welding", "Soldering", "Machining (lathe, mill, bandsaw)",
      "Composites", "Vacuum forming", "Arduino"
    ],
    Other: ["Project leadership", "Design reviews", "Failure analysis", "Documentation"],
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 border-b border-neutral-900">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#about" className="font-semibold tracking-tight">Sean Confoy</a>
          <nav className="hidden md:flex gap-6 text-sm">
            {["About","Projects","Experience","Skills","Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="opacity-80 hover:opacity-100">
                {l}
              </a>
            ))}
          </nav>
          <a
            className="rounded-2xl border border-neutral-800 px-3 py-1.5 text-sm hover:bg-neutral-900"
            href="mailto:seanconfoy@gmail.com"
          >
            Email
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section id="about" className="py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Mechanical Engineer & Payload Designer
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-300">
            Vanderbilt B.E. (GPA 3.99). Hands-on builder across aerospace payloads, mechanisms, and controls —
            experience spanning student rocketry, naval systems, and assistive/medical devices.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-2xl border border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-900"
              href="https://www.linkedin.com/in/sean-confoy/" target="_blank" rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="rounded-2xl border border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-900"
              href="#"
              onClick={(e) => { e.preventDefault(); alert('Hook this up to your hosted PDF'); }}
            >
              Download Résumé
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-12 md:py-20">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
            <p className="text-sm opacity-70">Selected work</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 hover:shadow-2xl hover:shadow-black/30"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-medium tracking-tight">{p.title}</h3>
                  <span className="text-xs opacity-70">{p.timeframe}</span>
                </div>
                <p className="mt-3 text-sm text-neutral-300">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-neutral-800 px-2 py-0.5 text-xs opacity-80">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
          <ol className="mt-8 relative border-s border-neutral-900">
            {experience.map((e, idx) => (
              <li key={idx} className="mb-10 ms-6">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950">
                  <span className="h-2 w-2 rounded-full bg-neutral-400" />
                </span>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-medium tracking-tight">{e.role}</h3>
                  <span className="text-sm opacity-70">{e.org}</span>
                  <span className="ms-auto text-xs opacity-60">{e.dates}</span>
                </div>
                <ul className="mt-3 list-disc ps-5 text-sm text-neutral-300">
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* Skills */}
        <section id="skills" className="py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="rounded-2xl border border-neutral-900 p-5">
                <h3 className="font-medium tracking-tight">{cat}</h3>
                <ul className="mt-3 space-y-1 text-sm text-neutral-300">
                  {items.map((it) => <li key={it} className="opacity-90">{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
          <p className="mt-3 text-sm text-neutral-300 max-w-2xl">
            The quickest way to reach me is email or LinkedIn. I’m open to aerospace and robotics/mechatronics roles
            that combine mechanisms, prototyping, and systems work.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a className="rounded-2xl border border-neutral-800 px-4 py-2 hover:bg-neutral-900"
               href="mailto:seanconfoy@gmail.com">seanconfoy@gmail.com</a>
            <a className="rounded-2xl border border-neutral-800 px-4 py-2 hover:bg-neutral-900"
               href="https://www.linkedin.com/in/sean-confoy/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-900">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm opacity-70">
          © {new Date().getFullYear()} Sean Confoy. Built with React + Tailwind.
        </div>
      </footer>
    </div>
  );
}
