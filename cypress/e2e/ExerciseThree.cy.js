Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('seconds example', () => {

  before(() => {
    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq', 'DEMOQA')
  })

  it('Firs test', () => {
    cy.log('Hello mothers fuckers')
  })
})