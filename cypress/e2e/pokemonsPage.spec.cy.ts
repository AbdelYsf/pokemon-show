describe('e2e pokemonpage', () => {
    it('shouldExistsOnPokemonPage', () => {
        cy.visit('http://localhost:3000/pokemons')
        cy.get('[data-cy="pokemon-page"]', {timeout: 5000}).should('exist')
        cy.get('[data-cy="pokemon-card"]', {timeout: 5000}).should("have.length", 20)
        cy.get('[data-cy="pokemon-name"]', {timeout: 5000}).should("have.length", 20)
        cy.get('[data-cy="pokemon-image"]', {timeout: 5000}).should("have.length", 20)
        cy.get('[data-cy="open-pokemon-details"]', {timeout: 5000}).should("have.length", 20)

    })

    it('shouldOpenPokemonDetails', () => {
        cy.visit('http://localhost:3000/pokemons')
        cy.get('[data-cy="open-pokemon-details"]', {timeout: 5000}).should('not.exist')
        cy.get('[data-cy="open-pokemon-details"]').first().click()
        cy.get('[data-cy="open-pokemon-details"]', {timeout: 5000}).should('exist')


    })

    it('shouldLoadMoreWhenScroll', () => {
        cy.visit('http://localhost:3000/pokemons')
        cy.get('[data-cy="pokemon-card"]', {timeout: 20000}).should("have.length", 20)
        cy.scrollTo('bottom')
        cy.get('[data-cy="pokemon-card"]', {timeout: 20000}).should("have.length", 40)


    })

})