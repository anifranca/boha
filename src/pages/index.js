import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  const res = await fetch('https://api.zotero.org/groups/204820/items');
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
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to
          <a href="https://boha.historia.ufrj.br/">BOHA!</a>
        </h1>

        <p className={styles.description}>Biblioteca Online de História Ambiental</p>

        <div className={styles.grid}>
          {items.map(item => (
            <Link href={`/item/${encodeURIComponent(item.key)}`}>
              <a className={styles.card}>
                <h3>{item.data.title}</h3>
                <p>{item.data.itemType}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>Powered by Nextjs</footer>
    </div>
  );
}
