/**
 * Base page objects class
 * Contains header's page objects:
 * HOME (button), HEROES LIST(button) and Look for a hero!(input)
 */
export class Base {
    constructor(public isFirebaseWorking = true) {
        // criar flags booleanas para os serviços que estão falhando
        // fazer os testes seguirem caminhos diferentes caso o serviço falhe
     }

    getHomeButton() {
        return cy.get('[data-cy=home]');
    }

    getHeroesListButton() {
        return cy.get('[data-cy=heroesList]');
    }

    getLanguageListMenu() {
        const languageButton = cy.get('[data-cy=languageButton]');

        languageButton.click();
        return cy.get('.mat-menu-content');
    }

    /**
     * Clicks on a language passed by parameter
     */
    selectLanguage(lang: string) {
        const languageListMenu = this. getLanguageListMenu();

        languageListMenu
            .contains(lang)
            .click();
    }

    /**
     * Enters a hero name and looks for him
     *
     * @param heroName Hero name to look for
     */
    searchHero(heroName: string) {
        const lookForAheroInput = cy.get('[data-cy=lookForAheroInput]');

        lookForAheroInput.type(heroName);

        /*
        to-do: fazer a busca a partir do autocomplete tirando proveito do ngFor
        --não consegui tirar proveito das diretivas do angular, elas geram html
        ativamente, parece impossível haver alternativa ao uso das "nth's children"
        <mat-option *ngFor="let hero of filteredHeroes"
                [value]="hero.name">
        to-do: randomizar em qual opção do autocomplete ele clica
        */

    }
}
