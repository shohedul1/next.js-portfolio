import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(/bg.webp)" }}>
        <div className="pl-20 md:pl-40 pb-56 mb:px-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{' '}Web Development</span>
          </h1>
          <p className="text-gray-200 hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, possimus!</p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link href="/my-skills" className="relative rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              Learn more
            </Link>
            <Link href="/my-projects" className="relative rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link href="/contact-me" className="relative rounded-[20px] group bg-transparent border-white px-5 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contack me
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]">
          Learn more
        </Link>
        <Link href="/my-projects" className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
          My projects
        </Link>
        <Link href="/contact-me" className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
          Contack me
        </Link>
      </div>
    </main>
  )
}
