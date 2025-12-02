import Link from "next/link";
import Sidebar from "../components/Sidebar";

export default function Info() {
  return (
    <div className="page-layout">
      <Sidebar />

      <main className="main-content">
        <div style={{textAlign: "center", minHeight: "100vh", paddingTop: 20}}>
          <h1 style={{color: "#999999ff", fontSize: 36,
             textAlign: "center", marginTop: 20}}
              >Informasjon digital guideflow</h1>
          <Link href="/order">
            <p style={{color: "#d7d6d6ff", fontSize: 24}}>Gå til bestillingsside</p>
          </Link>
        </div>
      </main>
    </div>
  );
}  
Info.background = "page-home";
