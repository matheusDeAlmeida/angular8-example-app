import { Base } from './base.po';

export class HeroesList  extends Base {
  constructor() {
    super();
  }

  getHeroName() {
    cy.get('[data-cy=heroeNameInput]');
  }

  getHeroRealName() {
    cy.get('[data-cy=heroRealNameInput]');
  }

/**
 * Opens global header's Personal Sign In popover and
 * signs in using specified username/password.
 *
 * @param {string} username Username to login as
 * @param {string} password Password to login as
 */
}
