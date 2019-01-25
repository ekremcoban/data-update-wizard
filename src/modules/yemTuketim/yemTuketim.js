import React, { Component } from "react";
import classes from './yemTuketim.scss';

import ReceiptNoInputText from "../../components/inputTexts/receiptNoInputText";
import SearchButton from "../../components/buttons/searchButton";
import CancelButton from "../../components/buttons/cancelButton";
import UpdateButton from "../../components/buttons/updateButton";

class yemTuketim extends Component {
    render () {
        return (
            <div className={classes.yem}>
                <div className={classes.yem__section_about}>
                    <div className={classes.u_center_text}>
                        <h2 className={classes.heading_secondary}>
                            Novifarm Yem Tüketim
                        </h2>
                    </div>
                </div>
                <div className={classes.yem__item__1}>
                    <ReceiptNoInputText placeholder="Fiş Numarası Giriniz" />
                </div>
                <div className={classes.yem__item__2}>
                    <SearchButton />
                </div>
                <div className={classes.yem__item__4}>
                    <span>IntegrationState:</span>
                </div>
                <div className={classes.yem__item__5}>
                    <span>Fiş No:</span>
                </div>
                <div className={classes.yem__item__6}>
                    <ReceiptNoInputText disabled="true" />
                </div>
                <div className={classes.yem__item__7}>
                    <ReceiptNoInputText />
                </div>
                <div className={classes.yem__item__9}>
                    <CancelButton /><UpdateButton />
                </div>
            </div>
        );
    };
};

export default yemTuketim;