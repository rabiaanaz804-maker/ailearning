import { Resource } from "../types/resource";

export default function ResourceCard({ title, category, difficulty, link, time }: Resource) {
  return (
    <div className="card">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-300">Category: {category}</p>
      <p className="text-gray-300">Difficulty: {difficulty}</p>
      <p className="text-gray-400">Estimated Time: {time}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg transition"
      >
        Official Link
      </a>
    </div>
  );
}
