import React from 'react';
import './Item.css';


const item = (props) => {
    console.log(props)
    return (
        <div className = "Item">
            <div> <p>Pos: {props.itemIndex}</p></div>
            <div> <input type="text" >{props.intemName }</input></div>
            <div> 
                <button> + </button>
                <button> - </button>
            </div>
        </div>
    )
}
export default item;