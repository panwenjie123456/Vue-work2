/* eslint-disable no-undef */
describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Shows a header', () => {
    cy.get('.vue-title').should('contain', 'Bookmanage App !!')
  })

  describe('Navigation bar', () => {
    it('Shows the required links', () => {
      cy.get('.navbar').find('[data-test=Newbookbtn]')
      cy.get('.navbar').contains('Home')
      cy.get('.navbar-nav:nth-child(1)').within(() => {
        cy.get('.nav-item:first').should('contain', 'Home')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Manage')
        cy.get('.nav-item:nth-child(3)').should('contain', 'New Book')
        cy.get('.nav-item:nth-child(4)').should('contain', 'Map')
      })
      cy.get('.navbar-nav:nth-child(2)').within(() => {
        cy.get('.nav-item:first').should('contain', 'About')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Contact')
        cy.get('.nav-item:nth-child(3)').should('contain', 'Login')
        cy.get('.nav-item:nth-child(4)').should('contain', 'Logout')
      })
    })

    it('Redirects when links are clicked', () => {
      cy.get('[data-test=Newbookbtn]').click()
      cy.url().should('include', '/Newbook')
      cy.get('.navbar').contains('Manage Books').click()
      cy.url().should('include', '/books')
      // etc
    })
  })
})
