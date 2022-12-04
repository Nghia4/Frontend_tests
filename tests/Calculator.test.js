import { render } from "@testing-library/react";
import React from "react";
import Calculator from "../pages/Calculator/Calculator.js";


test("render Calculator", () => {
    render(<Calculator />)
})