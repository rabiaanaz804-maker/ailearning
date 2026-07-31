export default function Statistics() {
  const stats = [
    { number: "100+", label: "Skills" },
    { number: "20+", label: "Career Paths" },
    { number: "500+", label: "Learning Resources" },
  ];

  return (
    <section className="py-16 bg-black/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="card">
            <h2 className="text-4xl font-bold text-purple-400">{stat.number}</h2>
            <p className="text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
