import React from "react";
import classes from "./updateButton.scss";

const updateButton = (props) => {
    return (
        <button onClick={props.click} className={classes.btn}>Güncelle</button>
    );
};

export default updateButton;