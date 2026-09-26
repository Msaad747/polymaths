const axioms = [
  {
    number: "01",
    title: "Critical Thinking",
    text: "Question assumptions, examine evidence, and ask for reasons.",
  },
  {
    number: "02",
    title: "Interdisciplinary Collaboration",
    text: "Connect ideas and skills across different fields of knowledge.",
  },
  {
    number: "03",
    title: "Public Good",
    text: "Use knowledge and skills to contribute positively to society.",
  },
  {
    number: "04",
    title: "Independence",
    text: "Think freely, form your own conclusions, and remain intellectually independent.",
  },
  {
    number: "05",
    title: "Voluntary Participation",
    text: "Participate because you are curious and want to contribute.",
  },
  {
    number: "06",
    title: "Evolving Structure",
    text: "Build structure when it helps the community, and change it when it no longer does.",
  },
  {
    number: "07",
    title: "Individual Responsibility",
    text: "Take responsibility for your own words, decisions, and actions.",
  },
];

export default function Axioms() {
  return (
    <section className="axioms">
      <div className="section-heading">
        <p>01 — PRINCIPLES</p>

        <h2>
          Seven
          <br />
          axioms.
        </h2>
      </div>

      <div className="axioms-list">
        {axioms.map((axiom) => (
          <article className="axiom" key={axiom.number}>
            <span className="axiom-number">{axiom.number}</span>

            <div>
              <h3>{axiom.title}</h3>
              <p>{axiom.text}</p>
            </div>

            <span className="axiom-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}