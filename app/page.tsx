import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker, { About } from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Cv from "@/components/Cv";
import Contact, { Footer } from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Cv />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
