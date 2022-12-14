import React from 'react';
import { useState, useEffect } from 'react';
import Button from '../../components/Button/Button.js';
import Row from '../../components/Row/Row.js';
import {
	replaceNumber,
	storeExpressionToHistory,
} from '../../utils/utility.js';
import { observer } from 'mobx-react';
import { useStores } from '../../context/rootStoreContext.js';

function Calculator() {
	const [screenNumber, setScreenNumber] = useState('0');
	const [operator, setOperator] = useState('');
	const [percent, setPercent] = useState('');
	const [replaceNumberIndex, setReplaceNumberIndex] = useState(-1);

	const { calculateStore } = useStores();
	const { expression } = calculateStore

	// screenNumber become normal when click outside
	useEffect(() => {
		document.addEventListener('mousedown', (event) => {
			if (!event.target.classList.contains('number-button')) {
				setReplaceNumberIndex(-1);
			}
		});
		return () => {
			document.removeEventListener('mousedown', (event) => {
				if (!event.target.classList.contains('number-button')) {
					setReplaceNumberIndex(-1);
				}
			});
		};
	}, []);

	function inputNumber(event) {
		const number = event.target.innerText;

		if (expression === '') {
			if (number === '0') {
				return;
			}

			setScreenNumber(number);

			if (operator === '-' && number !== '0') {
				calculateStore.setExpression('-' + number);
			} else {
				calculateStore.setExpression(number);
			}
		}

		if (expression !== '') {
			if (operator !== '') {
				setScreenNumber(number);
			}  else {
				setScreenNumber(screenNumber + number)
			}

			calculateStore.setExpression(expression + operator + number);
			setOperator('');
		}

		if (replaceNumberIndex !== -1) {
			const newInput = replaceNumber(screenNumber, replaceNumberIndex, number); // change number on screen by using substr
			//get new expression when changing number after click operator
			const newExpression = replaceNumber(
				expression,
				expression.length - screenNumber.length + replaceNumberIndex,
				number
			);
			console.log(screenNumber, replaceNumberIndex, number);
			console.log(
				expression,
				expression.length,
				screenNumber.length,
				replaceNumberIndex,
				number,
				newExpression
			);
			setScreenNumber(newInput);
			calculateStore.setExpression(newExpression);
			setReplaceNumberIndex(-1);
			return;
		}
	}

	function resetToZero(event) {
		event.target.innerText = 'AC';
		setScreenNumber('0');
		calculateStore.setExpression('');
		setOperator('');
	}

	function operationCalculator(event) {
		setOperator(event.target.innerText);
	}

	function calculateExpression() {
		const formatExpression = expression.replace(/^0+/, '').replace(/x/g, '*').replace(/??/g, '/').replace(/???/g, '-')

		setOperator('');

		if (formatExpression === '') {
			setScreenNumber('0');
			return;
		}

		const result = eval(formatExpression).toString();

		setScreenNumber(result);
		calculateStore.setExpression(result === '0' ? '' : result);
		storeExpressionToHistory(formatExpression + '=' + result);
	}

	function handleScreenClick(index) {
		setOperator('');
		setReplaceNumberIndex(index);
	}

	return (
		<div className="calculator-container" data-testid="Calculator">
			<div className="calculator-table">
				<div className="calculator-screen">
					<div className="icon">
						<div className="icon-red"></div>
						<div className="icon-yellow"></div>
						<div className="icon-green"></div>
					</div>
					<div className="calculator-screen-display">
						<div className="screen-display-number">
							{screenNumber.split('').map((number, index) => {
								return (
									<input
										className="display-number"
										value={number}
										key={index}
										readOnly
										onClick={() => handleScreenClick(index)}
									/>
								);
							})}
						</div>
					</div>
				</div>
				<div className="calculator-button">
					<Row className={'calculator-button-row'}>
						<Button
							className={'special-button'}
							number={'AC'}
							onClick={resetToZero}
						></Button>
						<Button className={'special-button'} number={'+/-'}></Button>
						<Button
							className={'special-button'}
							number={'%'}
							active={percent === '%'}
						></Button>
						<Button
							className={'operation-button'}
							number={'??'}
							active={operator === '??'}
							onClick={operationCalculator}
						></Button>
					</Row>
					<Row className={'calculator-button-row'}>
						<Button
							className={'number-button'}
							number={'7'}
							onClick={inputNumber}
						></Button>
						<Button
							className={'number-button'}
							number={'8'}
							onClick={inputNumber}
						></Button>
						<Button
							className={'number-button'}
							number={'9'}
							onClick={inputNumber}
						></Button>
						<Button
							className={'operation-button'}
							number={'x'}
							active={operator === 'x'}
							onClick={operationCalculator}
						></Button>
					</Row>
					<Row className={'calculator-button-row'}>
						<Button
							className={'number-button'}
							number={'4'}
							onClick={inputNumber}
						></Button>
						<Button
							className={'number-button'}
							number={'5'}
							onClick={inputNumber}
						></Button>
						<Button
							className={'number-button'}
							number={'6'}
							onClick={inputNumber}
						></Button>
						<Button
							className={'operation-button'}
							number={'???'}
							active={operator === '???'}
							onClick={operationCalculator}
						></Button>
					</Row>
					<Row className={'calculator-button-row'}>
						<Button
							className={'number-button'}
							number={'1'}
							onClick={inputNumber}
						></Button>
						<Button
							className={'number-button'}
							number={'2'}
							onClick={inputNumber}
						></Button>
						<Button
							className={'number-button'}
							number={'3'}
							onClick={inputNumber}
						></Button>
						<Button
							className={'operation-button'}
							number={'+'}
							active={operator === '+'}
							onClick={operationCalculator}
						></Button>
					</Row>
					<Row className={'calculator-button-row'}>
						<Button
							className={'number-button zero'}
							number={'0'}
							onClick={inputNumber}
						></Button>
						<Button className={'special-button comma'} number={','}></Button>
						<Button
							className={'equal-button'}
							number={'='}
							onClick={calculateExpression}
						></Button>
					</Row>
				</div>
			</div>
		</div>
	);
}

export default observer(Calculator);
