import React from 'react';

function PizzaCard({ details, values }) {
  return (
    <div className='pizza-card'>
      <h2>{details.username}</h2>
      <p>{details.sizes}</p>
      <p>{details.information}</p>
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
      {/* {
        <ul>
          Toppings
          {Object.keys(values.toppings).filter(topping => (
            <li>{values.toppings[topping] === true}</li>
          ))}
        </ul>
      } */}
    </div>
  );
}

export default PizzaCard;
