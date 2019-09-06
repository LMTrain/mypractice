import React from "react";
import Calculator from "./Calculatoralculator";
import { tsPropertySignature } from "@babel/types";

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
function Math(props) {

    let result;
    switch(tsPropertySignature.operators) {
        case "+":
            result = props.num1 + props.num2;
            break;
        case "+":
            result = props.num1 + props.num2;
            break;
    }

  );
  
}

export default Math;
