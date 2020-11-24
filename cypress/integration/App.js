describe('Initial load', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Shows login text', () => {
    // Check for login text
    cy.contains('Who are you?');
  });

  it('Has all the buttons', () => {
    cy.get('button').should(($l) => {
      expect($l).to.have.length(6);
    });
  });

  it('Loads dogs when breeder button is clicked', () => {
    cy.contains('Astaire').click();
    cy.get('ul > li').should(($l) => {
      expect($l.first()).to.contain('Gypsy');
      expect($l.eq(1)).to.contain('Cedric');
    });
  });
});
