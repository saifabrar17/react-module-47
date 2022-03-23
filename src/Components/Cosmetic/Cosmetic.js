import React from 'react';

const Cosmetic = (props) => {
    return (
        <div>
            <h1>Name: {props.cosmetic.name}</h1>
            <h2>Gender: {props.cosmetic.gender} </h2>
        </div>
    );
};

export default Cosmetic;