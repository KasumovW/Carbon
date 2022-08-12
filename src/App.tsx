import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Card from './pages/Card/Card';
import Catalog from './pages/Catalog/Catalog';

type Props = {};

const App: React.FC = (props: Props) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/auth' element={<Auth />} />
				<Route path='/catalog' element={<Catalog />} />
				<Route path='/card/:id' element={<Card />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
