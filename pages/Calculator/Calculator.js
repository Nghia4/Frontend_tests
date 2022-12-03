import React from 'react';
import { useState, useEffect } from 'react';
import Button from '../../components/Button/Button.js';
import Row from '../../components/Row/Row.js';

function Calculator() {
	const [screenNumber, setScreenNumber] = useState('0');


	function inputNumber(event) {
		const number = event.target.innerText
	}

	return (
		<div className="calculator-container">
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
									/>
								);
							})}
						</div>
					</div>
				</div>
				<div className="calculator-button">
					<Row className={'calculator-button-row'}>
						<Button className={'special-button'} number={'AC'}></Button>
						<Button className={'special-button'} number={'+/-'}></Button>
						<Button className={'special-button'} number={'%'}></Button>
						<Button className={'operation-button'} number={'/'}></Button>
					</Row>
					<Row className={'calculator-button-row'}>
						<Button className={'number-button'} number={'7'} onClick={inputNumber}></Button>
						<Button className={'number-button'} number={'8'}onClick={inputNumber}></Button>
						<Button className={'number-button'} number={'9'}onClick={inputNumber}></Button>
						<Button className={'operation-button'} number={'x'}></Button>
					</Row>
					<Row className={'calculator-button-row'}>
						<Button className={'number-button'} number={'4'} onClick={inputNumber}></Button>
						<Button className={'number-button'} number={'5'} onClick={inputNumber}></Button>
						<Button className={'number-button'} number={'6'} onClick={inputNumber}></Button>
						<Button className={'operation-button'} number={'-'}></Button>
					</Row>
					<Row className={'calculator-button-row'}>
						<Button className={'number-button'} number={'1'} onClick={inputNumber}></Button>
						<Button className={'number-button'} number={'2'} onClick={inputNumber}></Button>
						<Button className={'number-button'} number={'3'} onClick={inputNumber}></Button>
						<Button className={'operation-button'} number={'+'}></Button>
					</Row>
					<Row className={'calculator-button-row'}>
						<Button className={'number-button zero'} number={'0'}></Button>
						<Button className={'special-button comma'} number={'.'}></Button>
						<Button className={'equal-button'} number={'='}></Button>
					</Row>
				</div>
			</div>
		</div>
	);
}

export default Calculator;
