"use client"
import Image from "next/image";
import Hero from "@/public/hero.png";
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-row items-center gap-10">
      <div className="w-1/2 flex flex-col gap-10">
        <h1 className={`title text-7xl font-extrabold`}>Better design for your digital products.</h1>
        <p className="text-2xl font-light">Turning your idea into reality. We bring together the teams from the global tech industry.</p>
        <button className="w-max see-our-work cursor-pointer" onClick={()=>router.push('/portfolio')}>See Our Work</button>
      </div>
      <div className="w-1/2">
        <Image src={Hero} alt="" className="w-full img-height object-contain"/>
      </div>
    </main>
  )
}
