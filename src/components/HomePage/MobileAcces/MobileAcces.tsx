import React from "react";
import styles from "./Mobile.module.scss";
const MobileAcces: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.textMobile}>
          <span>МОБИЛЬНЫЕ АКСЕССУАРЫ</span>
        </div>
        <div className={styles.block}></div>
        <div className={styles.transition}>
          <span>ПЕРЕЙТИ В КАТАЛОГ</span>
        </div>
      </div>
    </>
  );
};

export default MobileAcces;
