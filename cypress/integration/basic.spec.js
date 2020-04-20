/// <reference types="cypress"/>

describe('cypress basics', ()=>{
    it('should visit a page and assert title', () => {
        cy.visit('http://localhost:4200');

        // const title = cy.title();
        // console.log(title);

        cy.title()
            .should('be.equal', 'App title')
            .should('contain', 'title')
    })
})