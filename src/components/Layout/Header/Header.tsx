import React from "react";
import styles from "./Header.module.scss";
import img from "../../../assets/images/svg/Vector.svg";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/svg/auth.svg";
import img2 from "../../../assets/images/svg/likes.svg";
import img3 from "../../../assets/images/svg/ell.svg";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.imgCont}>
          <Link to={`/`}>
            <img src={img} alt="" />
          </Link>
        </div>
        <div className={styles.navText}>
          <ul>
            <li>
              <Link to={`/catalog`}>КАТАЛОГ</Link>
            </li>
            <li>КАРБОН</li>
            <li>КОСТЮМ</li>
            <li>КОНТАКТАМ</li>
            <li>БИЗНЕСАМ</li>
            <li>ПОРТФОЛИО</li>
            <li>ОТСЛЕДИТЬ ЗАКАЗ</li>
          </ul>
        </div>
        <div className={styles.iconCont}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
