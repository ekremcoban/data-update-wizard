import QueueAnim from 'rc-queue-anim';
import React, { Component } from 'react';
import classes from './logo.scss';
import Options from "../../components/options/options-firms";
import ReceiptNoInputText from "../../components/inputTexts/receiptNoInputText";

import SearchButton from "../../components/buttons/searchButton";
import UpdateButton from "../../components/buttons/updateButton";
import CancelButton from "../../components/buttons/cancelButton";

import ModalCancel from "../../components/modalCancel/modalCancel";
import ModalSuccess from "../../components/modalSuccess/modalSuccess";
import ModalUnSuccess from "../../components/modalUnSuccess/modalUnSuccess";

import axios from '../../axios-orders';

let status, receiptNumberBlocked, receiptNumber;
class logo extends Component {
    state = {
        data: null,
        firmId: 0,
        receiptNumber: "",
        receiptNumberBlocked: "",
        status: "",
        loading: false,
        error: false,
        updateButtonSuccess: false,
        updateButtonError: false
    }

    postSearchButton = async () => {
        const post = {
            firmId: this.state.firmId, //  31,
            ficheNo: this.state.receiptNumber //"SEF2017000006439"
        };
        await axios.put('/logo/getinvoicestatus', post)
            .then(async response => {
                // console.log(response);
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
                status = null;
            });

        if (this.state.loading && !this.state.error) {
            this.setState({
                status,
                receiptNumberBlocked,
                receiptNumber
            });
        } else if (this.state.loading && this.state.error) {
            this.setState({
                status: "",
                receiptNumberBlocked: ""
            });
        }

        // console.log(this.state.status)
    }

    updateDataButton = async () => {
        const post = {
            firmId: this.state.firmId,
            ficheNo: this.state.receiptNumberBlocked,
            eFaturaStatus: this.state.status
        };

        await axios.put('/logo/updateinvoicestatus', post)
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
            status: "",
            error: false
        })
    }
    
    successButton = () => {
        this.setState({
            receiptNumber: "",
            receiptNumberBlocked: "",
            status: "",
            error: false, 
            updateButtonSuccess: false,
            updateButtonError: false
        })
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

    statusChancedHandler = (event) => {
        this.setState({
            status: event.target.value
        });
    }

    render() {
        if (this.state.loading && !this.state.error) {
            status = this.state.data[0].eFaturaStatus;
            receiptNumberBlocked = this.state.data[0].ficheNo;   
        }
        else if (this.state.loading && this.state.error) {
            status = null;
            receiptNumberBlocked = null;
        }

        return (
            <div className={classes.logo}>
                {this.state.error && this.state.receiptNumber !== null 
                && !this.state.updateButtonError && !this.state.updateButtonSuccess ?
                    <ModalCancel click={this.cancelButton} >Aradığınız Numaralı Kayıt Bulunamadı!</ModalCancel> : null}
                {!this.state.error && this.state.updateButtonSuccess ? 
                    <ModalSuccess click={this.successButton}>Güncelleme Başarılı</ModalSuccess> : null}
                {this.state.error && this.state.updateButtonError ? 
                    <ModalUnSuccess click={this.successButton}>Güncelleme Başarısız</ModalUnSuccess> : null}
                <div className={classes.logo__section_about}>
                    <div key="1" className={classes.u_center_text}>
                        <h2 className={classes.heading_secondary}>
                            Logo Fatura Uygulaması
                        </h2>
                    </div>
                </div>
                <div className={classes.logo__item__1}>
                    <Options optionChangedHandler={this.optionChangedHandler} />
                </div>
                <div className={classes.logo__item__2}>
                    <ReceiptNoInputText
                        placeholder="Fiş Numarasını Giriniz"
                        changed={this.receiptNumberChancedHandler}
                        receiptNumber={this.state.receiptNumber}
                        delete={this.state.delete} />
                </div>
                <div className={classes.logo__item__3}>
                    <SearchButton click={this.postSearchButton} />
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
                        receiptNumberBlocked={this.state.receiptNumberBlocked} />
                </div>
                <div className={classes.logo__item__8}>
                    <ReceiptNoInputText
                        status={this.state.status}
                        changed={this.statusChancedHandler} />
                </div>
                <div className={classes.logo__item__9}>
                    <CancelButton click={this.cancelButton} />
                    <UpdateButton click={this.updateDataButton} />
                </div>
            </div>
        );
    }
}

export default logo;