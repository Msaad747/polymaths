import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link href="/" className="logo">
        POLYMATHS
      </Link>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ideas">Ideas</Link>
        <Link href="/projects">Projects</Link>
        
      </nav>

      <Link href="/join" className="join-button">
        Join →
      </Link>
    </header>
  );
}