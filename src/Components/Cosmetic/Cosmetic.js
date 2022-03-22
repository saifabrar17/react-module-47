import React from 'react';

const Cosmetic = (props) => {
    return (
        <div>
            <h1>Name:{props.cosmetic.name}</h1>
            <h3>Price:{props.cosmetic.price} </h3>
        </div>
    );
};

export default Cosmetic;