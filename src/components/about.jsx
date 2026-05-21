import profilePhoto from "../assets/kevinRushProfile.jpeg";

const About = () => {
  return (
    <section id="about" className="section-pad border-b border-[var(--color-line)]">
      <div className="section-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="surface-panel p-3">
          <img
            src={profilePhoto}
            alt="Khaled Adel in Salzburg"
            className="aspect-[16/9] w-full object-cover opacity-90"
          />
        </div>
        <div className="border-y border-[var(--color-line)] py-8">
          <p className="display-type text-3xl font-black leading-tight sm:text-5xl">
            I create the interface, the backend, the model workflow, and the visual explanation.
          </p>
          <p className="mt-6 text-lg leading-8 text-muted">
            I work across product decisions, implementation details, and final delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
