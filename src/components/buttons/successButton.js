import React from "react";
import classes from './successButton.scss';

const successButton = (props) => {
    return (
        <button className={classes.btn} onClick={props.click}>Tamam</button>
    );
};

export default successButton;