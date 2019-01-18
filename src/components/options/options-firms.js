
import React, { Component } from "react";
import classes from './options-firms.scss';
import axios from "axios";

class optionsFirms extends Component {
    state = {
        firms: [
            { name: 'Ahmet', age: 28 }, { name: 'Ahmet', age: 28 }, { name: 'Ahmet', age: 28 }, { name: 'Ahmet', age: 28 }, { name: 'Ahmet', age: 28 },
            { name: 'Ahmet', age: 28 }, { name: 'Ahmet', age: 28 }, { name: 'Ahmet', age: 28 }, { name: 'Ahmet', age: 28 }, { name: 'Ahmet', age: 28 },
            { name: 'Mehmet', age: 32 }
        ],
        firms2: []
    };

    componentDidMount () {
        const instance = axios.create({
            //baseURL: config.apiURL,
            withCredentials: true
        });
        
        /**
        * adding X-Requested-With header to all requests
        */
        instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        
        instance.get('http://sutasiis:8045/duw/logo/getfirms')
            .then(response => {
                this.setState({
                    firms2: response.data
                });
                console.log(this.state.firms2);
            });
    }

    render() {
        let optionItems = this.state.firms.map((firm) =>
            <option key={firm.name}>{firm.name}</option>)
        return (
            <select className={classes.option}>
                {optionItems}
            </select>
        );
    }

}

export default optionsFirms;