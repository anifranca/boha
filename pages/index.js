import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://api.zotero.org/groups/204820/items");
  const items = await res.json();

  return {
    props: {
      items,
    },
  };
}

export default function Home({ items }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>BOHA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">BOHA!</a>
        </h1>

        <p className={styles.description}>
          Biblioteca Online de História Ambiental
        </p>

        <div className={styles.grid}>
          {items.map((item) => (
            <Link href={`/item/${encodeURIComponent(item.key)}`}>
              <a className={styles.card}>
                <h3>{item.data.title}</h3>
                <p>{item.data.itemType}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
