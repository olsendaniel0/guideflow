import Link from "next/link";
export default function Order() {
  return (
    <div style={{ textAlign: "center", padding: 20, minHeight: "100vh", backgroundColor: "#cc6969" }}>
      <h1>Order Page</h1>
      <p>Welcome to your order page</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}

Order.background = "page-order";
