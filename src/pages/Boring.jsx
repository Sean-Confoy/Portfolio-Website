import React from "react";
import { Link } from "react-router-dom";

const upgrades = [
  {
    title: "1. Air Flushing System",
    body: (
      <>
        I have been designing a hardline and hose run to connect to an air supply valve, span the
        final gantry, and feed into an OTS air hose reel. This system will be used to easily flush
        grout and accelerant down the tunnel before utility extension. With the current system,
        accelerant and grout spew out when extension is performed; however, with the completion of
        this upgrade, no accelerant or grout will be lost during extension, which additionally
        increases the safety for the miners.
      </>
    ),
  },
  {
    title: "2. Hose Operation Control Box",
    body: (
      <>
        During utility extension there has been no good way to mount an iPad used to control hose
        retraction and it often becomes dirty, making it hard to operate. I have designed a mount
        that contains physical buttons to press to retract the temporary hoses to make room for more
        permanent piping in the tunnel. It also integrates iPad mounting and charging provisions
        along with a controller mount for a winch.
      </>
    ),
  },
  {
    title: "3. Tool Storage",
    body: (
      <>
        When I joined the company there was no compact design for storing all of the tools that
        miners need to grab at arms reach when they perform utility extension. I designed a mount to
        hold all the tools they need in a compact layout so they don&apos;t just put them in boxes
        on the floor which take up vital floor space.
      </>
    ),
  },
  {
    title: "4. Winch Shroud",
    body: (
      <>
        This was my first project with the company where I was tasked with designing a protective
        shroud for a winch that allows miners to lift heavy pipes by themselves. This part has
        proved quite necessary because the winch can get covered in mud and hit by various objects.
        I have since revised the design to include brushes to prevent debris from sticking to the
        winch cable.
      </>
    ),
  },
];

export default function Boring() {
  return (
    <div className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[var(--color-muted)] hover:text-white transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Home
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-3 py-1 rounded-full border border-orange-500/30 text-orange-400 bg-orange-500/10">
              TBC
            </span>
            <span className="text-sm text-[var(--color-muted)]">2026 - Present</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            The Boring Company — Utility Extension Subsystem
          </h1>
          <p className="text-lg text-[var(--color-muted)]">
            Associate Mechanical Design Engineer upgrading the utility extension system to cut crew
            size from two people toward one—and eventually zero through automation.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <div className="space-y-4 text-[var(--color-muted)] mb-10">
            <p>
              As an <span className="text-white font-medium">Associate Mechanical Design Engineer</span> at{" "}
              <span className="text-white font-medium">The Boring Company</span>, I have been put in
              charge of upgrading the Utility Extension System which exists on the final gantry (can
              be thought of as a train car) behind the cutterhead. The purpose of the utility extension
              system is to extend the length of piping so that vital fluids are supplied to the
              cutterhead and new segments. These fluids include accelerant, grout, return/supply water,
              and pressurized air. The system currently requires 2 people to perform extensions;
              however, my job is to bring that number to{" "}
              <span className="text-orange-400 font-medium">1</span> through a series of ergonomic
              upgrades, and eventually <span className="text-orange-400 font-medium">0</span> through
              automation.
            </p>
            <p>
              I would include CAD screenshots, but I am under a confidentiality agreement with the
              company.
            </p>
            <p>
              I am still new to the company; however, here are some of the upgrades I have been
              working on:
            </p>
          </div>

          <div className="not-prose space-y-4 mb-10">
            {upgrades.map((upgrade) => (
              <div
                key={upgrade.title}
                className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-5 md:p-6"
              >
                <h3 className="font-semibold text-orange-400 mb-3">{upgrade.title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{upgrade.body}</p>
              </div>
            ))}
          </div>

          <a
            href="https://www.boringcompany.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-surface)] hover:bg-[var(--color-border)] border border-[var(--color-border)] text-white font-medium rounded-lg transition-colors"
          >
            Visit The Boring Company
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
