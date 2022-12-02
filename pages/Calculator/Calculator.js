import React from 'react';
import Button from '../../components/Button/Button.js';
import Row from '../../components/Row/Row.js';


function Calculator() {
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
						<div className="screen-display-number">0</div>
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
						<Button className={'number-button'} number={'7'}></Button>
						<Button className={'number-button'} number={'8'}></Button>
						<Button className={'number-button'} number={'9'}></Button>
						<Button className={'operation-button'} number={'x'}></Button>
					</Row>
					<Row className={'calculator-button-row'}>
						<Button className={'number-button'} number={'4'}></Button>
						<Button className={'number-button'} number={'5'}></Button>
						<Button className={'number-button'} number={'6'}></Button>
						<Button className={'operation-button'} number={'-'}></Button>
					</Row>
					<Row className={'calculator-button-row'}>
						<Button className={'number-button'} number={'1'}></Button>
						<Button className={'number-button'} number={'2'}></Button>
						<Button className={'number-button'} number={'3'}></Button>
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
