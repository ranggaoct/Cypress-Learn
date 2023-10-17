describe('login',{testIsolation:false}, () => {
  it('validasi sign in button', () => {
    cy.visit('/')
    cy.get('[type="button"]').contains('Sign In').click();
    cy.url().should('contain','login')
    cy.get('[type="text"]').should('be.visible')
    cy.get('[type="password"]').should('be.visible')
  })
  it('login with valid email', () => {
    cy.get('[type="text"]').should('be.visible').clear().type('ranggi@gmail.com');
    cy.get('[type="password"]').should('be.visible').clear().type('12345678');
    cy.get('[type="button"]').contains('Login').click();
  })
  it('Sign Out', () => {
    cy.get('[class="dropdown-toggle btn btn-primary"]').click();
    cy.get('[class="dropdown-item"]').contains('Sign Out').click();
    cy.url().should('not.contain','login')
    cy.log()
    cy.log()
  });
})