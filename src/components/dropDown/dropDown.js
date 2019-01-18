import React from 'react';
import classes from './dropDown.scss';

const dropDown = (props) => {
    let optionItems = props.state.firms.map((firm) => 
        <option key={firm.name}>{firm.name}</option>
        );

    return (
        // <div class={classes.dropdown}>
        //     <button class={classes.dropbtn}>Dropdown
        //         {/* <i class="fa fa-caret-down"></i> */}
        //     </button>
        //     <div class={classes.dropdownContent}>
        //         <a href="#">Link 1</a>
        //         <a href="#">Link 2</a>
        //         <a href="#">Link 3</a>
        //     </div>
        // </div>
        <select>
            {optionItems}
        </select>
    );
}

export default dropDown;