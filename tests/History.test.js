import { render } from "@testing-library/react";
import React from "react";
import History  from '../pages/History/History.js'
import '@testing-library/jest-dom'

describe('Test for History', () => {
	test('test for rendering Component ShowHistory', () => {
		const {getByTestId} = render(<History />)
		expect(getByTestId('ShowHistory')).toBeInTheDocument()
	})
})