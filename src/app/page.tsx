import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import InstagramFeed from "@/components/InstagramFeed";
import GoogleReviews from "@/components/GoogleReviews";
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
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
