import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Calculator from "../pages/Calculator/Calculator.js";
import '@testing-library/jest-dom'
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow } from "enzyme"


Enzyme.configure({ adapter: new Adapter() });

describe('Test for Calculator', () => {
	test('test for rendering Calculator', () => {
		const {getByTestId} = render(<Calculator />)
		expect(getByTestId('Calculator')).toBeInTheDocument()
	})
    test('atleast 10 div', () => {
		const row = shallow(<Calculator />)
        expect(row.find("div").length).toEqual(10)
    })
    })


