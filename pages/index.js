import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div style={{textAlign: "center",
      backgroundColor: "#5E5F57",
      minHeight: "100vh",
      paddingTop: 20
    }}>
      <h1 style={{color: "red", fontSize: 36,
         textAlign: "center", marginTop: 20}}
          >Melk (eller mjølk) er den hvite eller gulhvite, næringsrike væsken som hunn-pattedyr produserer for å nære sine unger. Melken fra hver art har ulik sammensetning, men har også mange fellestrekk. Ettersom drikken skal tilføre avkommet alle de næringsstoffene som trenges for at barnet skal vokse, inneholder den næringsstoffene avkommet trenger. Melk</h1>
      <Link href="/order">
        <p style={{color: "purple", fontSize: 24,
           textAlign: "center", marginTop: 20}}>dette er oppfinneren av Melk</p>
        <Image src="/daniel.jpg" alt="testbilde" width={1000} height={600}/>
      </Link>
    </div>
  );
}
