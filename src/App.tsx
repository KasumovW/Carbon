import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Catalog from './pages/Catalog/Catalog';

type Props = {};

const App: React.FC = (props: Props) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/auth' element={<Auth />} />
				<Route path='/catalog' element={<Catalog />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
