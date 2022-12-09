import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    let path = router.asPath;
    console.log("currentPath: " + path);
    return (
        <>
            <nav className="NavbarItems">
                <ul className={styles.nav_ul}>
                    <li className={styles.nav_li}>
                        <Link href='/'
                            className={
                                path == '/'
                                ? styles.currentLink
                                : styles.link
                            }
                        >
                            MEMBER
                        </Link>
                    </li>
                    <li className={styles.nav_li}>
                        <Link href='/warehouse' 
                            className={
                                path.includes('warehouse')
                                ? styles.currentLink
                                : styles.link
                            }
                        >
                            WAREHOUSE
                        </Link>
                    </li>
                    <li className={styles.nav_li}>
                        <Link href='/howto' 
                            className={
                                path.includes('howto')
                                ? styles.currentLink
                                : styles.link
                            }
                        >
                            HOWTO
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;