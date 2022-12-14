import { Routes, Route, useRoutes } from 'react-router-dom';
import React from 'react';
import routerPath from './routerPath.js';
import '../client/components/App/style.scss';
import Calculator from '../pages/Calculator/Calculator.js';
import History from '../pages/History/History.js';

function Router() {
	return (
		<Routes data-testid="Router">
			<Route
				path={routerPath.home.value}
				element={<div className="myapp">Hello World</div>}
			/>
			<Route path={routerPath.calculator.value} element={<Calculator />} />
			<Route path={routerPath.history.value} element={<History />} />
		</Routes>
	);
}

export default Router;
