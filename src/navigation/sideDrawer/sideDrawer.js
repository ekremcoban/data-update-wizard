import React, { Component } from "react";
import classes from './sideDrawer.scss';
import { Link } from "react-router-dom";

class sideDrawer extends Component {
    render() {
        let satisFis =
            <div className={classes.sideDrawer__firstRow}>
                <Link to={{
                    pathname: '/satisfis'
                }}>
                    <button className={classes.button}>
                        <span>Satış Fiş</span>
                    </button>
                </Link>
            </div>

        let stokFis =
            <div className={classes.sideDrawer__secondRow}>
                <Link to={{
                    pathname: 'stokfis'
                }}>
                    <button className={classes.button}>
                        <span>Stok Fiş</span>
                    </button>
                </Link>
            </div>

        let yemTuketim =
            <div className={classes.sideDrawer__thirdRow}>
                <Link to={{
                    pathname: 'yemtuketim'
                }}>
                    <button className={classes.button}>
                        <span>Yem Tüketim</span>
                    </button>
                </Link>
            </div>

        let hayvanKarti =
            <div className={classes.sideDrawer__fourthRow}>
                <Link to={{
                    pathname: 'hayvankarti'
                }}>
                    <button className={classes.button}>
                        <span>Hayvan Kartı</span>
                    </button>
                </Link>
            </div>
        return (
            <div className={classes.sideDrawer}>
                {satisFis}
                {stokFis}
                {yemTuketim}
                { hayvanKarti }
            </div>
        );
    };
};

export default sideDrawer;