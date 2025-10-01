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
       <section id="about" className="py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
  <img
    src={`${import.meta.env.BASE_URL}images/headshot.PNG`}
    alt="Sean Confoy headshot"
    className="h-40 w-40 rounded-full object-cover border-2 border-neutral-800 shadow-lg"
  />

  <div>
    <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
      Mechanical Engineer & Payload Designer
    </h1>
    <p className="mt-4 max-w-2xl text-neutral-300">
      Vanderbilt B.E. (GPA 3.99). Hands-on builder across aerospace payloads, mechanisms,
      and controls — experience spanning student rocketry, naval systems, and assistive/medical devices.
    </p>
    <div className="mt-6 flex flex-wrap gap-3">
      <a className="rounded-2xl border border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-900"
         href="https://www.linkedin.com/in/sean-confoy/"
         target="_blank"
         rel="noreferrer">
        LinkedIn
      </a>
      <a className="rounded-2xl border border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-900"
         href={`${import.meta.env.BASE_URL}Sean-Confoy-Resume.pdf`}
         target="_blank"
         rel="noreferrer">
        Download Résumé
      </a>
    </div>
  </div>
</section>


       {/* Projects */}
<section id="projects" className="py-12 md:py-20">
  <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
  <p className="text-sm opacity-70">Selected work and case studies</p>

  <div className="mt-10 space-y-20">
    {/* ================== VADL — Retractable Shovel Payload ================== */}
<section className="py-16 border-b border-neutral-900">
  <div className="flex items-center gap-4 mb-6">
    <h2 className="text-2xl font-semibold tracking-tight">
      Vanderbilt Aerospace Design Lab (VADL) — Retractable Shovel Payload
    </h2>
  </div>

  {/* Image grid — aligned, no borders */}
  <div className="mt-6 mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900/10">
      <img
        src={`${import.meta.env.BASE_URL}images/assembly-shovel.png`}
        alt="Retractable shovel CAD assembly"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900/10">
      <img
        src={`${import.meta.env.BASE_URL}images/gear-train.png`}
        alt="Gear-train concept for opening mechanism"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900/10">
      <img
        src={`${import.meta.env.BASE_URL}images/physical-assembly.jpg`}
        alt="Physical payload assembly on bench"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  </div>

  {/* Blurb */}
  <p className="text-neutral-300 mb-4">
    As <strong>Lead Payload Engineer</strong> on VADL, I own the mechanisms for a soil-collection
    payload that deploys, digs, and retracts on our competition rocket. The system is designed
    for reliability under mass/volume constraints, high-g launch loads, and vibration.
  </p>

  <p className="text-neutral-300 mb-4">
    I recently designed a new <strong>opening mechanism</strong> based on a compact
    <strong> gear train</strong>: a high-RPM motor drives a small pinion, stepping through staged
    reductions to a <strong>sector gear</strong> that rotates the shovel via a connecting shaft. The
    train provides the required torque multiplication while keeping the actuator packageable
    around the payload bay.
  </p>

  <p className="text-neutral-300 mb-4">
    The design was modeled in <strong>SolidWorks</strong>, iterated with quick prints and laser-cut
    plates, and assembled with standard hardware and bushings. Bench tests demonstrated
    repeatable deployment and retraction; integration with avionics for commanded actuation is
    in progress.
  </p>

  {/* Tags */}
  <div className="mt-4 flex flex-wrap gap-2">
    <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">Aerospace</span>
    <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">Mechanism Design</span>
    <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">Gear Train</span>
    <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">SolidWorks</span>
    <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">Rapid Prototyping</span>
    <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">Testing</span>
  </div>
</section>

    {/* ================== T.O.M. Makeathon ================== */}
    <article>
      <div className="flex items-center gap-4 mb-6">
        <img
          src={`${import.meta.env.BASE_URL}images/tom-logo.png`}
          alt="Tikkun Olam Makers logo"
          className="h-12 w-auto"
          loading="lazy"
        />
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
          T.O.M. Makeathon — Assistive Technology
        </h3>
      </div>

      {/* Images row — uniform size, smaller */}
      <div className="mt-6 mb-6 grid gap-6 sm:grid-cols-3">
        <div className="aspect-[4/3] overflow-hidden rounded-xl">
          <img
            src={`${import.meta.env.BASE_URL}images/tom-sketch.jpg`}
            alt="Sketch of Switch backplate"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-xl">
          <img
            src={`${import.meta.env.BASE_URL}images/tom-team.jpg`}
            alt="Team group photo"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-xl">
          <img
            src={`${import.meta.env.BASE_URL}images/tom-wheelchair.jpg`}
            alt="Testing wheelchair mount"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Blurb — match Fusion spacing */}
      <p className="text-neutral-300 mb-4">
        The T.O.M. Makeathon is a global organization that sponsors annual events aimed at creating
        solutions to everyday challenges faced by people with disabilities. Vanderbilt hosts a
        student-led event each year to build technology for “need-knowers” who apply for aid.
      </p>
      <p className="text-neutral-300 mb-4">
        My team worked with a young girl named <strong>Miyako</strong>, diagnosed with a condition similar
        to scoliosis and cerebral palsy, to improve her daily tasks and hobbies. We prototyped three
        solutions: (1) an adapted <strong>sock-aid tool</strong>, (2) a <strong>sun shade</strong>, and
        (3) a <strong>Nintendo Switch mount</strong> for both her wheelchair and family car.
      </p>
      <p className="text-neutral-300 mb-4">
        I led the Switch-mount effort: adapting a ball-and-socket holder, designing a
        <strong> custom backplate</strong> for the car seat, and 3D-printing
        <strong> clamps and collars</strong> for her wheelchair. All devices were delivered as working
        prototypes, and Miyako’s family was extremely grateful.
      </p>

      <a
        href="https://www.vanderbilt.edu/the-wondry/tikkun-olam-makers-2023-makeathon/"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-4 rounded-2xl border border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-900"
      >
        Visit Project Website
      </a>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">Human-Centered Design</span>
        <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">3D Printing</span>
        <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">CAD</span>
        <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">Rapid Prototyping</span>
      </div>
    </article>

    {/* ================== CAM Project ================== */}
    <section className="py-16 border-b border-neutral-900">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={`${import.meta.env.BASE_URL}images/cam-logo.png`}
          alt="Cam project logo"
          className="h-12 w-auto"
        />
        <h2 className="text-2xl font-semibold tracking-tight">
          CAM Project — Walking Motion Simulation
        </h2>
      </div>

      {/* Image grid */}
      <div className="mt-6 mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900/10">
          <img
            src={`${import.meta.env.BASE_URL}images/cam-assembly.jpg`}
            alt="CAM assembly rendering"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900/10">
          <img
            src={`${import.meta.env.BASE_URL}images/follower-motion.jpg`}
            alt="Follower motion graph"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900/10">
          <img
            src={`${import.meta.env.BASE_URL}images/cam-physical-model.jpg`}
            alt="Physical cam model"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <p className="text-neutral-300 mb-4">
        This project focused on designing and prototyping a <strong>cam–follower system</strong> to replicate
        the force a human foot applies to the ground during walking. Using <strong>Dynacam</strong>,
        <strong> MATLAB</strong>, and <strong>SolidWorks</strong>, we derived smooth displacement, velocity,
        acceleration, and jerk curves that satisfied dwell, finite-jerk, and pressure-angle constraints.
      </p>

      <p className="text-neutral-300 mb-4">
        I contributed to <strong>3D CAD modeling</strong>, assemblies, and motion analysis, as well as the final
        documentation. The prototype incorporated <strong>ball bearings</strong>, <strong>springs</strong>, and a
        <strong> drill-powered cam driver</strong>, and it traced the target displacement curve closely while
        simulating foot-stepping motion.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">Dynacam</span>
        <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">SolidWorks</span>
        <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">MATLAB</span>
        <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">Mechanism Design</span>
        <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">Physical Prototyping</span>
      </div>
    </section>
  </div>
</section>

{/* ================== Fusion Project ================== */}
<section className="py-16 border-b border-neutral-900">
  <div className="flex items-center gap-4 mb-6">
    <img
      src={`${import.meta.env.BASE_URL}images/fusion-logo.png`}
      alt="Vanderbilt Fusion logo"
      className="h-12 w-auto"
    />
    <h2 className="text-2xl font-semibold tracking-tight">
      Vanderbilt Fusion Project — Student Fusion Reactor
    </h2>
  </div>

  {/* Image grid — clean, aligned, no borders */}
  <div className="mt-6 mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900/10">
      <img
        src={`${import.meta.env.BASE_URL}images/pelican-case.png`}
        alt="Pelican case CAD model"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900/10">
      <img
        src={`${import.meta.env.BASE_URL}images/board.png`}
        alt="Control panel CAD model"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900/10">
      <img
        src={`${import.meta.env.BASE_URL}images/motor.jpg`}
        alt="Motorized switch concept"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  </div>

  <p className="text-neutral-300 mb-4">
    The Vanderbilt Fusion Project is a student-run organization developing a soccer ball-sized
    reactor capable of achieving <strong>over 1 million fusion events per second</strong> at temperatures
    exceeding 400 million °C. Beyond technical development, the group engages in outreach with
    universities and companies, making the platform accessible for scaled-down fusion research.
  </p>
  <p className="text-neutral-300 mb-4">
    As a member of the <strong>Controls Team</strong>, I contributed to the design and automation of
    reactor subsystems. Early on, I created a detailed CAD model of a Pelican case interior to house
    rails and control circuitry, ensuring new components could be integrated without interference.
  </p>
  <p className="text-neutral-300 mb-4">
    I also designed a <strong>control panel board</strong> with cutouts for a keyed high-voltage switch,
    SCRAM emergency shutdown button, gas-flow toggle, and nine BNC connector ports, dimensioned
    to fit reliably within the reactor’s systems.
  </p>
  <p className="text-neutral-300 mb-4">
    Finally, I worked on automating the reactor’s manual vacuum knob by designing and testing
    motor-driven attachments with increased torque and durability. These iterations brought the
    team closer to safely operating the chamber remotely.
  </p>

  <a
    href="https://www.vanderbiltfusion.org/"
    target="_blank"
    rel="noreferrer"
    className="inline-block mt-4 rounded-2xl border border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-900"
  >
    Visit Project Website
  </a>

  <div className="mt-4 flex flex-wrap gap-2">
    <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">Fusion Research</span>
    <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">Controls</span>
    <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">CAD</span>
    <span className="rounded-2xl bg-neutral-900 px-3 py-1 text-xs">Automation</span>
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
