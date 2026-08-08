import React from "react";
import { Link } from "react-router-dom";

export default function Hammer() {
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
            <span className="text-xs px-3 py-1 rounded-full border border-orange-500/30 text-orange-400 bg-orange-500/10">
              Machining
            </span>
            <span className="text-sm text-[var(--color-muted)]">Jan 2024 - May 2024</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Machinist's Hammer — Precision Manufacturing
          </h1>
          <p className="text-lg text-[var(--color-muted)]">
            A fully functional machinist's hammer machined from 1018 steel using traditional subtractive manufacturing processes.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <div className="aspect-[16/10] rounded-xl overflow-hidden bg-[var(--color-surface)]">
            <img
              src={`${base}images/hammer-full (1).png`}
              alt="Machinist's Hammer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <div className="space-y-4 text-[var(--color-muted)] mb-8">
            <p>
              I machined a fully functional machinist's hammer from <span className="text-white font-medium">1018 steel</span> using 
              traditional subtractive manufacturing processes. The project reinforced core machining fundamentals—precision turning, 
              facing, knurling, threading, and assembly—while requiring tight control over tolerances and surface finish.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["Lathe", "Mill", "Bandsaw", "Threading", "Knurling", "Subtractive Manufacturing"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full text-sm text-orange-400"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Process */}
          <h2 className="text-xl font-semibold mb-4">Process & Key Operations</h2>
          
          <div className="space-y-6 mb-10">
            {/* Lathe Work */}
            <div className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="font-semibold text-orange-400 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Lathe Work
              </h3>
              <ul className="space-y-2 text-[var(--color-muted)] text-sm">
                <li>• Turned the handle to a smooth, tapered profile for ergonomic grip</li>
                <li>• Applied a knurled pattern to the handle section to improve texture and control</li>
                <li>• Faced and cleaned up both components for concentricity and proper fit</li>
              </ul>
            </div>

            {/* Milling */}
            <div className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="font-semibold text-orange-400 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Milling
              </h3>
              <ul className="space-y-2 text-[var(--color-muted)] text-sm">
                <li>• Milled the hammer head to create flat, parallel striking surfaces</li>
                <li>• Ensured proper symmetry and balance across both faces</li>
              </ul>
            </div>

            {/* Bandsaw & Threading */}
            <div className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="font-semibold text-orange-400 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                </svg>
                Bandsaw & Threading
              </h3>
              <ul className="space-y-2 text-[var(--color-muted)] text-sm">
                <li>• Used the bandsaw to rough-cut the taper and shape the head prior to finishing operations</li>
                <li>• Cut internal and external threads that allow the handle and head to fasten securely with a precise mechanical fit</li>
              </ul>
            </div>
          </div>

          {/* Result */}
          <h2 className="text-xl font-semibold mb-4">Result</h2>
          <div className="text-[var(--color-muted)] mb-8">
            <p className="mb-4">A durable, professional-quality machinist's hammer featuring:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Tapered Handle", desc: "Hand-fit ergonomic grip" },
                { title: "Knurled Pattern", desc: "Enhanced texture & control" },
                { title: "Threaded Assembly", desc: "Secure head-to-handle fit" },
                { title: "Tight Tolerances", desc: "Consistent surface finish" },
              ].map((item) => (
                <div key={item.title} className="bg-[var(--color-surface)] rounded-xl p-4 border border-[var(--color-border)] text-center">
                  <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-[var(--color-muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Takeaway */}
          <div className="bg-gradient-to-r from-orange-600/20 to-amber-600/20 border border-orange-500/30 rounded-xl p-6">
            <p className="text-[var(--color-muted)]">
              This project demonstrates proficiency with standard machine shop tools and an understanding of 
              <span className="text-white font-medium"> precision machining workflows</span>—skills I continue 
              applying in larger mechanical and aerospace projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



