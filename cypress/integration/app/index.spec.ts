/// <reference types="../../support" />

context('Headline', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should contain a link to the English Homepage', () => {
    cy.getBySel('title').contains('Random Programming Jokes')
  })
})
