/// <reference types="cypress"/>

describe('cypress basics', () => {
    it.only('should visit a page and assert title', () => {
        cy.visit('http://localhost:4200');

        // const title = cy.title();
        // console.log(title);
        /*
        cy.title()
            .should('be.equal', 'App title')
            .should('contain', 'title')
        */
       let syncTitle
        cy.title().then( title => {
            console.log(title)
            syncTitle = title
            cy.get('#mat-input-0').type('xxx')
        })

        cy.get('#mat-input-0').then($el => {
            $el.val(syncTitle)
        })

        cy.get('#mat-input-0').then($el => {
            cy.wrap($el).type(syncTitle)
        })
       
    })

    it('should find and interact with an element', () => {
        cy.visit('http://localhost:4200');
        cy.get('[routerlink="heroes"] > .mat-button-wrapper').click();
        cy.get('form.ng-tns-c16-2 > .mat-raised-button').should('contain.text', 'Create');
        cy.get('[routerlink="heroes"] > .mat-button-wrapper').should('contain.text', 'Heroes list');

        cy.get('#mat-input-0').should('contain.text', 'Look for a hero!').debug();
    })
})