/// <reference types="cypress"/>

describe('Helpers...', () => {
    
    it('wrap', () => {
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')
        cy.visit('https://material.angular.io/components/input/overview');
        //cy.get('#mat-input-1').type('functional')
        cy.get('#mat-input-1').then( $el => {
            cy.wrap($el).type('functional')
        })

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 1000)
        })

        cy.get('[href="/components/input/api"]').then(() => console.log('encontre o primeiro botão'))
        promise.then((some) => {
            console.log(some)
        })
        cy.get('[href="/components/input/examples"]').then(() => console.log('encontrei o segundo botão'))

        cy.wrap(1).then(num => {
            return 2;
        }).should('be.equal', 2)

        //cy.wrap(1).should(num => { // esse teste dá erro porque o should ig-
        //    return 2;              // nora o retorno, pro should, vale o
        //}).should('be.equal', 2)   // 1 no wrap(1)

    })

    it('its...', () => {
        /*
        const obj = {nome: 'User', idade: 20}
        cy.wrap(obj).should('have.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.equal', 'User')
        const obj2 = {nome: 'User', idade: 20, endereco: {rua: 'dos Bobos'}}
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')
        // este teste não tem funcamento, its('endereco') não é acessível
        cy.wrap(obj2).its('endereco').its('rua').should('contains', 'bobo') 
        cy.wrap(obj2).its('endereco.rua').should('contains', 'bobo')
        */

       cy.visit('https://material.angular.io/components/input/overview');
       cy.title().its('length').should('be.equal', 24)
    })

    it.only('Invoke', () => {
        const getValue = () => 1
        const soma = (a, b) => a+b
        cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1)
        cy.wrap({fn: soma}).invoke('fn', 2, 1).should('be.equal', 3)

        cy.visit('https://material.angular.io/components/input/overview');
        cy.get('#mat-input-1').invoke('val', 'texto via invoke');
        cy.window().invoke('alert', 'alert via invoke')
        cy.get('.docs-markdown > :nth-child(1) > :nth-child(1)')
            .invoke('html', '<input type="button" value="hacked"/>"')
    })
})