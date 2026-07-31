"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-purple-400">
          AI Roadmap
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/roadmap" className="hover:text-purple-400 transition">
            Roadmap
          </Link>

          <Link href="/careers" className="hover:text-purple-400 transition">
            Careers
          </Link>

          <Link href="/resources" className="hover:text-purple-400 transition">
            Resources
          </Link>

          <Link href="/about" className="hover:text-purple-400 transition">
            About
          </Link>

          <DarkModeToggle />
        </div>

        {/* Mobile Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col gap-4 bg-black/80 p-4 md:hidden">
          <Link href="/roadmap">Roadmap</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/about">About</Link>

          <div className="mt-2">
            <DarkModeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}