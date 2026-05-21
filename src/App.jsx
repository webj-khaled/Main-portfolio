import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Technologies from "./components/technologies";
import Project from "./components/project";
import IllustrationGallery from "./components/IllustrationGallery";
import RangeMap from "./components/rangeMap";
import Experience from "./components/experience";
import Contact from "./components/contact";
import { WebGLShader } from "@/components/ui/web-gl-shader";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-[var(--color-ink)] antialiased selection:bg-[var(--color-green)] selection:text-[var(--color-bg)]">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <WebGLShader />
      </div>
      <div className="relative z-10">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Project />
          <RangeMap />
          <Technologies />
          <IllustrationGallery />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;


