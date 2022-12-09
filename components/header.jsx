import Navbar from "./navbar";
import Image from "next/image";
import logo from '../public//logo.png'
import styles from "../styles/header.module.css";
import HeaderRight from "./header_right";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Image 
          className="logo"
          src={logo} 
          alt="logo" 
          height={50} 
        />
        <HeaderRight />
      </div>
      <div className={styles.header_underbar}>
        <Navbar />
      </div>
      
    </>
  );
};

export default Header;