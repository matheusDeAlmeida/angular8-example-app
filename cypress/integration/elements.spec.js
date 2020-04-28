/// <reference types="cypress"/>

describe('work with basic elements', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:4200');
    })

    it('Text', () => { // dado um texto, queremos saber se ele está na tela
        cy.get('body').should('contain', 'Look for a hero!');
        cy.get('.header__title').should('contain', 'Heroes most liked');
    })
    it('Links', () => {
        cy.get('.icon__image > img').click();
        cy.reload();
    })

    it.only('TestFields', () => {
        //cy.get('#mat-input-0').type('wonder woman');
        //cy.get('#mat-input-0').should('have.value', 'wonder woman'); // teste falha
        cy.get('#mat-input-0')
            .type('textarea')
            .should('have.value', 'textarea')
            .type('{backspace}')
            .should('have.value', 'textare')
            .clear()
            .type('Thor')
    })
})