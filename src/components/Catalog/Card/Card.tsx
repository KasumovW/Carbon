import React from 'react';
import s from './Card.module.scss';

import samurai from '../../../assets/images/jpg/samurai.jpg';
import like from '../../../assets/images/svg/like.svg';
import market from '../../../assets/images/svg/market.svg';
import { Link } from 'react-router-dom';

type Props = {};

const Card: React.FC = (props: Props) => {
	return (
		<div className={s.wrapper}>
			<div className={s.images}>
				<img
					className={s.main_image}
					src={samurai}
					alt='Картинка не прогрузилась'
				/>
				<img src={like} alt='Картинка не прогрузилась' />
				<img src={market} alt='Картинка не прогрузилась' />
			</div>
			<Link to='/card/:id'>
				глянцевый Чехол из классического карбона на iPhone 13 Pro Max
			</Link>
			<div className={s.color}>
				<div />
				<div />
				<div />
				<div />
			</div>
			<p>5000 ₽</p>
		</div>
	);
};

export default Card;
