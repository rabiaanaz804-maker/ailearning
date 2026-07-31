import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ResourceCard from "../../components/ResourceCard";
import resources from "../../data/resources.json";

export default function ResourcesPage() {
  return (
    <main>
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-12 text-center text-4xl font-bold text-white">
          Learning Resources
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              category={resource.category}
              difficulty={resource.difficulty}
              link={resource.link}
              time={resource.time}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}