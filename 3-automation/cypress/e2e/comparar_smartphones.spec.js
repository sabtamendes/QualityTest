describe("Comparação de Smartphones", function () {
  it("Compara dois smartphones", function () {
    cy.visit("https://www.tudocelular.com/compare/");

    cy.get('#compara .pholder input').type("Samsung");
    cy.contains("Samsung").first().click();

    cy.get('#compara .pholder input').type("Motorola");
    cy.contains("Motorola").first().click();

    cy.contains("Comparar").click();

    cy.url().should('eq', 'https://www.tudocelular.com/compare/8547-8505.html');
  });
});
