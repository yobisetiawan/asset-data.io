describe("auth", () => {
  it("user able to login", () => {
    //open login page

    cy.visit("/");
    //user type email

    cy.findByRole("textbox", {
      name: /email/i,
    }).type("user_test_asset@mailinator.com");

    //user type password
    cy.findByLabelText(/password/i).type(
      "VW1Gb1lYTnBZVEl3TUNFclFsSnVjbTlaUVVSemF5RT0rWUFEc2shIQ=="
    );

    cy.findByRole("button", {
      name: /sign in/i,
    }).click();

    cy.url().should("include", "/dashboard");
  });
});
