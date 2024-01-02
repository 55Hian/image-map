describe('Meu primerio conjunto de testes', () => {
  // cria novo conjunto de testes

  it('testa a url de visita', () => { //caso de teste(descreve o que sera testado)

    cy.visit('http://127.0.0.1:5500/image-map/') //

  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Testa o pára-brisa', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://127.0.0.1:5500/image-map/');
    cy.get('map > [data-target="parabrisa"]').click({force: true});
    cy.get('[src="./img/parabrisa.png"]').should('have.class', 'sobreposicao');
    cy.get('[src="./img/parabrisa.png"]').should('have.attr', 'data-target', 'parabrisa');
    cy.get('[src="./img/parabrisa.png"]').should('be.visible');
    /* ==== End Cypress Studio ==== */

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#parabrisa > h3').should('have.text', 'Pára-brisa');
    cy.get('#parabrisa > h3').should('be.visible');
    cy.get('#parabrisa > .close').should('have.text', '✖');
    cy.get('#parabrisa > .close').should('be.visible');
    cy.get('#parabrisa > p').should('be.visible');
    cy.get('#parabrisa').should('have.id', 'parabrisa');
    cy.get('#parabrisa').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Testa o retrovisor', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://127.0.0.1:5500/image-map/');

    cy.get('map > [data-target="retrovisor-dir"]').should('have.attr', 'data-target', 'retrovisor-dir');
    cy.get('map > [data-target="retrovisor-dir"]').click({force: true});
    cy.get('#overlay').should('be.visible');
    cy.get('#retrovisor-dir > h3').should('have.text', 'Retrovisor Direito');
    cy.get('#retrovisor-dir > h3').should('be.visible');
    cy.get('#retrovisor-dir > .close').should('have.text', '✖');
    cy.get('#retrovisor-dir > .close').should('be.visible');
    cy.get('#retrovisor-dir > p').should('be.visible');
    cy.get('#retrovisor-dir').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
})