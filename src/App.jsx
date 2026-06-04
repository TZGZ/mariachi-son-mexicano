import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import useLenis from "./hooks/useLenis";
import Contact from "./sections/Contact";
import SEO from "./components/SEO";

export default function App() {
  useLenis();

  return (
    <>
      <SEO />

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Services />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}