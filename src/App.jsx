import Navbar from "./components/navbar";  // Ensure this import matches the correct case
import Hero from "./components/hero"; // Adjust the path if necessary
import About from "./components/about"; // Adjust the path if necessary
import Technologies from "./components/technologies"; // Adjust the path if necessary
import Experience from "./components/experience"; // Adjust the path if necessary
import Project from "./components/project"; // Adjust the path if necessary
import Contact from "./components/contact"; // Adjust the path if necessary
import IllustrationGallery from "./components/IllustrationGallery"; // Adjust the path if necessary

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen relative">
      {/* Background layers */}
      <div className="fixed top-0 -z-10 w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      {/* Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies/>
        <Project/>
        <IllustrationGallery/>
        <Experience/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;


