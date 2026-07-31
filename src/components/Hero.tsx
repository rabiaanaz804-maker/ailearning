import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-br from-purple-700 via-blue-700 to-black">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Generate Your AI Learning Roadmap
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8">
        Create personalized learning plans for any technology or career.
      </p>
      <div className="flex justify-center gap-6">
        <Link
          href="/roadmap"
          className="px-6 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-semibold shadow-lg transition"
        >
          Generate Roadmap
        </Link>
        <Link
          href="/careers"
          className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg transition"
        >
          Explore Careers
        </Link>
      </div>
    </section>
  );
}
