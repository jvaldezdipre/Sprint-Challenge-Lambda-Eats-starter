import React from 'react';

function PizzaCard({ details }) {
  return (
    <div className='pizza-card'>
      <h2>{details.username}</h2>
      <p>{details.sizes}</p>
      {!!details.toppings && !!details.toppings.length && (
        <div>
          Toppings:
          <ul>
            {details.toppings.map((topping, idx) => (
              <li key={idx}>{topping}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PizzaCard;
