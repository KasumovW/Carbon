import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}></div>
      <nav className={styles.navContainer}>
        <ul className={styles.ulContainer}>
          <li>КАТАЛОГ</li>
          <li>КАРБОН</li>
          <li>КАСТОМ</li>
          <li>КОНТАКТЫ</li>
          <li>БИЗНЕСАМ</li>
          <li>ПОРТФОЛИО</li>
          <li>ОТСЛЕДИТЬ ЗАКАЗ</li>
        </ul>
      </nav>
      <div className={styles.iconsContainer}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default Header;
