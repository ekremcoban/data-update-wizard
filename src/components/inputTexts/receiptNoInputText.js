import React from "react";
import classes from './receiptNoInputText.scss';

const ff = (props) => {
    let receiptNo = <input type="text" 
        className={classes.input_text}
        onChange={props.changed}
        value={props.status} ></input>;

    if (props.disabled) {
        receiptNo = <input type="text" 
            className={`${classes.input_text} ${classes.input_text__disabled}`} 
            onChange={props.changed}
            value={props.receiptNumberBlocked}
            disabled>
        </input>
    }

    if (props.placeholder) {
        receiptNo = <input type="text"
            className={classes.input_text}
            placeholder={props.placeholder}
            onChange={props.changed}
            value={props.receiptNumber}>
        </input>;
    }

    return (
        <div>
            {receiptNo}
        </div>
    );
};

export default ff;