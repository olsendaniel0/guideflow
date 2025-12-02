import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="sidebar">
      <h2>Menu</h2>
      <nav>
        <ul>
          <li>
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/order" className={router.pathname === "/order" ? "active" : ""}>
              Order
            </Link>
          </li>
          <li>
            <Link href="/info" className={router.pathname === "/info" ? "active" : ""}>
              Info
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
