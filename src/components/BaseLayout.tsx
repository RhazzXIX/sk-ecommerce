import Link from "next/link";

export default function LayoutBase({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/list"}>V-list</Link>
      </nav>
      {children}
      <footer>
        <p>
          <Link href={"/about"}>About</Link>
          &gt;&gt;&gt;
        </p>
      </footer>
    </>
  );
}
