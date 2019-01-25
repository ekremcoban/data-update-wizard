
import React, { Component } from "react";
import classes from './options-firms.scss';

import axios from "../../axios-orders";

class optionsFirms extends Component {

        state = {
            firmId: null,
            firmNames: [],
            loading: true
        };

    componentDidMount() {
        axios.get('/logo/getfirms')
            .then(response => {
                this.setState({
                    firmNames: response.data,
                    loading: false
                }); 
                console.log(this.state.firmNames);
            }).catch(err => {
                this.setState({ loading: false });
            });
    }


    render() {
        let optionItems = this.state.firmNames.map((firm) =>
            <option key={firm.id} value={firm.id}>{firm.name}</option>)
        return (
            <select className={classes.option} onChange={this.props.optionChangedHandler}>
                {optionItems}    
            </select>
        );
    }
}



export default optionsFirms;