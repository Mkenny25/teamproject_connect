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
            return (
              <li key={post.id} className={styles.post}>
                <Link href={`/${post.id}`} className={styles.link}>
                  <div className={styles.imgWrapper}>
                    <Image 
                      className={styles.image}
                      src={post.properties.PICTURE.files[0].external.url}
                      alt="bookImg"
                      layout="fill" 
                      // width={200} 
                      // height={250} 
                    />
                  </div>
                    <div className={styles.nameInfo}>
                        <p><Text text={post.properties.NAME_KN.rich_text} /></p>
                        <h3><Text text={post.properties.Name.title} /></h3>
                    </div>
                    <div className={styles.roleInfo}>
                      <p>
                          <Text text={post.properties.AFFLIATION.rich_text} />
                          &nbsp; / &nbsp;
                          <Text text={post.properties.POSOTION.rich_text} />
                      </p>
                        {/* <p>{date}</p> */}
                        {/* <p><Text text={post.properties.MAIL.rich_text} /></p> */}
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
