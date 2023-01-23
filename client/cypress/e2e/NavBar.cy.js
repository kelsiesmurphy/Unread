const baseUrl = 'http://localhost:3000'

describe('NavBar', () => {

    beforeEach(() => {
      cy.visit(baseUrl)
    });
    it('should have a working discover link', () => {
        cy.get('#nav').find('#discover').click;
        cy.url().should("eq", baseUrl + '/' )

    });
    it('should have a working profile link', () => {
        cy.get('#nav').get('#profile').click;
        cy.url().should("eq", baseUrl + '/user' )

    });
    it('should have a working blog link', () => {
        cy.get("#blog").click;
        cy.url('#blog').should("eq", baseUrl + '/' )
    })    
  })