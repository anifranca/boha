import Head from "next/head";
import styles from "../../styles/Home.module.css";

function Item({ item }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>BOHA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{item.data.title}</h1>
        <p>{item.data.abstractNote}</p>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://api.zotero.org/groups/204820/items");
  const items = await res.json();

  const paths = items.map((item) => ({
    params: { id: item.key },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.zotero.org/groups/204820/items/${params.id}`
  );
  const item = await res.json();

  return { props: { item } };
}

export default Item;
