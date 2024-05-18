describe("My First Test", () => {
  it("Should visit VisuVision, login as a test user, and verify successful login'", () => {
    cy.visit("http://localhost:3000/sign-in", {
      auth: {
        username: "admin1234",
        password: "bluebell!1234",
      },
      headers: {
        Cookie: "__client_uat=0",
      },
    });

    // // Check if the website is loaded successfully
    // cy.url().should("include", "localhost:3000"); // Check if URL contains the expected domain

    // // Locate and click on the login button
    // cy.get(".sidebar-nav > .inline-flex").click();

    // Enter test username
    cy.get("#identifier-field").type("admin1234"); // Example input field selector and test username

    // Locate and click on the Continue button
    cy.get(".cl-formButtonPrimary").click();

    cy.get("#password-field").type("bluebell!1234"); // Example input field selector and test password

    // Locate and click on the Continue button
    cy.get(".cl-formButtonPrimary").click();
  });
});
