import About from "@/components/About";
import Contact from "@/components/Contact";
import Info from "@/components/Info";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-3">
      <Intro />
      <About />
      <Info />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
