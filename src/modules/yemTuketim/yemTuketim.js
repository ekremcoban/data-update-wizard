import React, { Component } from "react";
import classes from './yemTuketim.scss';

import ReceiptNoInputText from "../../components/inputTexts/receiptNoInputText";
import SearchButton from "../../components/buttons/searchButton";
import CancelButton from "../../components/buttons/cancelButton";
import UpdateButton from "../../components/buttons/updateButton";
import Modal from "../../components/modal/modal";
import axios from '../../axios-orders';

let receiptNumber, receiptNumberBlocked, integrationState;
class yemTuketim extends Component {
    state = {
        data: null,
        receiptNumber: null,
        receiptNumberBlocked: null,
        integrationState: null,
        loading: false,
        error: false
    }

    postSearchButton = async () => {
        const post = {
            fisNo: this.state.receiptNumber //  31,
        };
        await axios.put('/novifarm/getyemtuketimsarffisi', post)
            .then(async response => {
                console.log(response);
                this.setState({
                    data: response.data,
                    loading: true,
                    error: false
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    error: true
                });
                integrationState = null;
            });

        if (this.state.loading && !this.state.error) {
            this.setState({
                receiptNumber,
                receiptNumberBlocked,
                integrationState
            });
        } else if (this.state.loading && this.state.error) {
            this.setState({
                integrationState: "",
                receiptNumberBlocked: ""
            });
        }

        // console.log(this.state.status)
    }

    cancelButton = () => {
        this.setState({
            receiptNumber: "",
            receiptNumberBlocked: "",
            integrationState: "",
            error: false
        })
    }

    receiptNumberChancedHandler = (event) => {
        this.setState({
            receiptNumber: event.target.value
        });
    }

    integrationStateChancedHandler = (event) => {
        this.setState({
            integrationState: event.target.value
        });
    }

    render() {
        if (this.state.loading && !this.state.error) {
            let dataOfFirms = this.state.data.map(firm => {
                receiptNumberBlocked = firm.fisNo;
                integrationState = firm.integrationState;
            })
        }
        else if (this.state.loading && this.state.error) {
            receiptNumberBlocked = null;
            integrationState = null;
        }

        return (
            <div className={classes.yem}>
                {this.state.error && this.state.receiptNumber !== null ? <Modal click={this.cancelButton} /> : null}
                <div className={classes.yem__section_about}>
                    <div className={classes.u_center_text}>
                        <h2 className={classes.heading_secondary}>
                            Novifarm Yem Tüketim
                        </h2>
                    </div>
                </div>
                <div className={classes.yem__item__1}>
                    <ReceiptNoInputText
                        placeholder="Fiş Numarasını Giriniz"
                        changed={this.receiptNumberChancedHandler}
                        receiptNumber={this.state.receiptNumber}
                        delete={this.state.delete} />
                </div>
                <div className={classes.yem__item__2}>
                    <SearchButton click={this.postSearchButton} />
                </div>
                <div className={classes.yem__item__4}>
                    <span>IntegrationState:</span>
                </div>
                <div className={classes.yem__item__5}>
                    <span>Fiş No:</span>
                </div>
                <div className={classes.yem__item__6}>
                    <ReceiptNoInputText
                        disabled="true"
                        receiptNumberBlocked={this.state.receiptNumberBlocked} />
                </div>
                <div className={classes.yem__item__7}>
                    <ReceiptNoInputText
                        status={this.state.integrationState}
                        changed={this.integrationStateChancedHandler} />
                </div>
                <div className={classes.yem__item__9}>
                    <CancelButton click={this.cancelButton} />
                    <UpdateButton />
                </div>
            </div>
        );
    };
};

export default yemTuketim;