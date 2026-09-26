const events = [
  {
    date: "29",
    month: "SEP",
    year: "2026",
    type: "DISCUSSION",
    title: "Group Meeting.",
    description:
      "An open discussion about lecture knowledge, topics elaboration to classmates, certainty, and help understand each and everyone better.",
  },
  
];
const prevEvents: typeof events = [];

export default function EventsPage() {
  return (
    <main className="events-page">
      <section className="events-hero">
        <p className="eyebrow">EVENTS</p>

        <h1>
          Ideas are
          <br />
          better
          <br />
          together.
        </h1>

        <p className="events-intro">
          Discussions, workshops, competitions, and gatherings where curious
          people come together to explore ideas.
        </p>
      </section>

      <section className="events-page-list">
        <div className="events-page-header">
          <span>UPCOMING EVENTS</span>
          
        </div>

        {events.length>0 ?events.map((event) => (
          <article className="event-page-card" key={event.title}>
            <div className="event-page-date">
              <strong>{event.date}</strong>
              <span>{event.month}</span>
              <small>{event.year}</small>
            </div>

            <div className="event-page-content">
              <span>{event.type}</span>

              <h2>{event.title}</h2>

              <p>{event.description}</p>

              <button>View event →</button>
            </div>
          </article>
        )):<p className="none">NONE</p>}
      </section>

      { <section className="events-page-list">
        <div className="events-page-header">
          <span>PREVIOUS EVENTS</span>
          
        </div>
        { prevEvents.length>0 ? prevEvents.map((event) => (
          <article className="event-page-card" key={event.title}>
            <div className="event-page-date">
              <strong>{event.date}</strong>
              <span>{event.month}</span>
              <small>{event.year}</small>
            </div>

            <div className="event-page-content">
              <span>{event.type}</span>

              <h2>{event.title}</h2>

              <p>{event.description}</p>

              <button>View event →</button>
            </div>
          </article>
        )): <p className="none">NONE</p>}
        </section>}
    </main>
  );
} 