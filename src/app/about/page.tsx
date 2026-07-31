import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          About AI Learning Roadmap Generator
        </h1>

        <div className="space-y-6 text-gray-300 bg-gray-900 p-8 rounded-xl shadow-lg">
          <div>
            <h2 className="text-2xl font-semibold text-purple-400 mb-2">
              What is AI Learning Roadmap Generator?
            </h2>

            <p>
              AI Learning Roadmap Generator is a web application that helps
              users generate personalized learning paths for different
              technology careers. It provides structured roadmaps, learning
              resources, and skill progression to help learners achieve their
              career goals.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-400 mb-2">
              Why Learning Roadmaps Matter?
            </h2>

            <p>
              Learning roadmaps organize skills into clear phases, making it
              easier to learn step by step. They reduce confusion, improve
              consistency, and help users stay focused on their goals.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-400 mb-2">
              How This Project Works?
            </h2>

            <p>
              This project is built with Next.js, React, TypeScript, and
              Tailwind CSS. All data is stored in local JSON files, so no
              database or authentication is required.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}