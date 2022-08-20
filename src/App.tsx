import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import Layout from './components/Layout/Layout';
import Auth from './pages/Auth/Auth';
import Card from './pages/Card/Card';
import Catalog from './pages/Catalog/Catalog';

type Props = {};

const App: React.FC = (props: Props) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<HomePage />} />
				</Route>
				<Route path='/auth' element={<Auth />} />
				<Route path='/catalog' element={<Layout />}>
					<Route path='/catalog' element={<Catalog />} />
				</Route>
				<Route path='/card/:id' element={<Layout />}>
					<Route path='/card/:id' element={<Card />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
