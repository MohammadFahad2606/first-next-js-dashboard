import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={200}
          height={38}
          priority
        />
        

        <Link href="/auth/singin">
        <span className="bg-black cursor-pointer text-white p-4 px-6 rounded-full hover:bg-white hover:text-black hover:border-2">Get Started</span>
         
        </Link>
      </main>
     
    </div>
  );
}
