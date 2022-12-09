import styles from "../styles/header_right.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faPen, faUser } from '@fortawesome/free-solid-svg-icons';

const HeaderRight = () => {
  return (
    <>
      <div className={styles.header_right}>
        <ul className={styles.header_right_ul}>
            <li className={styles.header_right_li}>
                <Link href="#" className={styles.search_container}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
                    <input type="search" size="25" placeholder="キーワードや名前で検索" />
                </Link>
            </li>
            <li className={styles.header_right_li}>
                <Link href="#">
                    <FontAwesomeIcon icon={faBell} className={styles.bellIcon} />
                </Link>
            </li>
            <li className={styles.header_right_li}>
                <Link href="#">
                    <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
                </Link>
            </li>
            <li className={styles.header_right_li}>
                <button type="button" className={styles.header_right_btn} onClick={""}>
                    <FontAwesomeIcon icon={faPen} className={styles.penIcon} />
                    投稿
                </button>
            </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderRight;