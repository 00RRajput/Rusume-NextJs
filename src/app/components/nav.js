import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex border-b border-gray-300 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:dark:bg-zinc-800/30">
    {/* <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"> */}
    <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      src="/next.svg"
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
    />
    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"} className="ml-3">
            About
        </Link>
        <Link href={"/register"} className="ml-3">
            Register
        </Link>
        <Link href={"/pdf"} className="ml-3">
            PDF
        </Link>
    </div>
  </div>

  )
}