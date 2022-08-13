import React from 'react';
import s from './Card.module.scss';

import samurai from '../../../assets/images/jpg/samurai.jpg';
import like from '../../../assets/images/svg/like.svg';
import market from '../../../assets/images/svg/market.svg';
import { Link } from 'react-router-dom';

type Props = {
	color?: 'white' | 'black';
};

const Card: React.FC<Props> = ({ color }) => {
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
			<Link to='/card/:id' className={color === 'black' ? s.black : s.white}>
				глянцевый Чехол из классического карбона на iPhone 13 Pro Max
			</Link>
			<div className={s.color}>
				<div />
				<div />
				<div />
				<div />
			</div>
			<p className={color === 'black' ? s.black : s.white}>5000 ₽</p>
		</div>
	);
};

export default Card;
