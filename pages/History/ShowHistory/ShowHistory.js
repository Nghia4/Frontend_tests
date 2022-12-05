import React from 'react';
import { useState, useEffect } from 'react';
import { useStores } from '../../../context/rootStoreContext.js';
import { observer } from 'mobx-react';
import CalculateLine from '../../../components/CalculateLine/Calculateline.js';

function ShowHistory() {
	const { historyStore } = useStores();
	const { history } = historyStore

	useEffect(() => {
		historyStore.getHistoryItem();
	}, []);

	return (
		<div className="history-container" data-testid="ShowHistory">
			<div className="history-title" data-testid="content">Calculator List</div>
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

export default observer(ShowHistory);
