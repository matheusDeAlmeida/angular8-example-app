import { URLs, urlInterpolation } from '../../fixtures/utils/url.utils';
import { Base } from '../../fixtures/page-objects/base.po';

describe('Look for a hero', () => {
    const base = new Base();

    before( () => {
        cy.visit( urlInterpolation(URLs.baseURL, '') );
    });

    it('Search a hero', () => {
        // heroesList.lookForAheroInput().click().type('wonder woman');
    });

    it('Click on hero searched', () => {

    });

    it('Verifies heroes elements', () => {

    });

});
