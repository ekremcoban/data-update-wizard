import React, { Component } from "react";
import classes from './stokFis.scss';

import ReceiptNoInputText from "../../components/inputTexts/receiptNoInputText";
import SearchButton from "../../components/buttons/searchButton";
import CancelButton from "../../components/buttons/cancelButton";
import UpdateButton from "../../components/buttons/updateButton";

class stokFis extends Component {
    render() {
        return (
            <div className={classes.stokFis}>
                <div className={classes.stokFis__section_about}>
                    <div className={classes.u_center_text}>
                        <h2 className={classes.heading_secondary}>
                            Novifarm Stok Fiş
                        </h2>
                    </div>
                </div>
                <div className={classes.stokFis__item__0}>
                    <span>Fiş veya İrsaliye No Giriniz</span>
                </div>
                <div className={classes.stokFis__item__1}>
                    <ReceiptNoInputText />
                </div>
                <div className={classes.stokFis__item__2}>
                    <SearchButton />
                </div>
                <div className={classes.stokFis__item__3}>
                    <span>IntegrationState:</span>
                </div>
                <div className={classes.stokFis__item__4}>
                    <span>Integration:</span>
                </div>
                <div className={classes.stokFis__item__5}>
                    <span>Fiş veya İrsaliye No:</span>
                </div>
                <div className={classes.stokFis__item__6}>
                    <ReceiptNoInputText disabled="true" />
                </div>
                <div className={classes.stokFis__item__7}>
                    <ReceiptNoInputText />
                </div>
                <div className={classes.stokFis__item__8}>
                    <ReceiptNoInputText />
                </div>
                <div className={classes.stokFis__item__9}>
                    <CancelButton /><UpdateButton />
                </div>
            </div>
        );
    };
};

export default stokFis;