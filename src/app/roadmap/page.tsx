"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RoadmapCard from "../../components/RoadmapCard";
import roadmaps from "../../data/roadmaps.json";

export default function RoadmapPage() {
  const [career, setCareer] = useState("");
  const [level, setLevel] = useState("");
  const [hours, setHours] = useState("");
  const [style, setStyle] = useState("");

  const [generated, setGenerated] = useState(false);
  const [selectedRoadmap, setSelectedRoadmap] = useState<any>(null);

  const handleGenerate = () => {
    const roadmap = roadmaps.find((item) => item.career === career);

    setSelectedRoadmap(roadmap || null);
    setGenerated(true);
  };

  return (
    <main>
      <Navbar />

      <section className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Roadmap Generator
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleGenerate();
          }}
          className="card space-y-6"
        >
          <div>
            <label className="block text-gray-300 mb-2">
              Career Goal
            </label>

            <select
              value={career}
              onChange={(e) => setCareer(e.target.value)}
              className="w-full p-3 rounded-lg bg-black/40 text-white"
              required
            >
              <option value="">Select Career</option>

              {roadmaps.map((item, index) => (
                <option key={index} value={item.career}>
                  {item.career}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Experience Level
            </label>

            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full p-3 rounded-lg bg-black/40 text-white"
              required
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Weekly Study Hours
            </label>

            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="w-full p-3 rounded-lg bg-black/40 text-white"
              placeholder="10"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Learning Style
            </label>

            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full p-3 rounded-lg bg-black/40 text-white"
              required
            >
              <option>Video</option>
              <option>Documentation</option>
              <option>Projects</option>
              <option>Mixed</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold"
          >
            Generate Roadmap
          </button>
        </form>

        {generated && selectedRoadmap && (
          <div className="mt-12 space-y-8">
            {selectedRoadmap.phases.map((phase: any, index: number) => (
              <RoadmapCard
                key={index}
                title={phase.title}
                description={phase.description}
                skills={phase.skills}
                duration={phase.duration}
                difficulty={phase.difficulty}
                resources={phase.resources}
                project={phase.project}
              />
            ))}
          </div>
        )}

        {generated && !selectedRoadmap && (
          <div className="mt-10 text-center text-red-400 text-xl">
            No roadmap found for this career.
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}