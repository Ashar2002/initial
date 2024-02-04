import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="text-red-500 text-7xl text-center font-bold">Home Page</div>
    </>
  );
}
