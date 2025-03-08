import React, { useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./app.css";
import FeaturedProjects from "./components/FeaturedProjects";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);
  const handleFocusInput = () => {
    if (inputRef.current) {
      connectRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setTimeout(() => {
        inputRef.current?.focus();
        // console.log("Input focused after scroll");
      }, 100);
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Hero focusInput={handleFocusInput} />
      <About />
      <Experience />
      <Skills />
      <FeaturedProjects />
      {/* <Projects /> */}
      <Contact inputRef={inputRef} connectRef={connectRef} />
    </div>
  );
}

export default App;
