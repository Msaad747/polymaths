
const ideas = [

];

export default function IdeasPage() {
  return (
    <main className="ideas-page">
      <section className="ideas-hero">
        <p className="eyebrow">IDEAS</p>

        <h1>
          Questions
          <br />
          worth
          <br />
          asking.
        </h1>

        <p className="ideas-intro">
          Questions, arguments, observations, and explorations from across
          disciplines.
        </p>
      </section>

      <section className="ideas-list-section">
        <div className="ideas-header">
          <span>IDEA ARCHIVE</span>
          <span>{ideas.length} ENTRIES</span>
        </div>

        <div className="ideas-list">
          <p className="none">NONE</p>
        </div>
      </section>
    </main>
  );
}

