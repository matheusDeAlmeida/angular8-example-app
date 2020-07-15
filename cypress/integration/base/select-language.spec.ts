import { URLs, urlInterpolation } from '../../fixtures/utils/url.utils';
import { Base } from '../../fixtures/page-objects/base.po';
import { Language } from '../../fixtures/data/language-data';

describe('Look for a hero', () => {
    const base = new Base();
    const lang = Language.english;

    before(() => {
        cy.visit( urlInterpolation( URLs.baseURL, '') );
    });

    it('select a language', () => {
        base.selectLanguage(lang);
    });
});
