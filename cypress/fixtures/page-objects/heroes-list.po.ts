import { Base } from './base.po';

export class HeroesList extends Base {
  constructor() {
    super();
  }

  /**
  * Enters a hero name, a real hero name and creates a new hero
  *
  * @param {string} name Hero's name
  * @param {string} realName Hero's real name
  */
  createHero(name: string, realname: string) {
    const nameInput = cy.get('[data-cy=heroeNameInput]');
    const heroRealName = cy.get('[data-cy=heroRealNameInput]');

    nameInput.type(name);
    heroRealName.type(realname);

    // to-do: clicar no botão "Create"

  }

  deleteHero(name: string, realname: string) {
    
  }

}
