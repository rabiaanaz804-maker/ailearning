import Image from "next/image";
import Link from "next/link";

interface CareerCardProps {
  
  name: string;
  salary: string;
  skills: string[];
  demand: string;
}

export default function CareerCard({
  
  name,
  salary,
  skills,
  demand,
}: CareerCardProps) {
  return (
    <div className="card flex flex-col items-center text-center">
      
      <h3 className="text-xl font-bold text-white">{name}</h3>

      <p className="text-gray-300">
        Average Salary: {salary}
      </p>

      <p className="mb-4 text-gray-400">
        Demand: {demand}
      </p>

      <h4 className="font-semibold text-purple-300">
        Required Skills
      </h4>

      <ul className="mb-4 list-inside list-disc text-gray-300">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <Link
        href="/roadmap"
        className="rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white transition hover:bg-purple-700"
      >
        View Roadmap
      </Link>
    </div>
  );
}