import React from "react";
import classes from "./modalCancel.scss";
import CancelButton from "../buttons/cancelButton";

const modalCancel = (props) => (
    <div className={classes.modal}>
        {props.children}
        <div className={classes.cancel}>
            <CancelButton click={props.click}></CancelButton>
        </div>
    </div>
);

export default modalCancel;