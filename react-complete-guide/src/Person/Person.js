import React from 'react';
import cssClasses from './Person.css'

const person = (props) => {
    console.log(props)
    return (
        <div className={cssClasses.person}> 
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value = {props.name}></input>
        </div>
        )
}

export default person;

