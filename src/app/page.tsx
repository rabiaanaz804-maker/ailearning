import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import FeatureCard from "../components/FeatureCard";
import Timeline from "../components/Timeline";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Statistics />
      <FeatureCard />
      <Timeline />
      <Footer />
    </main>
  );
}
