import React from 'react';
import './List.css';

const List = ({order, alerted}) => {
    return(
        <div className='List'>
            <h2 className='List__title'>{order}</h2>
            <p>{alerted}</p>
        </div>
    )
};

export default List;