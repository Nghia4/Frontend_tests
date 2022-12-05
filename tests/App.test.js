import { render } from "@testing-library/react";
import React from "react";
import App from '../client/components/App/index.js'
import '@testing-library/jest-dom'

describe('Test for App', () => {
	test('test for rendering', () => {
		const {getByTestId} = render(<App />)
		expect(getByTestId('Router')).toBeInTheDocument()
	})
})