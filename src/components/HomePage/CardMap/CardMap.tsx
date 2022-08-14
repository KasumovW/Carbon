import { title } from "process";
import React, { useState } from "react";
import styles from "./CardMap.module.scss";

type Props = {};
const CardMap: React.FC = (props: Props) => {
  interface Category {
    title?: string;
    id?: number;
    active?: boolean;
    description: string;
  }

  const [category, setCategory] = useState<Category[]>([
    {
      title: "Мобильные аксессуары",
      id: 1,
      active: true,
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Тюнинг авто",
      id: 2,
      active: false,
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Багаж",
      id: 3,
      active: false,
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Динозавры",
      id: 4,
      active: false,
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Подарки",
      id: 5,
      active: false,
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Ложки",
      id: 6,
      active: false,
      description: "Lorem ipsum dolor sit amet.",
    },
  ]);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wid}>
          {category.map((item) => (
            <div className={styles.cards} key={item.id}>
              <div className={styles.imgContainer}></div>
              <div className={styles.itemTitle}>{item.title}</div>
              <div className={styles.itemDesc}>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardMap;
