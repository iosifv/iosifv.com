import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { metadata } from "./layout";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Links", href: "/links" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        iosifv
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">~ {metadata.description} ~</h2>
        <br></br>
        <h2 className="text-lg text-zinc-500 ">○</h2>
        <br></br>
        <h2 className="text-sm text-zinc-500 ">
          I solve problems for my clients at{" "}
          <Link
            target="_blank"
            href="https://casa4.co.uk"
            className="underline duration-500 hover:text-zinc-300"
          >
            Casa4
          </Link>
          .
        </h2>
        <h2 className="text-sm text-zinc-500 ">
          I get my adrenaline rush on{" "}
          <Link
            target="_blank"
            href="https://www.youtube.com/watch?v=IgMAoBH4WFQ"
            className="underline duration-500 hover:text-zinc-300"
          >
            2 wheels
          </Link>{" "}
          .
        </h2>
        <h2 className="text-sm text-zinc-500 ">
          I seek adventure in my{" "}
          <Link
            target="_blank"
            href="https://www.instagram.com/homeless.developer/"
            className="underline duration-500 hover:text-zinc-300"
          >
            converted van
          </Link>{" "}
          .
        </h2>
      </div>
      <div className="my-16 text-center animate-fade-in">
        {/* <h2 className="text-sm text-zinc-500 ">Made in London 🇬🇧 with ♡.</h2> */}
        <h2 className="text-sm text-zinc-500 ">
          © Iosif V. | Steal my source code{" "}
          <Link
            target="_blank"
            href="https://www.github.com/iosifv/iosifv.com"
            className="underline duration-500 hover:text-zinc-300"
          >
            here
          </Link>
        </h2>
      </div>
    </div>
  );
}
