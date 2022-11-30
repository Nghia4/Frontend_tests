import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import style from './style.less';
import { rootStore } from '../../../stores/rootstore.js';
import Router from '../../../routers';

export default function App() {
	return (
		<Provider {...rootStore}>
			<Router />
		</Provider>
	);
}
