/* eslint-disable no-undef */
describe('Manage Books page', () => {
  beforeEach(() => {
    cy.fixture('books')
      .then((books) => {
        books.forEach(() => {
          cy.request('DELETE',
            'https://nmgb.herokuapp.com/books/')
        })
      })
    cy.fixture('books')
      .then((books) => {
        books.forEach((book) => {
          cy.request('POST',
            'https://nmgb.herokuapp.com/books/', book)
        })
      })
    cy.visit('/')
    // Click Manage Books navbar link
    cy.get('.navbar-nav:nth-child(1)')
      .find('.nav-item:nth-child(2)').click()
  })

  it('allows a book to be deleted', () => {
    cy.get('tbody').find('tr').should('have.length', 4)
    // Click trash/delete link of 2nd donation in list
    cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(10)').click()
    // Click confirmation button
    cy.get('button').contains('Delete').click()
    cy.get('tbody').find('tr').should('have.length', 3)
  })
  /*
    it("shows and hides a donation's message", () => {
        // Click + symbol of 2nd donation in list
        cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').click();
        cy.get('div.vue-message', {timeout: 5000}).should('contain', 'The message is [ Hope this helps')
        // Unclick same + symbol
        cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').click();
        cy.get('div.vue-message').should('not.exist')
    });
    */
  it('allows a book to be edited', () => {
    cy.get('tbody').find('tr').should('have.length', 4)
    // Click trash/delete link of 3rd donation in list
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(9)').click()
    // Click confirmation button
    cy.get('label').contains('No (Enter a number between 1 and 1000)').next().clear()
    cy.get('label').contains('Price (Enter a number between 1 and 1000)').next().clear()
    cy.get('label').contains('Amount (Enter a number between 1 and 1000)').next().clear()
    cy.get('label').contains('Book Name').next().clear()
    cy.get('label').contains('Author Name').next().clear()
    cy.get('label').contains('Publisher Name').next().clear()
    cy.get('label').contains('No (Enter a number between 1 and 1000)').next().type(1)
    cy.get('label').contains('Price (Enter a number between 1 and 1000)').next().type(1)
    cy.get('label').contains('Amount (Enter a number between 1 and 1000)').next().type(1)
    cy.get('label').contains('Book Name').next().type('edited')
    cy.get('label').contains('Author Name').next().type('edited')
    cy.get('label').contains('Publisher Name').next().type('edited')
    cy.get('button').contains('Update book').click()
    cy.contains('Congratulation!').should('not.exist')
  })
  it('Add amounts of books', () => {
    // Click trash/delete link of 3rd donation in list
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(8)').click()
    // Click confirmation button
    cy.get('tbody').should('contain', 1)
  })
/*
  it('search a book', () => {
    // Click trash/delete link of 3rd donation in list
    cy.get('thead').find('tr:nth-child(2)').find('th:nth-child(3)').type('bl')
    cy.get('tbody').find('tr').should('have.length', 3)
  })
*/
})
describe('Manage Books page', () => {
  it('Add amounts of books', () => {
     // Click trash/delete link of 3rd donation in list
     cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(8)').click()
     // Click confirmation button
     cy.get('tbody').should('contain', 1)
    })

  })
