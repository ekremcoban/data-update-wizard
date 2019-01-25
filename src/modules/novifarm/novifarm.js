import React, { Component } from 'react';
import classes from './novifarm.scss';
import Options from "../../components/options/options-firms";
import ReceiptNoInputText from "../../components/inputTexts/receiptNoInputText";
import SearchButton from "../../components/buttons/searchButton";
import UpdateButton from "../../components/buttons/updateButton";
import CancelButton from "../../components/buttons/cancelButton";
import SideDrawer from "../../navigation/sideDrawer/sideDrawer";

class novi extends Component {
    // state = {
    //     firms: [],
    //     receiptNo,
    //     receiptNoBlocked,
    //     status
    // };
    
    cancelInput = () => {
        console.log("xxx");
    }

    render() {
        return (
            <div className={classes.novi}>
                <div className={classes.novi__section_about}>
                    <div className={classes.u_center_text}>
                        <h2 className={classes.heading_secondary}>
                            Novifarm Fatura Uygulaması
                        </h2>
                    </div>
                </div>
                <SideDrawer/>
                <div className={classes.novi__item__1}>
                    <Options />
                </div>
                <div className={classes.novi__item__2}>
                    <ReceiptNoInputText placeholder="Fiş Numarasını Giriniz" />
                </div>
                <div className={classes.novi__item__3}>
                    <SearchButton />
                </div>
                <div className={classes.novi__item__4}>
                    <span>Fiş No:</span>
                </div>
                <div className={classes.novi__item__5}>
                    <span>Status:</span>
                </div>
                <div className={classes.novi__item__6}>

                </div>
                <div className={classes.novi__item__7}>
                    <ReceiptNoInputText disabled="true" />
                </div>
                <div className={classes.novi__item__8}>
                    <ReceiptNoInputText />
                </div>
                <div className={classes.novi__item__9}>
                    <CancelButton click={this.cancelInput}/><UpdateButton />
                </div>
            </div>
        );
    }
}

export default novi;