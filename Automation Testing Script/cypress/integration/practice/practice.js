describe('My First Test Case', () => { 
    it('Gets, types and asserts', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('within').click()
        cy.url().should('include', '/commands/querying')
        // cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
        cy.get('.query-form').within(() => {
            cy.get('input:first').should('have.attr', 'placeholder', 'Email')
            cy.get('input:last').should('have.attr', 'placeholder', 'Password')
          })
    })
 })