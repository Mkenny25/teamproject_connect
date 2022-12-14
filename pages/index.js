import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import styles from "./index.module.css";
import Header from "../components/header";
import Image from "next/image";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function MyApp({ posts }) {
  return (
    <div>
      <Header />
      <main className={styles.container}>

        <ol className={styles.posts}>
          {posts.map((post) => {
            const date = new Date(post.created_time).toLocaleString(
                "ja-JP",
                {
                month: "short",
                year: "numeric",
                }
            );
            return (
              <li key={post.id} className={styles.post}>
                <div className={styles.imgWrapper}>
                    <Image 
                      src={post.cover.external.url}
                      alt="bookImg" 
                      width={200} 
                      height={200} 
                    />
                </div>
                <Link href={`/${post.id}`}>
                    <div>
                        <p><Text text={post.properties.Name.title} /></p>
                        <p><Text text={post.properties.AFFLIATION.rich_text} /></p>
                        <p><Text text={post.properties.POSOTION.rich_text} /></p>
                        <p>{date}</p>
                        <p><Text text={post.properties.MAIL.rich_text} /></p>
                    </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
