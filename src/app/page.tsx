import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>SK Innovation Storage</h1>
      <p className={styles.p}>
        Photo by: &nbsp;
        <a className={styles.a} href={"https://unsplash.com/@nessa_rin"}>
          Rinson Chory
        </a>
      </p>
    </main>
  );
}
