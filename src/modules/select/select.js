import React, { Component } from "react";
import classes from "./select.scss";
import LogoPicture from "../../assets/logo.jpeg";
import NoviFarmPicture from "../../assets/novifarm.png";
import PanaromaPicture from "../../assets/panaroma.png";
import { NavLink, Link, Route, Switch, Redirect } from "react-router-dom";
import axios from "../../axios-orders";

import Logo from "../../modules/logo/logo";
import Novifarm from "../../modules/novifarm/novifarm";
import Panaroma from "../../modules/panaroma/panaroma";

import SatisFis from "../satisFis/satisFis";
import StokFis from "../stokFis/stokFis";
import YemTuketim from "../yemTuketim/yemTuketim";
import HayvanKarti from "../hayvanKarti/hayvanKarti";
import SutGirisFisi from "../sutGirisFisi/sutGirisFisi";
import SutCikisFisi from "../sutCikisFisi/sutCikisFisi";
import DogumKayitFisi from "../dogumKayitFisi/dogumKayitFisi";
import HayvanKesimFisi from "../hayvanKesimFisi/hayvanKesimFisi";
import OlumFisi from "../olumFisi/olumFisi";
import HayvanGonderimFisi from "../hayvanGonderimFisi/hayvanGonderimFisi";
import TohumlamaFisi from "../tohumlamaFisi/tohumlamaFisi";
import GebelikKontrolKayitFisi from "../gebelikKontrolKayitFisi/gebelikKontrolKayitFisi";
import KuruyaAyirmaFisi from "../kuruyaAyirmaFisi/kuruyaAyirmaFisi";
import AsiTedaviFisi from "../asiTedaviFisi/asiTedaviFisi";

class select extends Component {
    state = {
        firms: [],
        loading: true
    };

    componentDidMount() {
        axios.get("/auth/getuserroles")
            //axios.get('/posts')
            .then(response => {
                // console.log(response);
                this.setState({
                    firms: response.data,
                    loading: false
                });
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }

    render() {
        let selectedFirm = null;
        let roleId1 = this.state.firms[0];
        let roleId2 = this.state.firms[1];

        if (this.state.firms.length === 3) {
            selectedFirm = (
                <div key="1" className={classes.home}>
                    {/* <Redirect to="/logo" /> */}
                    <NavLink
                        className={classes.home__a__first}
                        activeClassName="active"
                        to={{
                            pathname: "/logo"
                        }}
                    >
                        <img
                            src={LogoPicture}
                            alt="Logo"
                            className={classes.img__first}
                        />
                    </NavLink>
                    <NavLink
                        className={classes.home__a__second}
                        to={{
                            pathname: "/novifarm"
                        }}
                    >
                        <img
                            src={NoviFarmPicture}
                            alt="Novi farm"
                            className={classes.img__second}
                        />
                    </NavLink>
                    <NavLink
                        className={classes.home__a__third}
                        to={{
                            pathname: "/panaroma"
                        }}
                    >
                        <img
                            src={PanaromaPicture}
                            alt="Panaroma"
                            className={classes.img__third}
                        />
                    </NavLink>

                    <Switch>
                        <Route path="/logo" exact component={Logo} />
                        <Route path="/novifarm" exact component={Novifarm} />
                        <Route path="/panaroma" exact component={Panaroma} />
                        <Route path="/satisfis" exact component={SatisFis} />
                        <Route path="/stokfis" exact component={StokFis} />
                        <Route path="/yemtuketim" exact component={YemTuketim} />
                        <Route path="/hayvankarti" exact component={HayvanKarti} />
                        <Route path="/sutgirisfisi" exact component={SutGirisFisi} />
                        <Route path="/sutcikisfisi" exact component={SutCikisFisi} />
                        <Route path="/dogumkayitfisi" exact component={DogumKayitFisi} />
                        <Route path="/hayvankesimfisi" exact component={HayvanKesimFisi} />
                        <Route path="/olumfisi" exact component={OlumFisi} />
                        <Route path="/hayvangonderimfisi" exact component={HayvanGonderimFisi} />
                        <Route path="/tohumlamafisi" exact component={TohumlamaFisi} />
                        <Route path="/gebelikkontrolkayitfisi" exact component={GebelikKontrolKayitFisi} />
                        <Route path="/kuruyaayirmafisi" exact component={KuruyaAyirmaFisi} />
                        <Route path="/asitedavifisi" exact component={AsiTedaviFisi} />
                        <Route path="/" exact render={() => <Redirect to="/logo" />}
                        />
                    </Switch>
                </div>
            );
            //If there are only logo and novifarm
        } else if (this.state.firms.length === 2 && roleId1["roleId"] !== 3 && roleId2["roleId"] !== 3) {
            selectedFirm = (
                <div key="1" className={classes.home}>
                    {/* <Redirect to="/logo" /> */}
                    <NavLink
                        className={classes.home__a__first}
                        activeClassName="active"
                        to={{
                            pathname: "/logo"
                        }}
                    >
                        <img
                            src={LogoPicture}
                            alt="Logo"
                            className={classes.img__first}
                        />
                    </NavLink>
                    <NavLink
                        className={classes.home__a__second}
                        to={{
                            pathname: "/novifarm"
                        }}
                    >
                        <img
                            src={NoviFarmPicture}
                            alt="Novi farm"
                            className={classes.img__second}
                        />
                    </NavLink>
                    <Switch>
                        <Route path="/logo" exact component={Logo} />
                        <Route path="/novifarm" exact component={Novifarm} />
                        <Route path="/panaroma" exact component={Panaroma} />
                        <Route path="/satisfis" exact component={SatisFis} />
                        <Route path="/stokfis" exact component={StokFis} />
                        <Route path="/yemtuketim" exact component={YemTuketim} />
                        <Route path="/hayvankarti" exact component={HayvanKarti} />
                        <Route path="/sutgirisfisi" exact component={SutGirisFisi} />
                        <Route path="/sutcikisfisi" exact component={SutCikisFisi} />
                        <Route path="/dogumkayitfisi" exact component={DogumKayitFisi} />
                        <Route path="/hayvankesimfisi" exact component={HayvanKesimFisi} />
                        <Route path="/olumfisi" exact component={OlumFisi} />
                        <Route path="/hayvangonderimfisi" exact component={HayvanGonderimFisi} />
                        <Route path="/tohumlamafisi" exact component={TohumlamaFisi} />
                        <Route path="/gebelikkontrolkayitfisi" exact component={GebelikKontrolKayitFisi} />
                        <Route path="/kuruyaayirmafisi" exact component={KuruyaAyirmaFisi} />
                        <Route path="/asitedavifisi" exact component={AsiTedaviFisi} />
                        <Route path="/" exact render={() => <Redirect to="/logo" />}
                        />
                    </Switch>
                </div>
            );
        }
        // If there are only Logo and Panaroma
        else if (this.state.firms.length === 2 && roleId1["roleId"] !== 2 && roleId2["roleId"] !== 2) {
            selectedFirm = (
                <div key="1" className={classes.home}>
                    {/* <Redirect to="/logo" /> */}
                    <NavLink
                        className={classes.home__a__first}
                        activeClassName="active"
                        to={{
                            pathname: "/logo"
                        }}
                    >
                        <img
                            src={LogoPicture}
                            alt="Logo"
                            className={classes.img__first}
                        />
                    </NavLink>
                    <NavLink
                        className={classes.home__a__second}
                        to={{
                            pathname: "/panaroma"
                        }}
                    >
                        <img
                            src={PanaromaPicture}
                            alt="Panaroma"
                            className={classes.img__second}
                        />
                    </NavLink>
                    <Switch>
                        <Route path="/logo" exact component={Logo} />
                        <Route path="/panaroma" exact component={Panaroma} />
                        <Route path="/" exact render={() => <Redirect to="/logo" />}
                        />
                    </Switch>
                </div>
            );
        }
        // If there are only Novifarm and Panaroma
        else if (this.state.firms.length === 2 && roleId1["roleId"] !== 1 && roleId2["roleId"] !== 1) {
            selectedFirm = (
                <div key="1" className={classes.home}>
                    {/* <Redirect to="/logo" /> */}
                    <NavLink
                        className={classes.home__a__first}
                        activeClassName="active"
                        to={{
                            pathname: "/novifarm"
                        }}
                    >
                        <img
                            src={NoviFarmPicture}
                            alt="Novi farm"
                            className={classes.img__first}
                        />
                    </NavLink>
                    <NavLink
                        className={classes.home__a__second}
                        to={{
                            pathname: "/panaroma"
                        }}
                    >
                        <img
                            src={PanaromaPicture}
                            alt="Panaroma"
                            className={classes.img__second}
                        />
                    </NavLink>
                    <Switch>
                        <Route path="/logo" exact component={Logo} />
                        <Route path="/novifarm" exact component={Novifarm} />
                        <Route path="/panaroma" exact component={Panaroma} />
                        <Route path="/satisfis" exact component={SatisFis} />
                        <Route path="/stokfis" exact component={StokFis} />
                        <Route path="/yemtuketim" exact component={YemTuketim} />
                        <Route path="/hayvankarti" exact component={HayvanKarti} />
                        <Route path="/sutgirisfisi" exact component={SutGirisFisi} />
                        <Route path="/sutcikisfisi" exact component={SutCikisFisi} />
                        <Route path="/dogumkayitfisi" exact component={DogumKayitFisi} />
                        <Route path="/hayvankesimfisi" exact component={HayvanKesimFisi} />
                        <Route path="/olumfisi" exact component={OlumFisi} />
                        <Route path="/hayvangonderimfisi" exact component={HayvanGonderimFisi} />
                        <Route path="/tohumlamafisi" exact component={TohumlamaFisi} />
                        <Route path="/gebelikkontrolkayitfisi" exact component={GebelikKontrolKayitFisi} />
                        <Route path="/kuruyaayirmafisi" exact component={KuruyaAyirmaFisi} />
                        <Route path="/asitedavifisi" exact component={AsiTedaviFisi} />
                        <Route path="/" exact render={() => <Redirect to="/logo" />}
                        />
                    </Switch>
                </div>
            );
        }
        else if (this.state.firms.length === 1 && roleId1["roleId"] === 1) {
            selectedFirm = (
                <div className={classes.home}>
                    {/* <Redirect to="/novifarm" /> */}
                    <Link
                        className={classes.home__a__first}
                        to={{
                            pathname: "/logo"
                        }}
                    >
                        <img
                            src={LogoPicture}
                            alt="Logo"
                            className={classes.img__first}
                        />
                    </Link>
                    <Switch>
                        <Route path="/logo" exact component={Logo} />
                        <Route path="/" exact render={() => <Redirect to="/logo" />}
                        />
                    </Switch>
                </div>
            );
        }
        else if (this.state.firms.length === 1 && roleId1["roleId"] === 2) {
            selectedFirm = (
                <div className={classes.home}>
                    {/* <Redirect to="/novifarm" /> */}
                    <Link
                        className={classes.home__a__first}
                        to={{
                            pathname: "/novifarm"
                        }}
                    >
                        <img
                            src={NoviFarmPicture}
                            alt="Novi farm"
                            className={classes.img__second}
                        />
                    </Link>
                    <Switch>
                        <Route path="/novifarm" exact component={Novifarm} />
                        <Route path="/satisfis" exact component={SatisFis} />
                        <Route path="/stokfis" exact component={StokFis} />
                        <Route path="/yemtuketim" exact component={YemTuketim} />
                        <Route path="/hayvankarti" exact component={HayvanKarti} />
                        <Route path="/sutgirisfisi" exact component={SutGirisFisi} />
                        <Route path="/sutcikisfisi" exact component={SutCikisFisi} />
                        <Route path="/dogumkayitfisi" exact component={DogumKayitFisi} />
                        <Route path="/hayvankesimfisi" exact component={HayvanKesimFisi} />
                        <Route path="/olumfisi" exact component={OlumFisi} />
                        <Route path="/hayvangonderimfisi" exact component={HayvanGonderimFisi} />
                        <Route path="/tohumlamafisi" exact component={TohumlamaFisi} />
                        <Route path="/gebelikkontrolkayitfisi" exact component={GebelikKontrolKayitFisi} />
                        <Route path="/kuruyaayirmafisi" exact component={KuruyaAyirmaFisi} />
                        <Route path="/asitedavifisi" exact component={AsiTedaviFisi} />
                        <Route path="/" exact render={() => <Redirect to="/novifarm" />}
                        />
                    </Switch>
                </div>
            );
        }
        else if (this.state.firms.length === 1 && roleId1["roleId"] === 3) {
            selectedFirm = (
                <div className={classes.home}>
                    {/* <Redirect to="/novifarm" /> */}
                    <Link
                        className={classes.home__a__first}
                        to={{
                            pathname: "/panaroma"
                        }}
                    >
                        <img
                            src={PanaromaPicture}
                            alt="Panaroma"
                            className={classes.img__first}
                        />
                    </Link>
                    <Switch>
                        <Route path="/panaroma" exact component={Panaroma} />
                        <Route path="/" exact render={() => <Redirect to="/panaroma" />}
                        />
                    </Switch>
                </div>
            );
        }
        else {
            selectedFirm = (
                <div
                    style={{
                        color: "orange",
                        fontSize: "40px",
                        fontStyle: "bold",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >Yetkiniz bulunmamaktadır...
                </div>
            )
        }

        if (this.state.loading) {
            selectedFirm = null;
        }

        return <div className={classes.select}>{selectedFirm}</div>;
    }
}

export default select;
