import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import InstagramFeed from "@/components/InstagramFeed";
import GoogleReviews from "@/components/GoogleReviews";
import ZoneIntervention from "@/components/ZoneIntervention";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <InstagramFeed />
        <GoogleReviews />
        <ZoneIntervention />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
