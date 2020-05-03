import { URLs, urlInterpolation } from '../../fixtures/utils/url.utils';
import { HeroesList } from '../../fixtures/page-objects/heroes-list.po';

describe('Look for a hero', () => {
    const heroesList = new HeroesList();

    before( () => {
        cy.visit( urlInterpolation(URLs.baseURL, '') );
    });

    it('Type a hero name', () => {
        heroesList.lookForAheroInput().click().type('wonder woman');
    });
});
