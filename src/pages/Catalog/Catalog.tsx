import React, { useState } from "react";
import Card from "../../components/Catalog/Card/Card";
import s from "./Catalog.module.scss";

type Props = {};

const Catalog: React.FC = (props: Props) => {
  interface ICatalog {
    title?: string;
    id?: number;
    active?: boolean;
  }

  const [catalog, setCatalog] = useState<ICatalog[]>([
    { title: "мобильные аксессуары", id: 1, active: true },
    { title: "тюнинг авто", id: 2, active: false },
    { title: "багаж", id: 3, active: false },
    { title: "динозавры", id: 4, active: false },
    { title: "подарки", id: 5, active: false },
    { title: "ложки", id: 6, active: false },
  ]);

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h2>каталог товаров</h2>
        <ul>
          {catalog.map((element) => (
            <li className={element.active ? s.active : ""} key={element.id}>
              {element.title}
            </li>
          ))}
        </ul>
        <div className={s.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
