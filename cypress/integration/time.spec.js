/// <reference types="cypress"/>

describe('', () => {
    before( () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    it('going back to the past', () => {
        // teste com a data de hoje
        // cy.get('#buttonNow').click()
        // cy.get('#resultado > span').should('contain', '01/05/2020')

        // teste com a data padrão do cy.clock()
        // cy.clock()
        // cy.get('#buttonNow').click()
        // cy.get('#resultado > span').should('contain', '31/12/1969')

        // teste com uma data arbitrária
        const dt = new Date(2000, 0, 1, 0, 0, 0, 0);
        cy.clock(dt.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '01/01/2000')

    })
})