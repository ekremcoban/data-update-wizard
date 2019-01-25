import React from "react";
import classes from './cancelButton.scss';

const cancelButton = (props) => {

    return (
        <button onClick={props.click} className={classes.btn}>İptal</button>
    );
};

export default cancelButton;