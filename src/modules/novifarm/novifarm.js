import React, { Component } from 'react';
import classes from './novifarm.scss';
// import Options from "../../components/options/options-firms";
// import ReceiptNoInputText from "../../components/inputTexts/receiptNoInputText";
// import SearchButton from "../../components/buttons/searchButton";
// import UpdateButton from "../../components/buttons/updateButton";
// import CancelButton from "../../components/buttons/cancelButton";
// import SideDrawer from "../../navigation/sideDrawer/sideDrawer";
import Card from "../../components/cards/card";
import ModalCancel from "../../components/modalCancel/modalCancel";
import { Link } from "react-router-dom";
import axios from '../../axios-orders';

let status, receiptNumberBlocked, receiptNumber;
class novi extends Component {
    state = {
        data: null,
        firmId: 0,
        receiptNumber: null,
        receiptNumberBlocked: null,
        status: null,
        loading: false,
        error: false
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

    cancelButton = () => {
        this.setState({
            receiptNumber: "",
            receiptNumberBlocked: "",
            status: "",
            error: false
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
            <div className={classes.novi}>
                {this.state.error && this.state.receiptNumber !== null ?
                    <ModalCancel click={this.cancelButton} >Aradığınız Numaralı Kayıt Bulunamadı!</ModalCancel> : null}
                <div className={classes.novi__section_about}>
                    <div className={classes.u_center_text}>
                        <h2 className={classes.heading_secondary}>
                            Novifarm Fatura Uygulaması
                        </h2>
                    </div>
                </div>
                {/* <SideDrawer /> */}
                {/* <div className={classes.novi__item__1}>
                    <Options optionChangedHandler={this.optionChangedHandler} />
                </div>
                <div className={classes.novi__item__2}>
                    <ReceiptNoInputText
                        placeholder="Fiş Numarasını Giriniz"
                        changed={this.receiptNumberChancedHandler}
                        receiptNumber={this.state.receiptNumber}
                        delete={this.state.delete} />
                </div>
                <div className={classes.novi__item__3}>
                    <SearchButton click={this.postSearchButton} />
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
                    <ReceiptNoInputText
                        disabled="true"
                        receiptNumberBlocked={this.state.receiptNumberBlocked} />
                </div>
                <div className={classes.novi__item__8}>
                    <ReceiptNoInputText
                        status={this.state.status}
                        changed={this.statusChancedHandler} />
                </div>
                <div className={classes.novi__item__9}>
                    <CancelButton click={this.cancelButton} />
                    <UpdateButton />
                </div> */}

                 <div className={classes.novi__item__1}>
                    <Link to={{
                        pathname: '/satisfis'
                    }}>
                        <Card>Satış Fiş</Card>
                    </Link>
                </div>
                <div className={classes.novi__item__2}>
                <Link to={{
                        pathname: '/stokfis'
                    }}>
                        <Card>Stok Fiş</Card>
                    </Link>
                </div>
                <div className={classes.novi__item__3}>
                <Link to={{
                        pathname: '/yemtuketim'
                    }}>
                        <Card>Yem Tüketim</Card>
                    </Link>
                </div>
                <div className={classes.novi__item__4}>
                <Link to={{
                        pathname: '/hayvankarti'
                    }}>
                        <Card>Hayvan Kartı</Card>
                    </Link>
                </div> 
            </div>
        );
    }
}

export default novi;