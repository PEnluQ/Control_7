import React from 'react';
import {Food} from '../../../App';
import './Dish.css';
const Dish = props => {
    const food = Food.find(f => f.title === props.title);
    return(
        <div className='box'>
            <img className='imgDish' src={food.img} alt='Photo_Food'/>
            <h5>{props.title}</h5>
            <p>{props.recipe}</p>
            <p>{props.price} som</p>
        </div>
    )
};

export default Dish;