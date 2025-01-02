import Link from "next/link";
import Header from "./header";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <Header></Header>
      <h1>This is the Home Page</h1>
      <p><Link href='/about'>About Us</Link></p>
    </div>
  );
}
