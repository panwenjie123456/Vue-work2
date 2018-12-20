/* eslint-disable no-undef */
describe('Newbook page', () => {
  beforeEach(() => {
    cy.visit('/')
    // Click Newbook navbar link
    cy.get('.navbar-nav:nth-child(1)')
      .find('.nav-item:nth-child(3)').click()
  })

  it('allows a valid book to be submitted', () => {
    // Fill out web form
    cy.get('label').contains('No').next().type('1')
    cy.get('label').contains('Price').next().type('1')
    cy.get('label').contains('Amount').next().type('1')
    cy.get('label').contains('Book Name').next().type('blockchain3')
    cy.get('label').contains('Author Name').next().type('zhongbencong')
    cy.get('label').contains('Publisher Name').next().type('publisherA')
    cy.contains('Congratulation!').should('not.exist')
    cy.get('.error').should('not.exist')
    cy.get('button[type=submit]').click()
    cy.contains('Congratulation!').should('exist')
  })

  it('shows error messages for incomplete form fields', () => {
    cy.get('label').contains('No').next().clear()
    cy.get('label').contains('Price').next().clear()
    cy.get('label').contains('Amount').next().clear()
    cy.get('button[type=submit]').click()
    cy.contains('An error happened').should('exist')

  })
})
