import React from 'react';
import chips from '../images/foods.jpg';

const CardFood = (props) =>{
    const {name, price} = props.food
    return (
        <div className="item">
            <img className="ui avatar image" src={chips} alt="chips" />
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{price}</div>
                </div>
                    <i className="trash alternate outline icon" style={{color: 'red', marginTop:'7px'}}></i>
            </div>
    );

}

export default CardFood;