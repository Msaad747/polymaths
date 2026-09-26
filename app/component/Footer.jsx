
export default function Footer() {
  return (
    <footer className="footer cud">
      <div className="footer-top">
        <div>
          <p className="footer-label">SOCIETY OF POLYMATHS</p>

          <h2>
            Stay
            <br />
            curious.
          </h2>
        </div>

        <div className="footer-links">
          <div>
            <p>EXPLORE</p>
            <a href="/about">About</a>
            <a href="/ideas">Ideas</a>
            <a href="/projects">Projects</a>
            <a href="/events">Events</a>
          </div>

          <div>
            <p>CONNECT</p>
            <a href="/join">Join the Society</a>
            <a href="#">Instagram</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Society of Polymaths</span>
        <span>Think. Question. Build.</span>
      </div>
    </footer>
  );
}