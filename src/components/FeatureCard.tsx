import { BookOpen, Target, Compass, Layers } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Personalized Roadmaps", desc: "Tailored learning paths for your career." },
  { icon: Target, title: "Skill Tracking", desc: "Track your progress with interactive tools." },
  { icon: Compass, title: "Career Suggestions", desc: "Discover careers that fit your skills." },
  { icon: Layers, title: "Learning Resources", desc: "Access curated courses, docs, and projects." },
];

export default function FeatureCard() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="card text-center">
            <f.icon className="mx-auto text-purple-400 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-white">{f.title}</h3>
            <p className="text-gray-300 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
