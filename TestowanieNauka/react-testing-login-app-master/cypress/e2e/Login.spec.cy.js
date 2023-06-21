describe("Login E2E Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("display success message on valid email and chceck existing eamil and password input", () => {
    cy.get('input[type="email"]').type("test@example.pl");
    cy.get('input[type="password"]').type("cookies");
    cy.get('button[data-testid="submit"]').click();
    cy.get('div[data-testid="user"]')
      .should("be.visible")
      .contains("test@example.pl");
  });
  it("display error message on invalid email and chceck existing eamil and password inputs", () => {
    cy.get('input[type="email"]').type("zly");
    cy.get('input[type="password"]').type("cookies");
    cy.get('button[data-testid="submit"]').click();
    cy.get('div[data-testid="error"]')
      .should("be.visible")
      .contains("Email is not valid");
  });
  it("resets from fields by click button", () => {
    cy.get('input[type="email"]').type("test@example.pl");
    cy.get('input[type="password"]').type("cookies");
    cy.get("button[data-testid=reset]").click();
    cy.get('input[type="email"]').should("have.value", "");
    cy.get('input[type="password"]').should("have.value", "");
  });
});
