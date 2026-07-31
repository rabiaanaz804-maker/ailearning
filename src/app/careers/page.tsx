import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CareerCard from "../../components/CareerCard";
import careers from "../../data/careers.json";

export default function CareersPage() {
  return (
    <main>
      <Navbar />
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          Explore Careers
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careers.map((career, i) => (
            <CareerCard
              key={i}
            
              name={career.name}
              salary={career.salary}
              skills={career.skills}
              demand={career.demand as "High" | "Medium" | "Low"}
            />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
