import React from 'react';
import { useState, useEffect } from 'react';
import CalculateLine from '../../../components/CalculateLine/CalculateLine.js';

function ShowHistory() {
	const [history, setHistory] = useState([]);

	useEffect(() => {
		const history = JSON.parse(localStorage.getItem('history'));
		if (history) {
			setHistory(history);
		}
	}, []);

	return (
		<div className="history-container">
			<div className="history-title">Calculator List</div>
			<div className="history-list">
				{history.map((item, index) => {
					return (
						<div className="history-list-row" key={index}>
							<CalculateLine className={'list'} item={item} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ShowHistory;
