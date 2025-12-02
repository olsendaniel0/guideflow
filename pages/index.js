import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";


export default function Home() {
  return (
    <div className="page-layout">
      <Sidebar />

      <main className="main-content">
        <div style={{textAlign: "center", minHeight: "100vh", paddingTop: 20}}>
          <h1 style={{color: "red", fontSize: 36, textAlign: "center", marginTop: 20}}>Danse</h1>
          <Link href="/order">
            <p style={{color: "purple", fontSize: 24, textAlign: "center", marginTop: 20}}>dette er oppfinneren av Melk</p>
            <Image src="/daniel.jpg" alt="testbilde" width={1000} height={600}/>
          </Link>
        </div>
      </main>
    </div>
  );
}

Home.background = "page-home";
