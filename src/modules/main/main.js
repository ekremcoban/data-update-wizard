import React, { Component } from 'react';
import classes from './main.scss';
import Options from "../../components/options/options-firms";
import ReceiptNoInputText from "../../components/inputTexts/receiptNoInputText";
import SearchButton from "../../components/buttons/searchButton";
import UpdateButton from "../../components/buttons/updateButton";
import CancelButton from "../../components/buttons/cancelButton";

class main extends Component {

    render() {
        return (
            <div className={classes.main}>
                <div className={classes.main__section_about}>
                    <div className={classes.u_center_text}>
                        <h2 className={classes.heading_secondary}>
                            Logo Fatura Uygulaması
                        </h2>
                    </div>
                </div>
                <div className={classes.main__item__1}>
                    <Options />
                </div>
                <div className={classes.main__item__2}>
                    <ReceiptNoInputText placeholder="Fiş Numarasını Giriniz" />
                </div>
                <div className={classes.main__item__3}>
                    <SearchButton />
                </div>
                <div className={classes.main__item__4}>
                    <span>Fiş No:</span>
                </div>
                <div className={classes.main__item__5}>
                    <span>Status:</span>
                </div>
                <div className={classes.main__item__6}>

                </div>
                <div className={classes.main__item__7}>
                    <ReceiptNoInputText disabled="true" />
                </div>
                <div className={classes.main__item__8}>
                    <ReceiptNoInputText />
                </div>
                <div className={classes.main__item__9}>
                    <CancelButton /><UpdateButton />
                </div>
            </div>
        );
    }
}

export default main;