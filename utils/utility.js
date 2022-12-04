function replaceNumber(str, index, char) {
	if (index > str.length - 1) return str;
	return str.substr(0, index) + char + str.substr(index + 1);
}

function storeExpressionToHistory(result) {
	let history = localStorage.getItem('history');
	if (history) {
		history = JSON.parse(history);
	} else {
		history = [];
	}
	history.push(result);
	localStorage.setItem('history', JSON.stringify(history));
}

export { replaceNumber, storeExpressionToHistory };
