import React from "react";
import { Link } from "react-router-dom";

export default function VADL() {
  const base = import.meta.env.BASE_URL;
  const FUSION_EMBED =
    "https://vanderbilt819.autodesk360.com/shares/public/SH90d2dQT28d5b602811a54062f9a72a383c?mode=embed";

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
            <span className="text-xs px-3 py-1 rounded-full border border-blue-500/30 text-blue-400 bg-blue-500/10">
              VADL
            </span>
            <span className="text-sm text-[var(--color-muted)]">2023 - Present</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Vanderbilt Aerospace Design Lab — Retractable Shovel Payload
          </h1>
          <p className="text-lg text-[var(--color-muted)]">
            Lead Payload Engineer designing soil-collection mechanisms for NASA-style student rocketry.
          </p>
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {["newgearbox.jpg", "oldgearbox.jpg", "Physicalassembly.jpg"].map((img) => (
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
              As <span className="text-white font-medium">Lead Payload Engineer</span>, I designed a 
              soil-collection mechanism that passively deploys, digs, and retracts using the rocket's 
              payload bay rotation.
            </p>
            <p>
              The new opening mechanism features a <span className="text-white font-medium">50:1 gear reducer</span> paired 
              with a <span className="text-white font-medium">23-to-12 tooth sprocket reduction</span>, achieving an 
              effective <span className="text-blue-400 font-medium">~100:1 ratio</span> between payload bay rotation and 
              the shovel hinge.
            </p>
            <p>
              This redesign eliminates the failure points of the previous 14-gear sandwiched 
              gearbox by using professionally machined parts, proper set-screw interfaces, 
              and known manufacturing tolerances.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: "100:1", label: "Gear Ratio" },
              { value: "30", label: "Rotations to Deploy" },
              { value: "50:1", label: "Primary Reducer" },
              { value: "23:12", label: "Sprocket Reduction" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[var(--color-surface)] rounded-xl p-4 text-center border border-[var(--color-border)]">
                <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                <p className="text-xs text-[var(--color-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* 3D Model */}
          <h2 className="text-xl font-semibold mb-4">Interactive 3D Model</h2>
          <p className="text-[var(--color-muted)] mb-4">Drag to rotate, scroll to zoom</p>
          <div className="aspect-[16/10] rounded-xl overflow-hidden border border-[var(--color-border)] mb-8">
            <iframe
              src={FUSION_EMBED}
              title="VADL Assembly"
              className="w-full h-full"
              allowFullScreen
            />
          </div>

          {/* Link */}
          <a
            href="https://www.vadl.org/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Visit VADL Website
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
