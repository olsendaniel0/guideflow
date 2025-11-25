import Image from "next/image";


export default function Home() {
  return (
    <div style={{textAlign: "center"}}>
      <h1 style={{color: "red", fontSize: 36,
         textAlign: "center",mariginTop: 20}}
          >Velkommen til GuideFlow!</h1>
      <p style={{color: "purple", fontSize: 24,
         textAlign: "center",mariginTop: 20}}>Her er et testbilde av Daniel:</p>
      <Image src="/daniel.JPG" alt="Testbilde" width={1000} height={600}/>
    </div>
  );
}
