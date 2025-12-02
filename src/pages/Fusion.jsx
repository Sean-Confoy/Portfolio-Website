import React from "react";
import { Link } from "react-router-dom";

export default function Fusion() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[var(--color-muted)] hover:text-white transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-3 py-1 rounded-full border border-pink-500/30 text-pink-400 bg-pink-500/10">
              Research
            </span>
            <span className="text-sm text-[var(--color-muted)]">2023</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Fusion Project — Controls & Mechanisms
          </h1>
          <p className="text-lg text-[var(--color-muted)]">
            Contributing controls-side CAD and mechanical systems for a student-built fusion reactor.
          </p>
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {["pelican-case.png", "board.png", "motor.jpg"].map((img) => (
            <div key={img} className="aspect-[4/3] rounded-xl overflow-hidden bg-[var(--color-surface)]">
              <img
                src={`${base}images/${img}`}
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <div className="space-y-4 text-[var(--color-muted)] mb-8">
            <p>
              My role focused on <span className="text-white font-medium">controls-side CAD</span> and 
              <span className="text-white font-medium"> mechanical integration</span>, including enclosure 
              design, high-voltage routing, and mechanisms interfacing with the reactor's 
              vacuum chamber.
            </p>
            <p>
              The project required careful attention to EMI shielding, thermal management, 
              and safety interlocks—all designed for a high-voltage, high-vacuum operating 
              environment.
            </p>
            <p>
              Working on fusion technology provided exposure to interdisciplinary challenges 
              spanning electrical, mechanical, and nuclear engineering domains.
            </p>
          </div>

          {/* Contributions */}
          <h2 className="text-xl font-semibold mb-4">Key Contributions</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { title: "Controls Enclosure", desc: "Design with EMI shielding" },
              { title: "High-Voltage Routing", desc: "Safety interlock mechanisms" },
              { title: "Mechanical Interfaces", desc: "Vacuum chamber components" },
              { title: "Thermal Management", desc: "Solutions for power electronics" },
            ].map((item) => (
              <div key={item.title} className="bg-[var(--color-surface)] rounded-xl p-5 border border-[var(--color-border)]">
                <h3 className="font-semibold text-pink-400 mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
