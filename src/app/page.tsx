import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import About from "@/components/About";
import Services from "@/components/Services";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <About />
      <div id="servicios">
        <Services />
      </div>
      <CtaBand />
      <Contact />
    </>
  );
}
