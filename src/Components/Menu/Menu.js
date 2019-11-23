import React from 'react';
import Dish from "./Dish/Dish";
import {Food} from '../../App';
import './Menu.css';

const Menu = () => {
    return (
        <div className='Menu'>
            <h2 className='Menu__title'>Vegan <span className='Menu__title-span'>kitchen</span></h2>
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