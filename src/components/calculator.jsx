import React, { Component } from "react";

const OperatorButton = () => {
    return null;
};

const DigitButton = () => {
    return null;
};

class Calculator extends Component {
    state = {};
    layout = [
        [7, 8, 9, "%"],
        [4, 5, 6, "*"],
        [1, 2, 3, "+"],
        [0, ".", "<", "-"],
    ];
    layout2 = [
        [
            { label: "7", type: "digit" },
            { label: "8", type: "digit" },
            { label: "9", type: "digit" },
            { label: "%", type: "operator" },
        ],
        [
            { label: "4", type: "digit" },
            { label: "5", type: "digit" },
            { label: "6", type: "digit" },
            { label: "+", type: "operator" },
        ],
        [
            { label: "1", type: "digit" },
            { label: "2", type: "digit" },
            { label: "3", type: "digit" },
            { label: "-", type: "operator" },
        ],
        [
            { label: "0", type: "digit" },
            { label: ".", type: "digit" },
            { label: "<<", type: "backspace" },
            { label: "-", type: "operator" },
        ],
    ];
    renderRow = (buttonRow) => {
        return (
            <div style={{ height: 100 }} className="btn-group col-12">
                {buttonRow.map((b) => (
                    <button className="btn btn-secondary">{b}</button>
                ))}
            </div>
        );
    };
    render() {
        return (
            <div className="col-12">
                <h1>Calculator</h1>
                {this.layout.map((buttonRow) => this.renderRow(buttonRow))}
            </div>
        );
    }
}

export default Calculator;
