import React from "react";
import classes from "./card.scss";

const card = (props) => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );
}

export default card;