import React, { Component } from 'react';
import classes from './satisFis.scss';

import ReceiptNoInputText from "../../components/inputTexts/receiptNoInputText";
import SearchButton from "../../components/buttons/searchButton";
import CancelButton from "../../components/buttons/cancelButton";
import UpdateButton from "../../components/buttons/updateButton";

class satisFis extends Component {
    render() {
        return (
            <div className={classes.satisFis}>
                <div className={classes.satisFis__section_about}>
                    <div className={classes.u_center_text}>
                        <h2 className={classes.heading_secondary}>
                            Novifarm Satış Fiş
                        </h2>
                    </div>
                </div>
                <div className={classes.satisFis__item__1}>
                    <ReceiptNoInputText placeholder="Fiş Numarasını Giriniz" />
                </div>
                <div className={classes.satisFis__item__2}>
                    <SearchButton />
                </div>
                <div className={classes.satisFis__item__3}>
                    <span>IntegrationState:</span>
                </div>
                <div className={classes.satisFis__item__4}>
                    <span>Integration:</span>
                </div>
                <div className={classes.satisFis__item__5}>
                    <span>Fiş No:</span>
                </div>
                <div className={classes.satisFis__item__6}>
                    <ReceiptNoInputText disabled="true" />
                </div>
                <div className={classes.satisFis__item__7}>
                    <ReceiptNoInputText />
                </div>
                <div className={classes.satisFis__item__8}>
                    <ReceiptNoInputText />
                </div>
                <div className={classes.satisFis__item__9}>
                    <CancelButton /><UpdateButton />
                </div>
            </div>
        );
    };
};

export default satisFis;