import { useState } from "react";
import styles from "./Calculator.module.css";

export function Calculator() {

    const [isExpressionFinish, setIisExpressionFinish] = useState(false);
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);
    const [selectedSignal, setSelectedSignal] = useState('');
    const [result, setResult] = useState(0);

    function handleSelectedValue(e) {
        event.preventDefault();

        if (!isExpressionFinish) {
            if (selectedSignal == '') {
                if (firstValue == 0) {
                    setFirstValue(e.target.value);
                } else {
                    setFirstValue(firstValue + e.target.value);
                }
            } else {
                if (secondValue == 0) {
                    setSecondValue(e.target.value);
                } else {
                    setSecondValue(secondValue + e.target.value);
                }
            }
        }
    }

    function handleSelectedSignal(e) {
        event.preventDefault();

        if (selectedSignal == '') {
            setSelectedSignal(e.target.value);
        }
    }

    function handleClearValues() {
        setFirstValue(0);
        setSecondValue(0);
        setResult(0);
        setSelectedSignal('');
        setIisExpressionFinish(false);
    }

    function handleEqualButton() {
        setIisExpressionFinish(!isExpressionFinish);
        calculate();
    }

    function calculate() {
        switch (selectedSignal) {
            case '+': setResult(parseInt(firstValue) + parseInt(secondValue)); break;
            case '-': setResult(parseInt(firstValue) - parseInt(secondValue)); break;
            case '/': setResult(parseInt(firstValue) / parseInt(secondValue)); break;
            case '*': setResult(parseInt(firstValue) * parseInt(secondValue)); break;
            default: break;
        }
    }

    return (
        <div className={styles.wapper}>
            <div className={styles.display}>
                <p>
                    {firstValue}
                    {selectedSignal}
                    {secondValue != 0 ? secondValue : ''}
                    {isExpressionFinish ? '=' : ''}
                    {isExpressionFinish ? result : ''}
                </p>
            </div>

            <div className={styles.keyboard}>
                <button className={styles.buttonsLightGray} onClick={handleClearValues} value={'A/C'}>A/C</button>
                <button className={styles.buttonsLightGray} onClick={null} value={'+/-'}>+/-</button>
                <button className={styles.buttonsLightGray} onClick={null} value={'%'}>%</button>
                <button className={styles.buttonsOrange} onClick={handleSelectedValue} value={'/'}>/</button>

                <button className={styles.buttonsDarkGray} onClick={handleSelectedValue} value={7}>7</button>
                <button className={styles.buttonsDarkGray} onClick={handleSelectedValue} value={8}>8</button>
                <button className={styles.buttonsDarkGray} onClick={handleSelectedValue} value={9}>9</button>
                <button className={styles.buttonsOrange} onClick={handleSelectedSignal} value={'*'}>*</button>

                <button className={styles.buttonsDarkGray} onClick={handleSelectedValue} value={4}>4</button>
                <button className={styles.buttonsDarkGray} onClick={handleSelectedValue} value={5}>5</button>
                <button className={styles.buttonsDarkGray} onClick={handleSelectedValue} value={6}>6</button>
                <button className={styles.buttonsOrange} onClick={handleSelectedSignal} value={'-'}>-</button>

                <button className={styles.buttonsDarkGray} onClick={handleSelectedValue} value={1}>1</button>
                <button className={styles.buttonsDarkGray} onClick={handleSelectedValue} value={2}>2</button>
                <button className={styles.buttonsDarkGray} onClick={handleSelectedValue} value={3}>3</button>
                <button className={styles.buttonsOrange} onClick={handleSelectedSignal} value={'+'}>+</button>

                <button className={styles.span2} onClick={handleSelectedValue} value={0}>0</button>
                <button className={styles.buttonsDarkGray} onClick={null} value={'.'}>.</button>
                <button className={styles.buttonsOrange} onClick={handleEqualButton} value={'='}>=</button>
            </div>
        </div>
    );
}