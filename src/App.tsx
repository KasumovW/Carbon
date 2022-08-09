import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './components/auth/Auth';

type Props = {};

const App: React.FC = (props: Props) => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/auth' element={<Auth />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
