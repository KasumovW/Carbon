import React from "react";
import styles from "./Location.module.scss";
const Location: React.FC = () => {
  return (
    <div className={styles.mainLocation}>
      <div className={styles.text}>
        <span>СВЯЖИТЕСЬ С НАМИ</span>
      </div>
      <div className={styles.address}>
        <div className={styles.map}></div>
        <div className={styles.location}>
          <p>НАШ АДРЕС</p>
          <p className={styles.s}>
            г. Екатеринбург ул. Фронтовых Бригад, д. 18/2, помещ. 201
          </p>
          <p className={styles.s}>
            +7 929 202-24-56 — НОМЕР ТЕЛЕФОНА ДЛЯ МЕССЕНДЖЕРОВ
          </p>
          <p className={styles.s}>PRIMECARBON@YANDEX.RU</p>
          <span className={styles.p}>НАПИСАТЬ НАМ</span>
        </div>
      </div>
    </div>
  );
};

export default Location;
