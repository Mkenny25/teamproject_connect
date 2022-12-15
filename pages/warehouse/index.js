import Header from "../../components/header";
import styles from "../../styles/warehouse/warehouse.module.css";
import { getDatabase, getDatabase_wareHouse } from "../../lib/notion";
import Link from "next/link";
import { Text } from "./[id].js";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons';


export const databaseId = process.env.NOTION_DATABASE_ID;
export const databaseId_wareHouse = process.env.NOTION_DATABASE_ID_WAREHOUSE;

export default function WareHouse({ posts, posts1 }) {
    const likeBtnClick = () => {
        console.log("likeBtnClick");
    }
    console.log("Warehouse画面");
    console.log(posts1);
    return (
        <>
            <Header />
            <div>
                <main className={styles.container}>
                    {/* <h2 className={styles.heading}>ALL WAREHOUSES</h2> */}
                    <ol className={styles.warehouses}>
                        {posts.map((post) => {
                            const date = new Date(post.last_edited_time).toLocaleString(
                                "ja-JP",
                                {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                                }
                            );

                            let picSrc = "";
                            let memberId = "";
                            
                            console.log("【warehouse_memberId】");
                            console.log(post.properties.ID.number);
                            
                            for(let i = 0; i < posts1.length; i++){
                                memberId = posts1[i].properties.ID.number;
                                console.log("【memberId】");
                                console.log(memberId);
                                if(post.properties.ID.number == memberId){
                                    picSrc = posts1[i].properties.PICTURE.files[0].external.url;
                                    break;
                                }
                                
                            }
                            console.log("【picSrc】");
                            console.log(picSrc);

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
                                    <div className={styles.listFooter}>
                                        {/* <div className={styles.personImgWrapper}>
                                            <span>
                                                <Image 
                                                    className={styles.personImg}
                                                    src={picSrc}
                                                    alt="personImg" 
                                                    layout="fill"
                                                    objectFit="contain"
                                                />
                                            </span>
                                        </div> */}
                                        <span className={styles.personImgWrapper}>
                                            <Image 
                                                className={styles.personImg}
                                                src={picSrc}
                                                alt="personImg" 
                                                layout="fill"
                                                objectFit="contain"
                                            />
                                        </span>
                                        
                                        
                                        {/* <FontAwesomeIcon icon={faUser} className={styles.personImg} /> */}
                                        <div className={styles.postInfo}>
                                            <Text text={post.properties.Owner.rich_text} />
                                            {date}
                                        </div>
                                        <button className={styles.heartBtn} onClick={likeBtnClick}>
                                            <FontAwesomeIcon icon={faHeart} className={styles.heartIcon} />
                                        </button>
                                    </div>
                                    
                                </li>
                            )
                        })}
                    </ol>
                </main>
            </div>
            
        </>
    )
}
//         <>
//             <Header />
//             <div>
//                 <main className={styles.container}>
//                     {/* <h2 className={styles.heading}>ALL WAREHOUSES</h2> */}
//                     <ol className={styles.warehouses}>
//                         {posts.map((post) => {
//                             return (
//                                 <li key={post.id} className={styles.warehouse}>
//                                     <Link href={`/warehouse/${post.id}`} >
//                                         <div className={styles.imgWrapper}>
//                                             <span>
//                                                 <Image 
//                                                     className={styles.warehouseImg}
//                                                     src={post.cover.external.url}
//                                                     alt="warehouseImg" 
//                                                     layout="fill"
//                                                     objectFit="contain"
//                                                 />
//                                             </span>
//                                         </div>
//                                         <h3 className={styles.warehouseTitle}>
//                                             <Text text={post.properties.Title.title} />
//                                         </h3>
//                                     </Link>
//                                     <button onClick={() => likeBtnClick()}>
//                                         <FontAwesomeIcon icon={faHeart} className={""} />
//                                     </button>
//                                 </li>
//                             )
//                         })}
//                     </ol>
//                 </main>
//             </div>
            
//         </>
//     )
// }

// import Header from "../../components/header";
// import { getDatabase_wareHouse } from "../../lib/notion";
// import WareHouse from "../../components/warehouse/warehouse";

// export const databaseId_wareHouse = process.env.NOTION_DATABASE_ID_WAREHOUSE;

// export default function index() {
//     return (
//         <div>
//             <Header />
//             <WareHouse />
//         </div>
//     )
// }

export const getStaticProps = async () => {
    const database = await getDatabase(databaseId);
    const database_wareHouse = await getDatabase_wareHouse(databaseId_wareHouse);
    
    return {
      props: {
        posts: database_wareHouse,
        posts1: database,
      },
      revalidate: 1,
    };
  };