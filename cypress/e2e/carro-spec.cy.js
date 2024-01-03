describe('Teste E2E do Projeto Carro', () => {
  // cria novo conjunto de testes


  beforeEach(() =>{

    cy.visit('http://127.0.0.1:5500/');

  });

    it('Verifica seoverlay tem tamanho da imagem base', () => {
        
        cy.get('#imagemBase').should('have.prop','clientHeight').then( clientHeight => {
            cy.get('#overlay').invoke('height').should('equal', clientHeight);
        });

    });

    it('Verifica se a cor do overlay esta correta', () => {
        
        cy.get('#overlay').should('have.css','background-color', 'rgba(0, 0, 0, 0.533)');

    });

    it('Verifica se o overlay esta oculto', () => {

    cy.get('#overlay').should('have.class','oculto').and('not.be.visible');
    })

    it('Verifica se os cards estao ocultos', () => {
        cy.get('.data').each(card => {

           cy.wrap(card).should('not.be.visible');

        });
        
    });

    it('Verifica se as imagens de destaque estao ocultas', () => {
        cy.get('[data-test="imgParabrisa"]').should('have.class','oculto').and('not.be.visible');
        cy.get('[data-test="imgRetrovisorDir"]').should('have.class','oculto').and('not.be.visible');
        cy.get('[data-test="imgEspelhoRetrovisor"]').should('have.class','oculto').and('not.be.visible');
    });

})