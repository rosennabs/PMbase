import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
      <body className="flex h-screen flex-col items-center justify-between">

        <header className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex pt-24">
          
        <Link href='/'> <p className="fixed left-0 top-0 flex w-1/6 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-black lg:p-4 lg:dark:bg-zinc-800/30 text-white">
          Homepage
        </p> </Link>
        

        <Link href='/knowledge_products'> <p className="fixed left-0 top-0 flex w-1/6 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-black lg:p-4 lg:dark:bg-zinc-800/30 text-white">
          Knowledge Products
        </p> </Link>

        <Link href='/relationships'> <p className="fixed left-0 top-0 flex w-1/6 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-black lg:p-4 lg:dark:bg-zinc-800/30 text-white">
          Relationship building
        </p> </Link>

       <Link href='/clientele'> <p className="fixed left-0 top-0 flex w-1/6 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-black lg:p-4 lg:dark:bg-zinc-800/30 text-white">
          Clientele
        </p> </Link>
        
        </header>
        
        {children}

        <footer>
          <p className="text-sm mb-10">© 2024 Your Company. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
