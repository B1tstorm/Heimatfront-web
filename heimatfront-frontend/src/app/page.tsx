import styles from "./page.module.css";

function getCurrentDateString(): string {
  return new Date().getFullYear().toString();
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>Willkommen Kamerad, bei Heimatfront, einer der größten deutschen Communities für Arma Reforger</p>
      </main>
      <footer className={styles.footer}>
        <pre>Die Seite befindet sich momentan im Aufbau</pre>
        <pre><a href="https://github.com/B1tstorm">Developers GitHub</a></pre>
        <pre>{getCurrentDateString()}</pre>
      </footer>
    </div>
  );
}
