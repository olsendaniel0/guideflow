import Image from "next/image";


export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>Velkommen til GuideFlow!</h1>
      <p>Her er et testbilde av Daniel:</p>
      <Image src="/daniel.JPG" alt="Testbilde" width={500} height={300} />
    </div>
  );
}
