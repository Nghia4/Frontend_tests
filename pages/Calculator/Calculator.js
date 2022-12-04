import React from 'react';
import { useState, useEffect } from 'react';
import Button from '../../components/Button/Button.js';
import Row from '../../components/Row/Row.js';
import { replaceNumber } from '../../utils/utility.js';


function Calculator() {
	
	const [screenNumber, setScreenNumber] = useState('0');
	const [expression, setExpression] = useState("");
	const [operator, setOperator] = useState("");
	const [percent, setPercent] = useState("")
	const [replaceNumberIndex, setReplaceNumberIndex] = useState(-1)

	function inputNumber (event) {
		const number = event.target.innerText

		if (expression === "") {
            if (number === "0") {
                return 
            }

            setScreenNumber(number);
            
            if (operator === "-" && number !== "0") {
                setExpression("-" + number);
            } else {
                setExpression(number);
            }
        }
       
        if (expression !== "") {
            if (operator !== "") {
                setScreenNumber(number);
            } else {
                setScreenNumber(screenNumber + number);
            }

            setExpression(expression + operator + number);
            setOperator("");
        }
		
		if (replaceNumberIndex !== -1) {
            const newInput = replaceNumber(screenNumber, replaceNumberIndex, number);
            const newExpression = replaceNumber(expression, expression.length
                                                    - screenNumber.length
                                                    + replaceNumberIndex, number);
            setScreenNumber(newInput);
            setExpression(newExpression);
            setReplaceNumberIndex(-1);
            return;
        }

	}
	
	
	function resetToZero (event) {
		event.target.innerText = "AC"
		setScreenNumber("0")
		setExpression("");
        setOperator("");
	}

	function operationCalculator (event) {
		setOperator(event.target.innerText)
	}

	function calculateExpression () {
        const formatExpression = expression.replace(/^0+/, "").replace(/x/g, "*");

        setOperator("");

        if (formatExpression === "") {
            setScreenNumber("0");
            return;
        }

        const result = eval(formatExpression).toString();
        
        setScreenNumber(result);
        setExpression(result === "0" ? "" : result);
    }

	function handleScreenClick (index) {
		setOperator("");
		setReplaceNumberIndex(index)
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
										onClick={() => handleScreenClick(index)}
									/>
								);
							})}
						</div>
					</div>
				</div>
				<div className="calculator-button">
					<Row className={'calculator-button-row'}>
						<Button className={'special-button'} number={"AC"} onClick={resetToZero}></Button>
						<Button className={'special-button'} number={'+/-'}></Button>
						<Button className={'special-button'} number={'%'} active={percent === "%"}></Button>
						<Button className={'operation-button'} number={'/'} active={operator === "/"} onClick={operationCalculator}></Button>
					</Row>
					<Row className={'calculator-button-row'}>
						<Button className={'number-button'} number={'7'} onClick={inputNumber}></Button>
						<Button className={'number-button'} number={'8'}onClick={inputNumber}></Button>
						<Button className={'number-button'} number={'9'}onClick={inputNumber}></Button>
						<Button className={'operation-button'} number={'x'} active={operator === "x"} onClick={operationCalculator}></Button>
					</Row>
					<Row className={'calculator-button-row'}>
						<Button className={'number-button'} number={'4'} onClick={inputNumber}></Button>
						<Button className={'number-button'} number={'5'} onClick={inputNumber}></Button>
						<Button className={'number-button'} number={'6'} onClick={inputNumber}></Button>
						<Button className={'operation-button'} number={'-'} active={operator === "-"} onClick={operationCalculator}></Button>
					</Row>
					<Row className={'calculator-button-row'}>
						<Button className={'number-button'} number={'1'} onClick={inputNumber}></Button>
						<Button className={'number-button'} number={'2'} onClick={inputNumber}></Button>
						<Button className={'number-button'} number={'3'} onClick={inputNumber}></Button>
						<Button className={'operation-button'} number={'+'} active={operator === "+"} onClick={operationCalculator}></Button>
					</Row>
					<Row className={'calculator-button-row'}>
						<Button className={'number-button zero'} number={'0'} onClick={inputNumber}></Button>
						<Button className={'special-button comma'} number={','}></Button>
						<Button className={'equal-button'} number={'='} onClick={calculateExpression}></Button>
					</Row>
				</div>
			</div>
		</div>
	);
}

export default Calculator;
