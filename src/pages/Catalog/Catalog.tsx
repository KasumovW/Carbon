import React, { useState } from 'react';
import Card from '../../components/Catalog/Card/Card';
import s from './Catalog.module.scss';

type Props = {};

const Catalog: React.FC = (props: Props) => {
	const [count, setCount] = useState(0);

	const [catalog, setCatalog] = useState([
		'мобильные аксессуары',
		'тюнинг авто',
		'багаж',
		'динозавры',
		'подарки',
		'ложки',
		// { title: 'мобильные аксессуары', id: 1, active: true },
		// { title: 'тюнинг авто', id: 2, active: false },
		// { title: 'багаж', id: 3, active: false },
		// { title: 'динозавры', id: 4, active: false },
		// { title: 'подарки', id: 5, active: false },
		// { title: 'ложки', id: 6, active: false },
	]);

	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				<h2>каталог товаров</h2>
				<ul>
					{catalog.map((element, i) => (
						<li
							onClick={() => setCount(i)}
							className={i === count ? s.active : ''}
							key={element}
						>
							{element}
						</li>
					))}
				</ul>
				<div className={s.cards}>
					<Card color='white' />
					<Card color='white' />
					<Card color='white' />
					<Card color='white' />
					<Card color='white' />
					<Card color='white' />
				</div>
			</div>
		</div>
	);
};

export default Catalog;
