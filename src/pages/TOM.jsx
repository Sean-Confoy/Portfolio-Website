import React from "react";
import { Link } from "react-router-dom";

export default function TOM() {
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
            <span className="text-xs px-3 py-1 rounded-full border border-green-500/30 text-green-400 bg-green-500/10">
              Makeathon
            </span>
            <span className="text-sm text-[var(--color-muted)]">2023</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            T.O.M. Makeathon — Assistive Technology
          </h1>
          <p className="text-lg text-[var(--color-muted)]">
            Building customized assistive devices through human-centered design during a 48-hour makeathon.
          </p>
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {["tom-sketch.jpg", "tom-team.jpg", "tom-wheelchair.jpg"].map((img) => (
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
              The Vanderbilt Tikkun Olam Makers (T.O.M.) Makeathon brings together 
              engineers and designers to build assistive devices for "need-knowers"—individuals 
              who rely on personalized solutions for everyday independence.
            </p>
            <p>
              Our team worked with <span className="text-white font-medium">Miyako</span>, a young girl with 
              physical mobility limitations. Over 48 hours, we prototyped three functional devices: 
              a <span className="text-white font-medium">sock-aid</span>, a <span className="text-white font-medium">sun-shade mount</span>, 
              and a <span className="text-white font-medium">modular Nintendo Switch holder</span>.
            </p>
            <p>
              I led the design of the Switch-mount system, creating a custom backplate for car seats 
              and 3D-printed clamps with ball-and-socket joints for fully adjustable viewing angles.
            </p>
          </div>

          {/* Devices */}
          <h2 className="text-xl font-semibold mb-4">Devices Built</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { title: "Sock-Aid", desc: "Custom tool for independent dressing" },
              { title: "Sun-Shade Mount", desc: "Wheelchair-attachable shade system" },
              { title: "Switch Holder", desc: "Modular mount for wheelchair and car" },
            ].map((device) => (
              <div key={device.title} className="bg-[var(--color-surface)] rounded-xl p-5 border border-[var(--color-border)]">
                <h3 className="font-semibold text-green-400 mb-2">{device.title}</h3>
                <p className="text-sm text-[var(--color-muted)]">{device.desc}</p>
              </div>
            ))}
          </div>

          {/* Link */}
          <a
            href="https://www.vanderbilt.edu/the-wondry/tikkun-olam-makers-2023-makeathon/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
          >
            Event Overview
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
