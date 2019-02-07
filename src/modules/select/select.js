import React, { Component } from "react";
import classes from "./select.scss";
import LogoPicture from "../../assets/logo.jpeg";
import NoviFarmPicture from "../../assets/novifarm.png";
import { NavLink, Link, Route, Switch, Redirect } from "react-router-dom";
import axios from "../../axios-orders";

import Logo from "../../modules/logo/logo";
import Novifarm from "../../modules/novifarm/novifarm";
import SatisFis from "../satisFis/satisFis";
import StokFis from "../stokFis/stokFis";
import YemTuketim from "../yemTuketim/yemTuketim";
import HayvanKarti from "../hayvanKarti/hayvanKarti";

class select extends Component {
    state = {
        firms: [],
        loading: true
    };

    componentDidMount() {
        axios
            .get("/auth/getuserroles")
            //axios.get('/posts')
            .then(response => {
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
        let roleId = this.state.firms[0];

        if (this.state.firms.length === 2) {
            selectedFirm = (
                <div key="1" className={classes.home}>
                    {/* <Redirect to="/logo" /> */}
                    <NavLink
                        className={classes.home__a__logo}
                        activeClassName="active"
                        to={{
                            pathname: "/logo"
                        }}
                    >
                        <img
                            src={LogoPicture}
                            alt="Logo"
                            className={classes.img__logo}
                        />
                    </NavLink>

                    <Link
                        className={classes.home__a__novifarm}
                        to={{
                            pathname: "/novifarm"
                        }}
                    >
                        <img
                            src={NoviFarmPicture}
                            alt="Novi farm"
                            className={classes.img__novifarm}
                        />
                    </Link>

                    <Switch>
                        <Route path="/logo" exact component={Logo} />
                        <Route path="/novifarm" exact component={Novifarm} />
                        <Route path="/satisfis" exact component={SatisFis} />
                        <Route path="/stokfis" exact component={StokFis} />
                        <Route path="/yemtuketim" exact component={YemTuketim} />
                        <Route path="/hayvankarti" exact component={HayvanKarti} />
                        <Route path="/" exact render={() => <Redirect to="/logo" />} 
                        />
                    </Switch>
                </div>
            );
        } else if (roleId === 1) {
            selectedFirm = (
                <div className={classes.home}>
                    {/* <Redirect to="/logo" /> */}
                    <Link
                        className={classes.home__a__logo}
                        to={{
                            pathname: "/logo"
                        }}
                    >
                        <img
                            src={LogoPicture}
                            alt="Logo"
                            className={classes.img__logo}
                        />
                    </Link>

                    <Route path="/logo" exact component={Logo} />
                    <Route path="/" exact render={() => <Redirect to="/logo" />}
                        />
                </div>
            );
        } else if (roleId === 2) {
            selectedFirm = (
                <div className={classes.home}>
                    {/* <Redirect to="/novifarm" /> */}
                    <Link
                        className={classes.home__a__novifarm__1}
                        to={{
                            pathname: "/novifarm"
                        }}
                    >
                        <img
                            src={NoviFarmPicture}
                            alt="Novi farm"
                            className={classes.img__novifarm}
                        />
                    </Link>
                    <Switch>
                        <Route path="/novifarm" exact component={Novifarm} />
                        <Route path="/satisfis" exact component={SatisFis} />
                        <Route path="/stokfis" exact component={StokFis} />
                        <Route path="/yemtuketim" exact component={YemTuketim} />
                        <Route path="/hayvankarti" exact component={HayvanKarti} />
                        <Route path="/" exact render={() => <Redirect to="/novifarm" />}
                        />
                    </Switch>
                </div>
            );
        }

        if (this.state.loading) {
            selectedFirm = null;
        }

        return <div className={classes.select}>{selectedFirm}</div>;
    }
}

export default select;
