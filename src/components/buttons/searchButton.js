import React from "react";
import classes from './searchButton.scss';

const searchButton = (props) => {
    return (
        <button className={classes.btn} onClick={props.click}>Ara</button>
    );
};

export default searchButton;