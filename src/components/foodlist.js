import React from 'react';
import CardFood from './foodcard';

const FoodList = (props) =>{
    console.log(props);
    const renderFoodList = props.foods.map((food) =>{
        return <CardFood food={food}/>;
    });
        return <div className="ui celled list">{renderFoodList}</div>
    };

export default FoodList;