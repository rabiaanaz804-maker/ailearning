export default function Timeline() {
  const steps = [
    { step: "Step 1", title: "Choose Career" },
    { step: "Step 2", title: "Generate Roadmap" },
    { step: "Step 3", title: "Track Progress" },
    { step: "Step 4", title: "Become Job Ready" },
  ];

  return (
    <section className="py-20 bg-black/40 backdrop-blur-md">
      <h2 className="text-3xl font-bold text-center text-white mb-12">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {steps.map((s, i) => (
          <div key={i} className="card text-center">
            <h3 className="text-purple-400 font-bold">{s.step}</h3>
            <p className="text-white mt-2">{s.title}</p>
            {i < steps.length - 1 && <span className="text-3xl text-gray-500">↓</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
