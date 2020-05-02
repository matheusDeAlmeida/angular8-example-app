/// <reference types="cypress"/>


describe('Dynamic tests', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    // 8. outras funcionaliade do cypress, 3. testes dinâmicos
    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano'];
    foods.forEach(food => {
        it(`Cadastro com comida: ${food}`, () => {
            // arrow function não funciona bem aqui
            cy.fixture('userData').as('usuario').then(function () {
                cy.visit('https://wcaquino.me/cypress/componentes.html');
                cy.get('#formNome').type(`${this.usuario.nome}`)
                // cy.get('#formSobrenome').type()
                cy.get(`[data-cy=dataSobrenome]`).type(`${this.usuario.sobrenome}`)
                // cy.get(`[name=formSexo][value=${this.usuario.sexo}]`).click() // erro
                cy.get(`[name=formComidaFavorita][value=${this.usuario.comida}]`).click()
                cy.get('#formComidaFavorita > tbody > tr').contains(food)
            })
        })
    })

    // 8. outras funcionalidades do cypress, 4. each
    it.only('Must select all using "each"', () => {
        // arrow function não funciona bem com o fixture
        cy.fixture('userData').as('usuario').then(function () {
            cy.visit('https://wcaquino.me/cypress/componentes.html');
            cy.get('#formNome').type(`${this.usuario.nome}`)
            // cy.get('#formSobrenome').type()
            cy.get(`[data-cy=dataSobrenome]`).type(`${this.usuario.sobrenome}`)
            // cy.get(`[name=formSexo][value=${this.usuario.sexo}]`).click() // erro
            // cy.get(`[name=formComidaFavorita][value=${this.usuario.comida}]`).click()
            // cy.get('[name=formComidaFavorita]').click({multiple: true})
            cy.get('[name=formComidaFavorita]').each($el => {

                // 
                if($el.val() != 'vegetariano')
                    // o wrap dá uma rastreabilidade dos cliques
                    // não achei que essa rastreabilidade é grande coisa
                    cy.wrap($el).click() 
            })
        })
    })
})