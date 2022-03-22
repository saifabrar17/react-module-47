import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const cosmetics = [
        {id: 1, name: 'alta', price: 100},
        {id: 2, name: 'Maalta', price: 300},
        {id: 3, name: 'Salta', price: 400},
        {id: 4, name: 'Jalta', price: 500},
        {id: 5, name: 'Palta', price: 600},
      ]
    return (
        <div>
            <h1>Welcome To my cosmetics store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;