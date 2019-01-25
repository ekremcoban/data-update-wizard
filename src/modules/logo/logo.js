import React, { Component } from 'react';
import classes from './logo.scss';
import Options from "../../components/options/options-firms";
import ReceiptNoInputText from "../../components/inputTexts/receiptNoInputText";
import SearchButton from "../../components/buttons/searchButton";
import UpdateButton from "../../components/buttons/updateButton";
import CancelButton from "../../components/buttons/cancelButton";
import axios from '../../axios-orders';

class logo extends Component {
       state = {
            firmId: 10,
            receiptNumber: null,
            receiptNumberBlocked: null,
            status: null
        }
    
    postSearchButton = () => {
        const post = {
            firmId: 31,
            //eFaturaStatus: 0,
            ficheNo: "SEF2017000006439"
        };
        axios.get('/logo/getinvoicestatus', {
            params: post
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
    }

    optionChangedHandler = (event) => {
        this.setState({
            firmId: event.target.value
        });
    }

    receiptNumberChancedHandler = (event) => {
        this.setState({
            receiptNumber: event.target.value
        });
    }

    receiptNumberBlockedChangedHandler = (receive) => {
        this.setState({
            receiptNumberBlocked: receive
        });
    }

    statusChangedHandler = (receive) => {
        this.setState({
            status: receive
        });
    }

    render() {
        return (
            <div className={classes.logo}>
                <div className={classes.logo__section_about}>
                    <div className={classes.u_center_text}>
                        <h2 className={classes.heading_secondary}>
                            Logo Fatura Uygulaması
                        </h2>
                    </div>
                </div>
                <div className={classes.logo__item__1}>
                    <Options optionChangedHandler={this.optionChangedHandler} />
                    {this.state.firmId}
                </div>
                <div className={classes.logo__item__2}>
                    <ReceiptNoInputText 
                        placeholder="Fiş Numarasını Giriniz" 
                        changed={this.receiptNumberChancedHandler} />
                </div>
                <div className={classes.logo__item__3}>
                    <SearchButton  click={this.postSearchButton} />
                </div>
                <div className={classes.logo__item__4}>
                    <span>Fiş No:</span>
                </div>
                <div className={classes.logo__item__5}>
                    <span>Status:</span>
                </div>
                <div className={classes.logo__item__7}>
                    <ReceiptNoInputText 
                        disabled="true"
                        receiptNumberBlocked={this.receiptNumberBlockedChangedHandler} />
                </div>
                <div className={classes.logo__item__8}>
                    <ReceiptNoInputText
                        status={this.statusChangedHandler} />
                </div>
                <div className={classes.logo__item__9}>
                    <CancelButton /><UpdateButton />
                </div>
            </div>
        );
    }
}

export default logo;