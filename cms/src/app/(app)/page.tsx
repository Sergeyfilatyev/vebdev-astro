
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}> Veb-Dev</h1>
        <Link className={styles.link} href="/admin">Admin</Link>
      </main>
    </div>
  );
}
