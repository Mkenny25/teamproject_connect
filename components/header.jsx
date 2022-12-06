import Navbar from "./navbar";
import Image from "next/image";
import logo from '../public//logo.png'
// import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <>
      <Image 
        className="logo"
        src={logo} 
        alt="logo" 
        height={200} 
      />
      <div>
        <Navbar />
      </div>
    </>
  );
};

export default Header;