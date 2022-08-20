import React from "react";
import styles from "./Header.module.scss";
import img from "../../../assets/images/svg/Vector.svg";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/svg/auth.svg";
import img2 from "../../../assets/images/svg/likes.svg";
import img3 from "../../../assets/images/svg/ell.svg";

const Header: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Link to={`/`}>
            <img src={img} alt="" />
          </Link>
        </div>
        <nav className={styles.navContainer}>
          <ul className={styles.ulContainer}>
            <li>
              <Link to={`/catalog`}>КАТАЛОГ</Link>
            </li>
            <li>КАРБОН</li>
            <li>КАСТОМ</li>
            <li>КОНТАКТЫ</li>
            <li>БИЗНЕСАМ</li>
            <li>ПОРТФОЛИО</li>
            <li>ОТСЛЕДИТЬ ЗАКАЗ</li>
          </ul>
        </nav>
        <div className={styles.iconsContainer}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
