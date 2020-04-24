import { v4 as uuid } from 'uuid';

const name = uuid().slice(0, 5);
const info = uuid().slice(0, 5);
const topping1 = 'bacon';
const topping2 = 'chicken';
// const = `${first_name}@gmail.com`;
// const password = uuid().slice(0, 8);

describe('User Form', () => {
  it('can navigate to the site', () => {
    cy.visit('');
    cy.url().should('include', 'localhost');
  });

  it('can submit a user', () => {
    // Get the Name input and type a name in it.
    //Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
    cy.get('[name="username"]').type(name).should('have.value', name);

    cy.get('[name="information"]').type(info).should('have.value', info);

    cy.get(`input[name="${topping1}"]`).check().should('have.checked');
    cy.get(`input[name="${topping2}"]`).check().should('have.checked');

    cy.get('button[name="user_submit_form"]').click();
    //  test that you can add text to the box
    //  test that you can select multiple toppings
    //  test that you can submit the form
  });
});
