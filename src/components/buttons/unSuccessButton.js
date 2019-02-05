import React from "react";
import classes from './unSuccessButton.scss';

const unSuccessButton = (props) => {
    return (
        <button className={classes.btn} onClick={props.click}>Kapat</button>
    );
};

export default unSuccessButton;