import Head from "next/head";
import Link from "next/link";

export default function LayoutBase({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>SK E-commerce</title>
      </Head>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/list"}>V-list</Link>
        <Link href={"/about"}>About</Link>
      </nav>
      {children}
      <footer></footer>
    </>
  );
}
