import { Routes, Route } from 'react-router-dom';
import React from 'react';
import routerPath from './routerPath.js';
import '../client/components/App/style.scss';

function Router() {
	return (
		<Routes>
			<Route
				path={routerPath.home.value}
				element={<div className="myapp">Hello World</div>}
			/>
			<Route path={routerPath.about.value} element={<div>About</div>} />
		</Routes>
	);
}

export default Router;
