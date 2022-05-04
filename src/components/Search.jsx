import React, {useState} from 'react';
import classes from "./Search.module.css";
import InputPoint from "./InputPoint";





const Search = () => {
    return (
        <div>
            <InputPoint className={classes.inputs + ' ' + classes.inputLeft} placeholder={'Откуда'}/>
            <InputPoint className={classes.inputs} placeholder={"Куда"}/>
            <input placeholder={"Когда"} className={classes.inputs} type="date"/>
            <input placeholder={"Количество человек"} className={classes.inputs + ' ' + classes.inputRight} type="text"/>
            <button>Ghj</button>
        </div>
    );
};

export default Search;