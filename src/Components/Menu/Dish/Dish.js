import React from 'react';
import {Food} from '../../../App';
import './Dish.css';
const Dish = props => {
    const food = Food.find(f => f.title === props.title);
    return(
        <div onClick={props.add} className='box'>
            <img className='imgDish' src={food.img} alt='Photo_Food'/>
            <h3>{props.title}</h3>
            <p className='Dish__recipe'>Recipe: {props.recipe}</p>
            <p className='Dish__price'>{props.price} som</p>
        </div>
    )
};

export default Dish;