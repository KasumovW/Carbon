import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import s from "./Card.module.scss";

type Props = {};

const Card: React.FC = (props: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className={s.wrapper}>
      <p onClick={() => navigate(-1)} className={s.back}>
        назад
      </p>
      <h2>глянцевый чехол из классического карбона iPhone 13 Pro Max</h2>
      <p>
        <Link to="/">Главная</Link> - <Link to="/catalog">каталог</Link> -{" "}
        <Link to={`/card/${id}`}>карточка</Link>
      </p>
    </div>
  );
};

export default Card;
