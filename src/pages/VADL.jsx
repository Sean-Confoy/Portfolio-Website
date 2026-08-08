import React from "react";
import { Link } from "react-router-dom";

export default function VADL() {
  const base = import.meta.env.BASE_URL;
  const asset = (path) => `${base}${path.split("/").map(encodeURIComponent).join("/")}`;

  // Kept for possible future restore of the Fusion embed
  // const FUSION_EMBED =
  //   "https://vanderbilt819.autodesk360.com/shares/public/SH90d2dQT28d5b602811a54062f9a72a383c?mode=embed";

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
            <span className="text-sm text-[var(--color-muted)]">Aug 2025 - May 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Vanderbilt Aerospace Design Lab — Extendable Shovel Payload
          </h1>
          <p className="text-lg text-[var(--color-muted)]">
            Lead Payload Engineer developing an autonomous soil-collection system for NASA Student Launch.
          </p>
        </div>

        {/* Hero image */}
        <div className="rounded-xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] mb-12">
          <img
            src={asset("images/Payload Exploded.png")}
            alt="VADL payload exploded view"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>

          {/* Competition results */}
          <div className="not-prose mb-6">
            <div className="grid sm:grid-cols-2 gap-3 mb-3">
              <div className="rounded-xl border border-amber-500/40 bg-gradient-to-br from-amber-500/15 to-amber-500/5 px-5 py-4">
                <p className="text-xs uppercase tracking-wider text-amber-400/80 mb-1">NASA Student Launch</p>
                <p className="text-2xl font-bold text-amber-300">2nd Overall</p>
                <p className="text-sm text-[var(--color-muted)] mt-1">Among 33 universities</p>
              </div>
              <div className="rounded-xl border border-blue-500/40 bg-gradient-to-br from-blue-500/15 to-blue-500/5 px-5 py-4">
                <p className="text-xs uppercase tracking-wider text-blue-400/80 mb-1">Competition Award</p>
                <p className="text-2xl font-bold text-blue-300">Payload Award</p>
                <p className="text-sm text-[var(--color-muted)] mt-1">Best payload system</p>
              </div>
            </div>
            <a
              href="https://www.nasa.gov/learning-resources/nasa-student-launch/current-teams/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              View official NASA Student Launch results
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="space-y-4 text-[var(--color-muted)] mb-8">
            <p>
              As <span className="text-white font-medium">Lead Payload Engineer</span>, I led the
              mechanical design and development of an autonomous soil-collection payload for{" "}
              <span className="text-white font-medium">NASA&apos;s Student Launch</span> competition.
              The payload that our team designed was able to be extracted from the airframe during
              flight, land on torsional spring-loaded and ratcheted legs, utilize a single actuator to
              rotate about its roll axis, extend a shovel arm passively, excavate soil to a controlled
              depth, retain the sample, and test the sample for pH, nitrate, and conductivity.
            </p>
            <p>
              Myself along with the payload team developed and evaluated multiple collection concepts
              before selecting a rotating shovel mechanism. The final design uses a{" "}
              <span className="text-white font-medium">harmonic gearbox reducer</span> coupled with a{" "}
              <span className="text-white font-medium">belt and pulley drive</span> to convert
              payload-bay rotation into controlled shovel deployment, digging, and retraction while
              maintaining the torque and shovel angle of attack required to penetrate compacted soil.
            </p>
            <p>
              The mechanism was iteratively prototyped, tested, and redesigned to improve reliability,
              manufacturability and to decrease weight. The final assembly replaced several earlier 3D
              printed designs with a mixture of in-house and professionally machined components,
              possible due to adherence to{" "}
              <span className="text-white font-medium">GD&amp;T</span> practices in all part drawings.
              The entire competition completely changed my DFM, test, and integration engineering
              skillsets as it comprised the entire concept to production cycle.
            </p>
            <p>
              Not to mention that our team came{" "}
              <span className="text-amber-300 font-medium">2nd Overall</span> in the competition and
              won the <span className="text-blue-400 font-medium">Payload Award</span> among 33
              universities.
            </p>
            <p>
              For expansive additional detail on the payload and entire rocket I urge you to browse
              the{" "}
              <a
                href={asset("Vanderbilt University - 2026 - FRR Report-compressed.pdf")}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Flight Readiness Review (FRR)
              </a>{" "}
              document attached.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: "50+ mL", label: "Soil Sample" },
              { value: "21", label: "Shovel Extension Rotations" },
              { value: "2.0 in", label: "Target Dig Depth" },
              { value: "6 in", label: "Rocket Diameter" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[var(--color-surface)] rounded-xl p-4 text-center border border-[var(--color-border)]">
                <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                <p className="text-xs text-[var(--color-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Digging Demo Video */}
          <h2 className="text-xl font-semibold mb-4">Payload Digging Demo</h2>
          <div className="aspect-[16/10] rounded-xl overflow-hidden border border-[var(--color-border)] mb-8 bg-black">
            <video
              controls
              playsInline
              className="w-full h-full object-contain"
            >
              <source src={asset("images/Payload Digging.mp4")} type="video/mp4" />
              <source src={asset("images/Payload Digging.mov")} type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Interactive 3D Model — commented out for now; restore by uncommenting
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
          */}

          {/* FRR Report Callout */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">Flight Readiness Review Report</h3>
                <p className="text-[var(--color-muted)] text-sm mb-3">
                  View our comprehensive FRR document detailing the full technical specifications,
                  analysis, and design rationale for the VADL payload system.
                </p>
                <a
                  href={asset("Vanderbilt University - 2026 - FRR Report-compressed.pdf")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
                >
                  Download FRR Report (PDF)
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href={asset("Vanderbilt University - 2026 - FRR Report-compressed.pdf")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View FRR Report
            </a>
            <a
              href="https://www.vadl.org/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-surface)] hover:bg-[var(--color-border)] border border-[var(--color-border)] text-white font-medium rounded-lg transition-colors"
            >
              Visit VADL Website
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
