const projects = [
  {
    number: "01",
    title: "POLYMATH",
    category: "RESEARCH",
    description:
      "An ongoing exploration of questions that cross the boundaries of traditional academic disciplines.",
  },
  {
    number: "02",
    title: "OPEN LAB",
    category: "EXPERIMENTS",
    description:
      "Small experiments, prototypes, and investigations built by members out of curiosity.",
  },
  {
    number: "03",
    title: "IDEA ARCHIVE",
    category: "KNOWLEDGE",
    description:
      "A growing collection of essays, discussions, explanations, and interesting questions.",
  },
  {
    number: "04",
    title: "PUBLIC GOOD",
    category: "COMMUNITY",
    description:
      "Projects that apply our knowledge and skills to problems beyond the university.",
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <div className="section-heading">
        <p> PROJECTS</p>

        <h2>
          Ideas
          <br />
          made
          <br />
          real.
        </h2>
      </div>

      <div className="projects-list">
        <p className="soon">Soon...</p>
      </div>
    </section>
  );
}