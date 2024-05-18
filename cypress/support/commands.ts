/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare namespace Cypress {
  interface Chainable<Subject> {
    disableSameSiteCookieRestrictions(): void;
  }
}

Cypress.Commands.add("disableSameSiteCookieRestrictions", () => {
  cy.intercept("*", (req) => {
    req.on("response", (res) => {
      if (!res.headers["set-cookie"]) {
        return;
      }

      const disableSameSite = (headerContent: string): string => {
        return headerContent.replace(
          /samesite=(lax|strict)/gi,
          "samesite=none"
        );
      };

      if (Array.isArray(res.headers["set-cookie"])) {
        res.headers["set-cookie"] =
          res.headers["set-cookie"].map(disableSameSite);
      } else {
        res.headers["set-cookie"] = disableSameSite(res.headers["set-cookie"]);
      }
    });
  });
});
