/// <reference types="cypress"/>

describe('work with radio buttons', () => {
    it('RadioButton', () => {
        cy.visit('https://material.angular.io/components/radio/overview');
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle')
            .click()
            //.should('be.checked'); // não funciona com o mat-radio-button
    })
    it('checkbox', () => {
        cy.visit('https://material.angular.io/components/checkbox/overview');
        cy.get('.mat-checkbox-inner-container')
            .click()
            //.should('be.checked'); // não funciona
    })
    it('select component - combo', () => {
        cy.visit('https://material.angular.io/components/select/overview');
        cy.get('#mat-select-0 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder')
            //.select('Pizza'); //não funciona
            .click()
            .get('#mat-option-1 > .mat-option-text')
            .click()
    })
    
})
