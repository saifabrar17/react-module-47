import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {
    const cosmetics = [
        {
          "id": "623b1a1b611c3b25a5d5bdf2",
          "name": "Banks Chaney",
          "gender": "male"
        },
        {
          "id": "623b1a1b943cbafb2f57baf6",
          "name": "Rios Ramsey",
          "gender": "male"
        },
        {
          "id": "623b1a1b178a6641f054eac2",
          "name": "Harrell Eaton",
          "gender": "male"
        },
        {
          "id": "623b1a1b87e859ae1a039367",
          "name": "Genevieve Wilkerson",
          "gender": "female"
        },
        {
          "id": "623b1a1beb653523e54d414c",
          "name": "Rosalyn Bass",
          "gender": "female"
        },
        {
          "id": "623b1a1bdf99c6df0381747c",
          "name": "Zelma Miles",
          "gender": "female"
        },
        {
          "id": "623b1a1b3220c1a11c4a9a7b",
          "name": "Kathleen Russo",
          "gender": "female"
        }
      ]
    return (
        <div>
            <h1>Welcome To my cosmetics store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                    ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;