// https://docs.cypress.io/api/table-of-contents

describe('Function tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  })

  it('Check Page Title', () => {
    cy.contains('h1', 'Games')
  })

  it('Click on the first game to add to the cart', () => {
    cy.get('[class="game-box"]').first().click()
    cy.get('button').click()
    cy.contains('div', 'Compra finalizada')
  })
})
