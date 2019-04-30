import React from "react";
import classes from "./dbButton.scss";

const dbButton = (props) => {
    return (
        <button onClick={props.click} className={classes.btn} disabled={props.disabled}>{props.children}</button>
    );
};

export default dbButton;