import Link from "next/link";
export default function Order() {
  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>Order Page</h1>
      <p>Welcome to your order page</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}