import React, { Component } from "react";
import classes from './hayvanKarti.scss';

import ReceiptNoInputText from "../../components/inputTexts/receiptNoInputText";
import SearchButton from "../../components/buttons/searchButton";
import CancelButton from "../../components/buttons/cancelButton";
import UpdateButton from "../../components/buttons/updateButton";

class hayvanKarti extends Component {
    render () {
        return (
            <div className={classes.hayvanKarti}>
                <div className={classes.hayvanKarti__section_about}>
                    <div className={classes.u_center_text}>
                        <h2 className={classes.heading_secondary}>
                            Novifarm Hayvan Kartı
                        </h2>
                    </div>
                </div>
                <div className={classes.hayvanKarti__item__1}>
                    <ReceiptNoInputText placeholder="Küpe Numarası Giriniz" />
                </div>
                <div className={classes.hayvanKarti__item__2}>
                    <SearchButton />
                </div>
                <div className={classes.hayvanKarti__item__3}>
                    <span>Çiftlik:</span>
                </div>
                <div className={classes.hayvanKarti__item__4}>
                    <span>Barınak:</span>
                </div>
                <div className={classes.hayvanKarti__item__5}>
                    <span>Padok:</span>
                </div>
                <div className={classes.hayvanKarti__item__6}>
                    <span>Ticari Sistem Kodu:</span>
                </div>
                <div className={classes.hayvanKarti__item__7}>
                    <ReceiptNoInputText/>
                </div>
                <div className={classes.hayvanKarti__item__8}>
                    <ReceiptNoInputText />
                </div>
                <div className={classes.hayvanKarti__item__9}>
                    <ReceiptNoInputText />
                </div>
                <div className={classes.hayvanKarti__item__10}>
                    <ReceiptNoInputText />
                </div>
                <div className={classes.hayvanKarti__item__11}>
                    <span>Sigorta Durumu:</span>
                </div>
                <div className={classes.hayvanKarti__item__12}>
                    <span>Police No:</span>
                </div>
                <div className={classes.hayvanKarti__item__13}>
                    <span>Police Tarihi:</span>
                </div>
                <div className={classes.hayvanKarti__item__14}>
                    <ReceiptNoInputText/>
                </div>
                <div className={classes.hayvanKarti__item__15}>
                    <ReceiptNoInputText />
                </div>
                <div className={classes.hayvanKarti__item__16}>
                    <ReceiptNoInputText />
                </div>
                <div className={classes.hayvanKarti__item__17}>
                    <CancelButton /><UpdateButton />
                </div>
            </div>
        );
    };
};

export default hayvanKarti;