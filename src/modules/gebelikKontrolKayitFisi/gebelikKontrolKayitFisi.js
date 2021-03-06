import React, { Component } from "react";
import classes from './gebelikKontrolKayitFisi.scss';

import ReceiptNoInputText from "../../components/inputTexts/receiptNoInputText";

import SearchButton from "../../components/buttons/searchButton";
import CancelButton from "../../components/buttons/cancelButton";
import UpdateButton from "../../components/buttons/updateButton";

import ModalCancel from "../../components/modalCancel/modalCancel";
import ModalSuccess from "../../components/modalSuccess/modalSuccess";
import ModalUnSuccess from "../../components/modalUnSuccess/modalUnSuccess";

import axios from '../../axios-orders';

let receiptNumber, receiptNumberBlocked, integrationState, integration;
class gebelikKontrolKayitFisi extends Component {
    state = {
        data: null,
        receiptNumber: "",
        receiptNumberBlocked: null,
        integrationState: null,
        integration: null,
        loading: false,
        error: false,
        updateButtonSuccess: false,
        updateButtonError: false, 
        notFound: false
    }

    postSearchButton = async () => {
        const postfisNo = {
            fisNo: this.state.receiptNumber //  31,
        };
        await axios.put('/novifarm/getgebelikkontrolkayitfisi', postfisNo)
            .then(async response => {
                //console.log(response);
                this.setState({
                    data: response.data,
                    loading: true,
                    error: false
                });
            })
            .catch(err => {
                //console.log(err);

                this.setState({
                    notFound: true
                });
                integrationState = null;
                integration = null;
            });

        if (this.state.notFound) {
            const postIrsaliyeNo = {
                irsaliyeNo: this.state.receiptNumber //  31,
            };
            await axios.put('/novifarm/getgebelikkontrolkayitfisi', postIrsaliyeNo)
            .then(async response => {
                //console.log(response);
                this.setState({
                    data: response.data,
                    loading: true,
                    error: false,
                    notFound: false
                });
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    error: true,
                    notFound: false
                });
                integrationState = null;
                integration = null;
            });
        }
        

        if (this.state.loading && !this.state.error) {
            this.setState({
                receiptNumber,
                receiptNumberBlocked,
                integrationState,
                integration
            });
        } else if (this.state.loading && this.state.error) {
            this.setState({
                receiptNumber: "",
                receiptNumberBlocked: "",
                integration: "",
                integrationState: ""
            });
        }


        // console.log(this.state.status)
    }

    updateDataButton = async () => {
        const post = {
            fisNo: this.state.receiptNumberBlocked,
            integration: this.state.integration,
            integrationState: this.state.integrationState
        };

        await axios.put('/novifarm/updategebelikkontrolkayitfisi', post)
            .then(async res => {
                this.setState({
                    error: false,
                    updateButtonSuccess: true
                });
                return res;
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    error: true,
                    updateButtonError: true
                });
                console.log(err)
            });
    }

    cancelButton = () => {
        this.setState({
            receiptNumber: "",
            receiptNumberBlocked: "",
            integrationState: "",
            integration: "",
            error: false
        })
    }

    successButton = () => {
        this.setState({
            receiptNumber: "",
            receiptNumberBlocked: "",
            integrationState: "",
            integration: "",
            error: false, 
            updateButtonSuccess: false,
            updateButtonError: false
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

    integrationChancedHandler = (event) => {
        this.setState({
            integration: event.target.value
        });
    }

    render() {
        if (this.state.loading && !this.state.error) {
            receiptNumberBlocked = this.state.data[0].fisNo;
            integrationState = this.state.data[0].integrationState;
            integration = this.state.data[0].integration;      
        }
        else if (this.state.loading && this.state.error) {
            receiptNumberBlocked = null;
            integrationState = null;
            integration = null;
        }

        return (
            <div className={classes.gebelikKontrolKayitFisi}>
            {this.state.error && this.state.receiptNumber !== null 
                && !this.state.updateButtonError && !this.state.updateButtonSuccess ?
                    <ModalCancel click={this.cancelButton} >Aradığınız Numaralı Kayıt Bulunamadı!</ModalCancel> : null}
                {!this.state.error && this.state.updateButtonSuccess ? 
                    <ModalSuccess click={this.successButton}>Güncelleme Başarılı</ModalSuccess> : null}
                {this.state.error && this.state.updateButtonError ? 
                    <ModalUnSuccess click={this.successButton}>Güncelleme Başarısız</ModalUnSuccess> : null}
                <div className={classes.gebelikKontrolKayitFisi__section_about}>
                    <div className={classes.u_center_text}>
                        <h2 className={classes.heading_secondary}>
                            Novifarm Gebelik Kontrol Fişi
                        </h2>
                    </div>
                </div>
                <div className={classes.gebelikKontrolKayitFisi__item__0}>
                    <span>Fiş No Giriniz</span>
                </div>
                <div className={classes.gebelikKontrolKayitFisi__item__1}>
                    <ReceiptNoInputText
                        changed={this.receiptNumberChancedHandler}
                        placeholder=" "
                        receiptNumber={this.state.receiptNumber}
                        delete={this.state.delete} />
                </div>
                <div className={classes.gebelikKontrolKayitFisi__item__2}>
                    <SearchButton click={this.postSearchButton} />
                </div>
                <div className={classes.gebelikKontrolKayitFisi__item__3}>
                    <span>IntegrationState:</span>
                </div>
                <div className={classes.gebelikKontrolKayitFisi__item__4}>
                    <span>Integration:</span>
                </div>
                <div className={classes.gebelikKontrolKayitFisi__item__5}>
                    <span>Fiş No:</span>
                </div>
                <div className={classes.gebelikKontrolKayitFisi__item__6}>
                    <ReceiptNoInputText
                        disabled="true"
                        receiptNumberBlocked={this.state.receiptNumberBlocked} />
                </div>
                <div className={classes.gebelikKontrolKayitFisi__item__7}>
                    <ReceiptNoInputText
                        status={this.state.integrationState}
                        changed={this.integrationStateChancedHandler} />
                </div>
                <div className={classes.gebelikKontrolKayitFisi__item__8}>
                    <ReceiptNoInputText
                        status={this.state.integration}
                        changed={this.integrationChancedHandler} />
                </div>
                <div className={classes.gebelikKontrolKayitFisi__item__9}>
                    <CancelButton click={this.cancelButton} />
                    <UpdateButton click={this.updateDataButton} />
                </div>
            </div>
        );
    };
};

export default gebelikKontrolKayitFisi;