export class Base {
    constructor() { }

    getHomeButton() {
        return cy.get('[data-cy=home]');
    }

    getHeroesListButton() {
        return cy.get('[data-cy=heroesList]');
    }

    lookForAheroInput() {
        return cy.get('[data-cy=lookForAheroInput]').click();
    }

    /*
    to-do: implementar esse método de uma maneira inteligente usando tirando proveito do ngFor
      <mat-option *ngFor="let hero of filteredHeroes"
              [value]="hero.name">
    */
   getHeroFromAutocomplete() {

   }
}
