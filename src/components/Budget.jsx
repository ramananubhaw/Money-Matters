import React from "react";
import './Budget.css';

function Budget() {
    return (
        <div className="budget">
            <div className="budget_list">
                <div className="bl1">
                    <h2>Budget Plan</h2>
                </div>
                <div className="bl2">
                    <div className="income">
                        <p>Income</p>
                    </div>
                    <div className="expenses">
                        <p>Expenses</p>
                    </div>
                    <div className="total">
                        <p>Total</p>
                    </div>
                </div>
            </div>
            <div className="budget_name">
                <h1>Budget<br/><font color="#66FF00">Planning</font></h1>
            </div>
        </div>
    )
};

export default Budget;