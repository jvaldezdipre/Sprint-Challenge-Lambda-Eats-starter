import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';

import PizzaForm from './PizzaForm';
import Pizza from './PizzaCard';
import PizzaCard from './PizzaCard';

//---------------------Api Url------------------------------------
const url = 'https://reqres.in/api/users';

// axios
//   .get(url)
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//---------------------Initial Values------------------------------
const initialFormValues = {
  //Text input
  username: '',
  //DropDown
  sizes: '',
  //Checkboxes
  toppings: {
    pepperoni: false,
    bacon: false,
    extra_cheese: false,
    chicken: false,
  },
  //Text Input
  information: '',
};

//----------------------initial Errors----------------------------

//------------------------Yup Errors-------------------------------
const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must have at least 3 characters!')
    .required('Username is required!'),
});

function BuildPizza() {
  //-------------------State----------------------------------------
  const [pizzas, setPizzas] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  // const [formDisabled, setFormDisabled] = useState(true);
  // const [formErrors, setFormErrors] = useState(initialFormErrors);

  //------------------Handlers------------------------------------
  const onInputChange = evt => {
    //Declare the events
    const name = evt.target.name;
    const value = evt.target.value;

    //Yup Validator for username----------
    // yup
    //   .reach(formSchema, name)
    //   .validate(value)
    //   .then(valid => {
    //     //Validates
    //     //Clear Error
    //     setFormErrors({
    //       ...formErrors,
    //       [name]: '',
    //     });
    //   })
    //   .catch(err => {
    //     //not validate
    //     //SET THE ERROR IN THE RIGHT PLACE
    //     setFormErrors({
    //       ...formErrors,
    //       [name]: err.errors[0],
    //     });
    //   });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onCheckboxChange = evt => {
    const { name } = evt.target;
    const isChecked = evt.target.checked;

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      },
    });
  };

  const onSubmit = evt => {
    evt.preventDefault();

    axios
      .post(url, formValues)
      .then(res => {
        console.log(res.data);
        setPizzas([...pizzas, res.data]);
        console.log('helloo', pizzas);
      })
      .catch(err => {
        console.log(err);
      });

    setFormValues(initialFormValues);
  };

  return (
    <div>
      <h1>Build Your Pizza here</h1>
      <PizzaForm
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
      />
      {pizzas.map(pizza => {
        return <PizzaCard key={pizza.id} details={pizza} />;
      })}
    </div>
  );
}

export default BuildPizza;
