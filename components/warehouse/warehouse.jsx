import Header from "../../components/header";
import styles from "../../styles/warehouse/warehouse.module.css";
import Link from "next/link";
import { Text } from "../../pages/warehouse/[id].js";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function likeBtnClick() {
    console.log("likeBtnClick");
}

const wareHouse = ({ posts }) => {
    return (
        <>
            <main className={styles.container}>
                {/* <h2 className={styles.heading}>ALL WAREHOUSES</h2> */}
                <ol className={styles.warehouses}>
                    {posts.map((post) => {
                        return (
                            <li key={post.id} className={styles.warehouse}>
                                <Link href={`/warehouse/${post.id}`} >
                                    <div className={styles.imgWrapper}>
                                        <span>
                                            <Image 
                                                className={styles.warehouseImg}
                                                src={post.cover.external.url}
                                                alt="warehouseImg" 
                                                layout="fill"
                                                objectFit="contain"
                                            />
                                        </span>
                                    </div>
                                    <h3 className={styles.warehouseTitle}>
                                        <Text text={post.properties.Title.title} />
                                    </h3>
                                </Link>
                                <button onClick={() => likeBtnClick()}>
                                    <FontAwesomeIcon icon={faHeart} className={""} />
                                </button>
                            </li>
                        )
                    })}
                </ol>
            </main>
        </>
    )
}

export default wareHouse;