import React from "react";
import styles from "./Footer.module.scss";
import im from "../../../assets/images/svg/Vector.svg";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <div className={styles.nameProject}>
          <Link to={`/`}>
            <img src={im} alt="" />
          </Link>
          <span>PRIME CARBON</span>
        </div>
        <div className={styles.navText}>
          <div className={styles.block}>
            НАВИГАЦИЯ
            <p>ГЛАВНАЯ</p>
            <p>
              <Link to={`/catalog`}>КАТАЛОГ</Link>
            </p>
            <p>О НАС</p>
            <p>УСЛОВИЯ</p>
            <p>КОНТАКТЫ</p>
          </div>
          <div className={styles.block}>
            КОНТАКТЫ
            <p>+ 7 999 999-99-99</p>
            <p>--НОМЕР ТЕЛЕФОНА ДЛЯ МЕССЕНДЖЕРОВ</p>
            <p>PRIMECARBON@YANDEX.RU</p>
          </div>
          <div className={styles.block}>
            ИНН/КПП
            <p>777777777777777/77777777777</p>
            <div className={styles.address}>
              ЮР.АДРЕС
              <p>г. Екатеринбург ул. Фронтовых Бригад, д. 18/2, помещ. 201</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
