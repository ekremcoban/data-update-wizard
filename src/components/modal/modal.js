import React from "react";
import classes from "./modal.scss";
import CancelButton from "../../components/buttons/cancelButton";

const modal = (props) => (
    <div className={classes.modal}>
        Aradığınız Numaralı Kayıt Bulunamadı!
        <div className={classes.cancel}>
            <CancelButton  click={props.click}></CancelButton>
        </div>
    </div>
);

export default modal;