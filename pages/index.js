import Image from "next/image";


export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>Velkommen til GuideFlow!</h1>
      <p>Her er et testbilde av Daniel:</p>
      <Img src="/daniel.jpg" alt="Testbilde" width={500} height={300} />
    </div>
  );
}