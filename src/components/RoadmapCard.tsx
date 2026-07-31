"use client";
import { useState } from "react";

interface RoadmapCardProps {
  title: string;
  description: string;
  skills: string[];
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  resources: string[];
  project: string;
}

export default function RoadmapCard({
  title,
  description,
  skills,
  duration,
  difficulty,
  resources,
  project,
}: RoadmapCardProps) {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="card w-full">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>

      <div className="mb-4">
        <span className="px-3 py-1 rounded-full bg-purple-500 text-white text-sm">
          {difficulty}
        </span>
      </div>

      <h4 className="text-lg font-semibold text-purple-300">Skills:</h4>
      <ul className="list-disc list-inside text-gray-300 mb-4">
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>

      <h4 className="text-lg font-semibold text-purple-300">Resources:</h4>
      <ul className="list-disc list-inside text-gray-300 mb-4">
        {resources.map((res, i) => (
          <li key={i}>{res}</li>
        ))}
      </ul>

      <h4 className="text-lg font-semibold text-purple-300">Mini Project:</h4>
      <p className="text-gray-300 mb-4">{project}</p>

      <p className="text-gray-400">Estimated Duration: {duration}</p>

      <div className="mt-4 flex items-center gap-2">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
          className="w-5 h-5 accent-purple-500"
        />
        <span className="text-gray-300">
          {completed ? "Completed" : "Mark as Complete"}
        </span>
      </div>
    </div>
  );
}
