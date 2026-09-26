const activities = [
  {
    number: "01",
    title: "DISCUSS",
    description:
      "Explore ideas through philosophy, science, ethics, mathematics, and social questions.",
  },
  {
    number: "02",
    title: "BUILD",
    description:
      "Turn knowledge into useful projects, research, software, experiments, and creative work.",
  },
  {
    number: "03",
    title: "COMPETE",
    description:
      "Challenge ourselves through mathematics, programming, problem solving, quizzes, and competitions.",
  },
  {
    number: "04",
    title: "SERVE",
    description:
      "Use our knowledge and skills to contribute to the wider community.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="what-we-do">
      <div className="section-heading">
        <p>02 — ACTIVITIES</p>

        <h2>
          What
          <br />
          we do?
        </h2>
      </div>

      <div className="activities">
        {activities.map((activity) => (
          <article className="activity" key={activity.number}>
            <span>{activity.number}</span>

            <h3>{activity.title}</h3>

            <p>{activity.description}</p>

            <span className="activity-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}