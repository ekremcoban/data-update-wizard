import React from "react";
import classes from "./modalUnSuccess.scss";
import UnSuccessButton from "../buttons/unSuccessButton";

const modalUnSuccess = (props) => (
    <div className={classes.modal}>
        {props.children}
        <div className={classes.unSuccess}>
            <UnSuccessButton click={props.click}></UnSuccessButton>
        </div>
    </div>
);

export default modalUnSuccess;