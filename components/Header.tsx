import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/" className="logo">PROPERTY 007</Link>
      <nav>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}
