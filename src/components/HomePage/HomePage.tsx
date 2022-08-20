import React from "react";
import CardMap from "./CardMap/CardMap";
import styles from "./HomePage.module.scss";
import MobileAcces from "./MobileAcces/MobileAcces";
import arrow from "../../assets/images/svg/arrow.svg";
import { Link } from "react-router-dom";
import Location from "./Location/Location";

export const HomePage: React.FC = () => {
  return (
    <>
      <div className={styles.x}>
        <div className={styles.container}>
          <div className={styles.title}>PRIME CARBON</div>
          <div className={styles.a}>
            <span></span>
            <p>
              бренд технологических аксессуаров, декора и предметов быта из 100%
              карбона
            </p>
          </div>
          <div className={styles.a}>
            <p>КАТАЛОГ</p>
            <Link to={`/catalog`}>
              {" "}
              <img src={arrow} alt="" />
            </Link>
          </div>
        </div>
      </div>
      {/* ПРЕИМУЩЕСТВА <span>ПРОГРАММЫ ЛОЯЛЬНОСТИ</span> ЗАРЕГИСТРИРОВАТЬСЯ */}
      <div className={styles.banner}>
        <p>ПРЕИМУЩЕСТВА ПРОГРАММЫ ЛОЯЛЬНОСТИ</p>
      </div>
      <MobileAcces />
      <CardMap />
      <div className={styles.review}>Оставить отзыв</div>
      <Location />
    </>
  );
};
