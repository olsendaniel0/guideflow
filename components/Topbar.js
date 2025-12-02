import Link from "next/link";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <Link href="/signin" className="btn signup">Sign in</Link>
        <Link href="/register" className="btn register">Register</Link>
      </div>
    </div>
  );
}
