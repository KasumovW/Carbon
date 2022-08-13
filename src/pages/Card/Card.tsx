import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import s from './Card.module.scss';
import samurai from '../../assets/images/jpg/samurai.jpg';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CatalogCard from '../../components/Catalog/Card/Card';

type Props = {};

SwiperCore.use([Navigation]);

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
				<Link to='/'>Главная</Link> - <Link to='/catalog'>каталог</Link> -{' '}
				<Link to={`/card/${id}`}>карточка</Link>
			</p>
			<div className={s.container}>
				<div className={s.slider}>
					<Swiper
						modules={[Navigation, Pagination]}
						spaceBetween={0}
						slidesPerView={1}
						onSlideChange={() => console.log('slide change')}
						onSwiper={(swiper) => console.log(swiper)}
					>
						<SwiperSlide style={{ width: '10px' }}>
							<img
								className={s.main_image}
								src={samurai}
								alt='Картинка не загрузилась'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className={s.main_image}
								src={samurai}
								alt='Картинка не загрузилась'
							/>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className={s.information}>
					<h2>5000 ₽</h2>
					<p>
						Модель: <span>iPhone 13 Pro Max</span>
					</p>
					<div className={s.models}>
						<label htmlFor='radio'>
							<input type='radio' name='radio' id='radio' />
							13 Pro Max
						</label>
						<label htmlFor='radio'>
							<input type='radio' name='radio' id='radio' />
							13 Pro Max
						</label>
						<label htmlFor='radio'>
							<input type='radio' name='radio' id='radio' />
							13 Pro Max
						</label>
						<label htmlFor='radio'>
							<input type='radio' name='radio' id='radio' />
							13 Pro Max
						</label>
					</div>
					<p>
						Цвет: <span>CLEARCOAT</span>
					</p>
					<div className={s.colors}>
						<div />
						<div />
						<div />
						<div />
					</div>
					<div className={s.description}>
						<p>Описание</p>
						<span>
							Амбидекстри́я — врождённое или выработанное в тренировке равное
							развитие функций обеих рук, без выделения ведущей руки, и
							способность человека выполнять двигательные действия правой и
							левой рукой с одинаковой скоростью и эффективностью. Амбидекстри́я
							— врождённое или выработанное в тренировке равное развитие функций
							обеих рук, без выделения ведущей руки, и способность человека
							выполнять двигательные действия правой и левой рукой с одинаковой
							скоростью и эффективностью. Амбидекстри́я — врождённое или
							выработанное в тренировке равное развитие функций обеих рук, без
							выделения ведущей руки, и способность человека выполнять
							двигательные действия правой и левой рукой с одинаковой скоростью
							и эффективностью. Амбидекстри́я — врождённое или выработанное в
							тренировке равное развитие функций обеих рук, без выделения
							ведущей руки, и способность человека выполнять двигательные
							действия правой и левой рукой с одинаковой скоростью и
							эффективностью. Амбидекстри́я — врождённое или выработанное в
							тренировке равное развитие функций обеих рук, без выделения
							ведущей руки, и способность человека выполнять двигательные
							действия правой и левой рукой с одинаковой скоростью и
							эффективностью. Амбидекстри́я — врождённое или выработанное в
							тренировке равное развитие функций обеих рук, без выделения
							ведущей руки, и способность человека выполнять двигательные
							действия правой и левой рукой с одинаковой скоростью и
							эффективностью.
						</span>
					</div>
				</div>
			</div>
			<h3>Корпоративным клиентам</h3>
			<h2>смотрите также</h2>
			<div className={s.recommend}>
				<CatalogCard color='black' />
				<CatalogCard color='black' />
				<CatalogCard color='black' />
				<CatalogCard color='black' />
			</div>
		</div>
	);
};

export default Card;
