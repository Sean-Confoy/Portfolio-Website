import React from "react";
import { Link } from "react-router-dom";

export default function CAM() {
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
            <span className="text-xs px-3 py-1 rounded-full border border-purple-500/30 text-purple-400 bg-purple-500/10">
              Coursework
            </span>
            <span className="text-sm text-[var(--color-muted)]">2023</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            CAM Project — Walking Simulation
          </h1>
          <p className="text-lg text-[var(--color-muted)]">
            Designing a cam-follower mechanism that simulates human footstep dynamics.
          </p>
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {["cam-physical-model.jpg", "cam-assembly.jpg", "follower-motion.jpg"].map((img) => (
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
              Using <span className="text-white font-medium">Dynacam</span> and <span className="text-white font-medium">MATLAB</span>, 
              I developed motion curves that replicate the rise-dwell-fall pattern of a foot during 
              the gait cycle.
            </p>
            <p>
              The cam profile was optimized for smooth acceleration profiles while minimizing 
              jerk and pressure angle constraints. The physical prototype validates the theoretical 
              motion curves.
            </p>
            <p>
              Key challenges included balancing desired motion against practical constraints like 
              maximum pressure angle, cam size limitations, and follower spring requirements.
            </p>
          </div>

          {/* Technical Approach */}
          <h2 className="text-xl font-semibold mb-4">Technical Approach</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { title: "Dynacam", desc: "Cam profile generation and analysis" },
              { title: "MATLAB", desc: "Motion curve optimization" },
              { title: "SolidWorks", desc: "3D modeling and assembly" },
              { title: "Prototyping", desc: "Physical validation of motion curves" },
            ].map((item) => (
              <div key={item.title} className="bg-[var(--color-surface)] rounded-xl p-5 border border-[var(--color-border)]">
                <h3 className="font-semibold text-purple-400 mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
