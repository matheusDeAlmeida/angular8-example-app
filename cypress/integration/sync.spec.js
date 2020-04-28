/// <reference types="cypress"/>

describe('Esperas...', () => {
    it('deve aguardar o elemento estar disponível', () => {
        cy.visit('https://material.angular.io/components/datepicker/overview');
        cy.get('[href="/components/checkbox"] > .mat-list-item-content')
            .click()
        cy.get('.mat-checkbox-inner-container') //às vezes dá erro
            .should('exist')
            .click()
    })

    it('Uso do find', () => { // 4. sincronismo -- aula 3 - cuidado com o que busca
        cy.visit('https://material.angular.io/components/radio/examples');
        cy.get('.mat-radio-group')
            .find('div')
            .should('contain', 'Winter')
        cy.get('.mat-radio-group div')
            .should('contain', 'Autumn')
            // .should('have.length', 4) // esse teste falha, encontra 24 elementos
    })
    it.only('Should vs Then', () => {  // 4. sincronismo -- aula 7 - should vs then
        cy.visit('https://material.angular.io/components/radio/examples');
        // não deu pra ver a diferença entre should e then no console.log
        // deu na mesma
        // cy.get('.mat-radio-group div').should($el => {
        cy.get('.mat-radio-group div').then($el => {
            console.log($el)
            expect($el).to.have.length(24)
        }).and('have.text', 'Summer')

        // cy.get('.mat-radio-group div').should($el => {
        //    ($el => {
        //        console.log($el)
        //        expect($el).to.have.length(24)
        //        return 2; // erro porque o should não aceita return aqui, com o then dá certo
        //    }).and('have.text', 'Summer')
    })
})