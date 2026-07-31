"use client";
import { useState } from "react";

interface ProgressCardProps {
  phase: string;
  totalTasks: number;
}

export default function ProgressCard({ phase, totalTasks }: ProgressCardProps) {
  const [completed, setCompleted] = useState(0);

  const progress = Math.round((completed / totalTasks) * 100);

  return (
    <div className="card">
      <h3 className="text-xl font-bold text-white mb-4">{phase}</h3>

      <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
        <div
          className="bg-purple-500 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-gray-300 mb-4">{progress}% Complete</p>

      <button
        onClick={() => setCompleted(Math.min(completed + 1, totalTasks))}
        className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg transition"
      >
        Mark Task Complete
      </button>
    </div>
  );
}
