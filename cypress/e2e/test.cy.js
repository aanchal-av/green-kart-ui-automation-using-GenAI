/* ==== Test Created with Cypress Studio ==== */
it('first test', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
  cy.get(':nth-child(1) > .stepper-input > .increment').click();
  cy.get(':nth-child(1) > .stepper-input > .increment').click();
  cy.get(':nth-child(1) > .product-action > button').click();
  cy.get('.cart-icon > img').click();
  cy.get('.cart-preview > .action-block > button').click();
  cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click();
  cy.get('select').select('India');
  cy.get('.chkAgree').check();
  cy.get('button').click();
  /* ==== End Cypress Studio ==== */
});