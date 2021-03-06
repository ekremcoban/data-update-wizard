import React from "react";
import classes from './receiptNoInputText.scss';

const ff = (props) => {
    let receiptNo = null;
    if (props.status == null) {
        receiptNo = <input type="text" 
        className={classes.input_text}
        onChange={props.changed}
        value="" ></input>;
    }
    else {
        receiptNo = <input type="text" 
        className={classes.input_text}
        onChange={props.changed}
        value={props.status} ></input>;
    }
    

    if (props.disabled && props.receiptNumberBlocked) {
        receiptNo = <input type="text" 
            className={`${classes.input_text} ${classes.input_text__disabled}`} 
            onChange={props.changed}
            value={props.receiptNumberBlocked}
            disabled>
        </input>
    }
    if (props.disabled && !props.receiptNumberBlocked) {
        receiptNo = <input type="text" 
            className={`${classes.input_text} ${classes.input_text__disabled}`} 
            onChange={props.changed}
            value=""
            disabled>
        </input>
    }

    if (props.placeholder && props.receiptNumber) {
        receiptNo = <input type="text"
            className={classes.input_text}
            placeholder={props.placeholder}
            onChange={props.changed}
            value={props.receiptNumber}>
        </input>;
    }

    if (props.placeholder && !props.receiptNumber) {
        receiptNo = <input type="text"
            className={classes.input_text}
            placeholder={props.placeholder}
            onChange={props.changed}
            value="">
        </input>;
    }

    // if (!props.placeholder) {
    //     receiptNo = <input type="text"
    //         className={classes.input_text}
    //         onChange={props.changed}
    //         value={props.receiptNumber}>
    //     </input>;
    // }

    return (
        <div>
            {receiptNo}
        </div>
    );
};

export default ff;