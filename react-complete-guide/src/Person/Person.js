import React from 'react';
<<<<<<< HEAD
import './Person.css' // import the style file into the javascript file, 
                     // then we can use it and assign as a className
=======
import './Person.css'
>>>>>>> 3f715e865d3523c935b60e526f5ddb19528ad3cc

const person = (props) => {
    console.log(props)
    return (
        <div className="Person"> 
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value = {props.name}></input>
        </div>
        )
}

export default person;

