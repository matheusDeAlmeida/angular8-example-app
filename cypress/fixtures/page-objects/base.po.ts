/**
 * Base page objects class
 * Contains header's page objects:
 * HOME (button), HEROES LIST(button) and Look for a hero!(input)
 */
export class Base {
    constructor() { }

    getHomeButton() {
        return cy.get('[data-cy=home]');
    }

    getHeroesListButton() {
        return cy.get('[data-cy=heroesList]');
    }

    /**
     * Enters a hero name and looks for him
     *
     * @param {string} heroName Hero name to look for
     */
    searchHero(heroName: string) {
        const lookForAheroInput = cy.get('[data-cy=lookForAheroInput]');

        lookForAheroInput.type(heroName);

        /*
        to-do: fazer a busca a partir do autocomplete tirando proveito do ngFor
        <mat-option *ngFor="let hero of filteredHeroes"
                [value]="hero.name">
        to-do: randomizar em qual opção do autocomplete ele clica
        */

    }
}
