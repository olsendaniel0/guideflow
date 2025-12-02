import Link from "next/link";
import Sidebar from "../components/Sidebar";

export default function Order() {
  return (
    <div className="page-layout">
      <Sidebar />

      <main className="main-content">
        <div style={{ textAlign: "center", padding: 20, minHeight: "100vh" }}>
          <h1>Order Page</h1>
          <p>Welcome to your order page</p>
          <Link href="/">Go back to Home</Link>
        </div>
      </main>
    </div>
  );
}

Order.background = "page-order";
