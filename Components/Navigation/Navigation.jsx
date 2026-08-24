import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Spotlight</Link>
      </li>
      <li>
        <Link href="/about">Gallery</Link>
      </li>
    </ul>
  );
}