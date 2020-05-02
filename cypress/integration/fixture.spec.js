/// <reference types="cypress"/>

describe("Fixture tests", () => {
    // 8. Outras funcionalidades do cypress, 1. Fixture
    it('Get data from fixture file', function () {
        cy.fixture('userData').as('usuario').then(() => {
            cy.visit('https://wcaquino.me/cypress/componentes.html');
            cy.get('#formNome').type(`${this.usuario.nome}`)
            // cy.get('#formSobrenome').type()
            cy.get(`[data-cy=dataSobrenome]`).type(`${this.usuario.sobrenome}`)
            // cy.get(`[name=formSexo][value=${this.usuario.sexo}]`).click() // erro
            // cy.get(`#[name=formComidaFavorita][value=${this.usuario.comida}]`).click()
        })
    })
})