/// <reference types="cypress"/>

describe('work with basic elements', () => {
    //beforeEach(()=>{
        //cy.visit('http://localhost:4200');
    //})

    it('Text', () => { // dado um texto, queremos saber se ele está na tela
        cy.get('body').should('contain', 'Look for a hero!');
        cy.get('.header__title').should('contain', 'Heroes most liked');
    })
    it('Links', () => {
        cy.get('.icon__image > img').click();
        cy.reload();
    })

    it('TestFields', () => {
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

    it.only('combo', () => {
        cy.visit('https://material.angular.io/components/select/overview');
        cy.get('#mat-select-0')
            .click()
            .get('#cdk-overlay-0 > div')
            // contain.text funciona se o array estiver com os elementos na
            // ordem correta e com o texto exato que está na div
            .should('contain', ' Steak  Pizza  Tacos ')
            /*
            .should('contain', 'Pizza')
            .should('contain', 'Steak')
            .should('contain', 'Tacos')
            */

            /*
            .then( $arr => { //capítulo 5, aula 5 - combos
                const values = [];
                $arr.each ( () => {
                    values.push(this.innerHTML)
                })
                // não consegui fazer funcionar com o select do angular material
                expect(values).to.include.members(["Pizza"])
            })
            */
    })
})