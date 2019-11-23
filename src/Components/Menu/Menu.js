import React from 'react';
import Dish from "./Dish/Dish";
import {Food} from '../../App';
import './Menu.css';

const Menu = props => {
    return (
        <div className='Menu'>
            {Food.map((food) => (
                <Dish
                    title={food.title}
                    recipe={food.recipe}
                    price={food.price}
                />
            ))}
        </div>
    )
};

export default Menu;