import { render } from "@testing-library/react";
import React from "react";
import Button from '../components/Button/Button.js';


test("render Button", () => {
    render(<Button />)
})