import React, { Component } from "react";
import classes from './hayvanKarti.scss';

import ReceiptNoInputText from "../../components/inputTexts/receiptNoInputText";

import SearchButton from "../../components/buttons/searchButton";
import CancelButton from "../../components/buttons/cancelButton";
import UpdateButton from "../../components/buttons/updateButton";

import ModalCancel from "../../components/modalCancel/modalCancel";
import ModalSuccess from "../../components/modalSuccess/modalSuccess";
import ModalUnSuccess from "../../components/modalUnSuccess/modalUnSuccess";

import axios from '../../axios-orders';

let farm, shelter, padok, commercialSystemCode, insuranceState, policyNo, policyDate;
class hayvanKarti extends Component {
    state = {
        data: null,
        earringNo: null,
        farm: null,
        shelter: null,
        padok: null,
        commercialSystemCode: null,
        insuranceState: null,
        policyNo: null,
        policyDate: null,
        loading: false,
        error: false,
        updateButtonSuccess: false,
        updateButtonError: false
    }

    postSearchButton = async () => {
        const post = {
            kupeNo: this.state.earringNo //  31,
        };
        await axios.put('/novifarm/gethayvankarti', post)
            .then(async response => {
                //console.log(response);
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
                farm = null;
                shelter = null;
                padok = null;
                commercialSystemCode = null;
                insuranceState = null;
                policyNo = null;
                policyDate = null;
            });

        if (this.state.loading && !this.state.error) {
            this.setState({
                farm,
                shelter,
                padok,
                commercialSystemCode,
                insuranceState,
                policyNo,
                policyDate
            });
        } else if (this.state.loading && this.state.error) {
            this.setState({
                farm: "",
                shelter: "",
                padok: "",
                commercialSystemCode: "",
                insuranceState: "",
                policyNo: "",
                policyDate: ""
            });
        }

        // console.log(this.state.status)

    }

    updateDataButton = async () => {
        console.log(this.state.policyDate)
        const post = {
            kupeNo: this.state.earringNo,
            ciftlik: this.state.farm,
            barinak: this.state.shelter,
            padok: this.state.padok,
            ticariSistemKodu: this.state.commercialSystemCode,
            sigortaDurumu: this.state.insuranceState,
            policeNo: this.state.policyNo,
            policeTarihi: this.state.policyDate

            // kupeNo: "TR161181771",
            // farm: "2a1af32b-665d-48a6-a6eb-5cc3ad44f698",
            // barinak: "a3220ccb-101f-4a30-aa67-4289f96eee79",
            // padok: "93c5a5eb-c1f9-4d0e-a766-65e5ce60691c",
            // ticariSistemKodu: "258.TR161181771",
            // sigortaDurumu: 1,
            // policeNo: "2da7d114-b905-4a24-a21d-4d2a18c7aa3f",
            // policeTarihi: "2017-07-25T00:00:00"
        };

        await axios.put('/novifarm/updatehayvankarti', post)
            .then(async res => {
                this.setState({
                    error: false,
                    updateButtonSuccess: true
                });
                return res;
            })
            .catch(err => {
                this.setState({
                    error: true,
                    updateButtonError: true
                });
                console.log(err)
            });
    }

    cancelButton = () => {
        this.setState({
            farm: "",
            shelter: "",
            padok: "",
            commercialSystemCode: "",
            insuranceState: "",
            policyNo: "",
            policyDate: "",
            error: false
        })
    }

    successButton = () => {
        this.setState({
            farm: "",
            shelter: "",
            padok: "",
            commercialSystemCode: "",
            insuranceState: "",
            policyNo: "",
            policyDate: "",
            error: false,
            updateButtonSuccess: false,
            updateButtonError: false
        })
    }

    earringNoChangedHandler = (event) => {
        this.setState({
            earringNo: event.target.value
        });
    }

    farmChangedHandler = (event) => {
        this.setState({
            farm: event.target.value
        });
    }

    shelterChangedHandler = (event) => {
        this.setState({
            shelter: event.target.value
        });
    }

    padokChangeHandler = (event) => {
        this.setState({
            padok: event.target.value
        });
    }

    commercialSystemCodeChangeHandler = (event) => {
        this.setState({
            commercialSystemCode: event.target.value
        });
    }

    insuranceStateChangeHandler = (event) => {
        this.setState({
            insuranceState: event.target.value
        });
    }

    policyNoChangeHandler = (event) => {
        this.setState({
            policyNo: event.target.value
        });
    }

    policyDateChangeHandler = (event) => {
        this.setState({
            policyDate: event.target.value
        });
    }


    render() {
        if (this.state.loading && !this.state.error) {
            farm = this.state.data[0].ciftlik;
            shelter = this.state.data[0].barinak;
            padok = this.state.data[0].padok;
            commercialSystemCode = this.state.data[0].ticariSistemKodu;
            insuranceState = this.state.data[0].sigortaDurumu;
            policyNo = this.state.data[0].policeNo;
            policyDate = this.state.data[0].policeTarihi;
        }
        else if (this.state.loading && this.state.error) {
            farm = null;
            shelter = null;
            padok = null;
            commercialSystemCode = null;
            insuranceState = null;
            policyNo = null;
            policyDate = null;
        }

        return (
            <div className={classes.hayvanKarti}>
                {this.state.error && this.state.receiptNumber !== null
                    && !this.state.updateButtonError && !this.state.updateButtonSuccess ?
                    <ModalCancel click={this.cancelButton} >Aradığınız Numaralı Kayıt Bulunamadı!</ModalCancel> : null}
                {!this.state.error && this.state.updateButtonSuccess ?
                    <ModalSuccess click={this.successButton}>Güncelleme Başarılı</ModalSuccess> : null}
                {this.state.error && this.state.updateButtonError ?
                    <ModalUnSuccess click={this.successButton}>Güncelleme Başarısız</ModalUnSuccess> : null}
                <div className={classes.hayvanKarti__section_about}>
                    <div className={classes.u_center_text}>
                        <h2 className={classes.heading_secondary}>
                            Novifarm Hayvan Kartı
                        </h2>
                    </div>
                </div>
                <div className={classes.hayvanKarti__item__1}>
                    <ReceiptNoInputText placeholder="Küpe Numarası Giriniz"
                        changed={this.earringNoChangedHandler}
                        receiptNumber={this.state.earringNo}
                        delete={this.state.delete} />
                </div>
                <div className={classes.hayvanKarti__item__2}>
                    <SearchButton
                        click={this.postSearchButton} />
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
                    <ReceiptNoInputText
                        status={this.state.farm}
                        changed={this.farmChangedHandler} />
                </div>
                <div className={classes.hayvanKarti__item__8}>
                    <ReceiptNoInputText
                        status={this.state.shelter}
                        changed={this.shelterChangedHandler} />
                </div>
                <div className={classes.hayvanKarti__item__9}>
                    <ReceiptNoInputText
                        status={this.state.padok}
                        changed={this.padokChangeHandler} />
                </div>
                <div className={classes.hayvanKarti__item__10}>
                    <ReceiptNoInputText
                        status={this.state.commercialSystemCode}
                        changed={this.commercialSystemCodeChangeHandler} />
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
                    <ReceiptNoInputText
                        status={this.state.insuranceState}
                        changed={this.insuranceStateChangeHandler} />
                </div>
                <div className={classes.hayvanKarti__item__15}>
                    <ReceiptNoInputText
                        status={this.state.policyNo}
                        changed={this.policyNoChangeHandler} />
                </div>
                <div className={classes.hayvanKarti__item__16}>
                    <ReceiptNoInputText
                        status={this.state.policyDate}
                        changed={this.policyDateChangeHandler} />
                </div>
                <div className={classes.hayvanKarti__item__17}>
                    <CancelButton click={this.cancelButton} />
                    <UpdateButton click={this.updateDataButton} />
                </div>
            </div>
        );
    };
};

export default hayvanKarti;