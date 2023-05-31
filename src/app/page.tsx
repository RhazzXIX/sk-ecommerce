import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>SK Innovation Storage</h1>
      <Link href={"/list"}> Virtual List storage</Link>
    </main>
  );
}
