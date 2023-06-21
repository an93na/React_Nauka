describe("Login E2E Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("display success message on valid email and chceck existing eamil and password input", () => {
    cy.get('input[type="email"]').type("test@example.pl");
    cy.get('input[type="password"]').type("cookies");
  });
});
