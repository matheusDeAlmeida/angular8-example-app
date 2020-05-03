import { URLs, urlInterpolation } from '../../fixtures/utils/url.utils';
import { HeroesList } from '../../fixtures/page-objects/heroes-list.po';


describe('Interacts with heroes', () => {
    const heroesList = new HeroesList();

    before(() => {
        cy.visit( urlInterpolation(URLs.baseURL, '') );
    });

    // to-do: a hora que o firebase estiver funcionando, implementar as interações com os herois
    const heroes = ['Wonder Woman', 'Batman', 'Captain America'];
    heroes.forEach(hero => {
        it(`Gives ${hero} a like`, () => {
            // arrow function não funciona bem aqui
            cy.fixture('userData').as('usuario').then(function() {
                // cy.visit('https://wcaquino.me/cypress/componentes.html');
                // cy.get('#formNome').type(`${this.usuario.nome}`);
                // cy.get('#formSobrenome').type()
                // cy.get(`[data-cy=dataSobrenome]`).type(`${this.usuario.sobrenome}`);
                // cy.get(`[name=formSexo][value=${this.usuario.sexo}]`).click() // erro
                // cy.get(`[name=formComidaFavorita][value=${this.usuario.comida}]`).click();
                // cy.get('#formComidaFavorita > tbody > tr').contains(hero);
            });
        });
    });
});
