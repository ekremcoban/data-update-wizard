import React from "react";
import classes from "./modalSuccess.scss";
import SuccessButton from "../buttons/successButton";

const modalSuccess = (props) => (
    <div className={classes.modal}>
        {props.children}
        <div className={classes.success}>
            <SuccessButton click={props.click}></SuccessButton>
        </div>
    </div>
);

export default modalSuccess;