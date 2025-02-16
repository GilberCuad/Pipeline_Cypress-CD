Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('seconds example', () => {

  before(() => {
    cy.visit('https://diggipymes.co/#home-page')
    cy.title().should('eq', 'diggi pymes')
  })

  it('Firs test', () => {
    cy.log('Hello mothers fuckers')
  })
})