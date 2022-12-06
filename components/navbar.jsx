import Link from "next/link";
// import styles from "../styles/navbar.module.css";

const Navbar = () => {
    return (
        <>
            <div>
                <Link href='/introduction'>
                    <a>メンバー</a>           
                </Link>
                <Link href='/topic'>
                    <a>トピック</a>            
                </Link>
                <Link href='/howto/'>
                    <a>コネクトの使い方</a>            
                </Link>
            </div>
        </>
    );
};

export default Navbar;