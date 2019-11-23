import React from 'react';

import {Food} from '../../../App';

const Dish = props => {
    const food = Food.find(f => f.title === props.title);
    return(
        <div onClick={props.addFood} className='box'>
            <img className='imgDish' src={food.img} alt='Photo_Food'/>
            <h5>{props.title}</h5>
            <p>{props.recipe}</p>
            <p>{props.price}</p>
        </div>
    )
};

export default Dish;