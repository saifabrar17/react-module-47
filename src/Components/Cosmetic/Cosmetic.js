import React from 'react';
import './cosmetic.css'
const Cosmetic = (props) => {
    const {name, gender, id} = props.cosmetic; //destructuring
    
    //add to cart with specific product id
    const addToCart = () =>{
        console.log('item added', id);
    }

    //calling addToCart Function with addToCartWithParam Function
    const addToCartWithParam = () => addToCart(id);

    return (
        <div className='product'>
            <h1>Name: {name}</h1>
            <h2>Gender: {gender} </h2>
            <p>ID: {id}</p>
            <button onClick={addToCartWithParam}>Add To Cart</button>
        </div>
    );
};

export default Cosmetic;