import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import ShowHistory from "../pages/History/ShowHistory/ShowHistory.js";
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow } from "enzyme"

Enzyme.configure({ adapter: new Adapter() });

describe('Test for ShowHistory', () => {
	test('test for rendering', () => {
		const {getByTestId} = render(<ShowHistory />)
		expect(getByTestId('content')).toBeInTheDocument()
	})
    test('atleast 3 div', () => {
		const div = shallow(<ShowHistory />)
        expect(div.find("div").length).toEqual(3)
    })
})