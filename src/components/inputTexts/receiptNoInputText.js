import React from "react";
import classes from './receiptNoInputText.scss';

const ff = (props) => {
    let receiptNo = <input type="text" className={classes.input_text} id="input"></input>;
    
    if (props.disabled) {
        receiptNo = <input type="text" className={`${classes.input_text} ${classes.input_text__disabled}`} id="input" disabled></input>
    }

    if (props.placeholder) {
        receiptNo = <input type="text" className={classes.input_text} placeholder={props.placeholder} id="input"></input>;
    }

    return (
        <div>
            {receiptNo}
        </div>
    );
};

export default ff;