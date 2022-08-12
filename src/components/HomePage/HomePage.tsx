import React from "react";
import styles from "./HomePage.module.scss";
import MobileAcces from "./MobileAcces/MobileAcces";
export const HomePage: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>adasdasd</h1>
      </div>
      <div className={styles.banner}>
        ПРЕИМУЩЕСТВА <span>ПРОГРАММЫ ЛОЯЛЬНОСТИ</span> ЗАРЕГИСТРИРОВАТЬСЯ
      </div>
      <MobileAcces />
      <div className={styles.review}>Оставить отзыв</div>
    </>
  );
};
