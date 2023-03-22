describe("Triangle", () => {
  it("Is visible", () => {
    cy.visit("http://127.0.0.1:8080");

    cy.get('div[id="triangle"]').should("be.visible");
  });

  it("Is clickable", () => {
    cy.visit("http://127.0.0.1:8080");

    cy.get('div[id="triangle"]').click();

    cy.get("dialog").should("be.visible");
  });
});

describe("Modal", () => {
  it("Is visible", () => {
    cy.visit("http://127.0.0.1:8080");

    cy.get('div[id="triangle"]').should("be.visible");

    cy.get('div[id="triangle"]').click();

    cy.get("dialog").should("be.visible");
  });

  it("Is open", () => {
    cy.visit("http://127.0.0.1:8080");

    cy.get('div[id="triangle"]').click();

    cy.get("dialog").should("be.visible");

    cy.get("dialog").should("have.attr", "open");
  });

  it("Disable interactions", () => {
    cy.visit("http://127.0.0.1:8080");

    cy.get('div[id="triangle"]').click();

    cy.get("body").should("have.css", "overflow", "hidden");
  });
});

describe("Accept Action", () => {
  it("Modal closed", () => {
    cy.visit("http://127.0.0.1:8080");

    cy.get('div[id="triangle"]').click();

    cy.get('button[id="accept"]').should("be.visible");

    cy.get('button[id="accept"]').click();

    cy.get("dialog").should("not.be.visible");
  });

  it("Collect script is persisted", () => {
    cy.visit("http://127.0.0.1:8080");

    cy.get('div[id="triangle"]').click();

    cy.get('button[id="accept"]').should("be.visible");

    cy.get('button[id="accept"]').click();

    cy.get("dialog").should("not.be.visible");

    cy.get('script[src="collect.js"]');

    cy.reload();

    cy.get('script[src="collect.js"]');
  });
});

describe("Action", () => {
  it("Modal closed", () => {
    cy.visit("http://127.0.0.1:8080");

    cy.get('div[id="triangle"]').click();

    cy.get('button[id="reject"]').should("be.visible");

    cy.get('button[id="reject"]').click();

    cy.get("dialog").should("not.be.visible");

    cy.get('script[src="collect.js"]').should("not.exist");
  });

  it("Collect script is removed", () => {
    cy.visit("http://127.0.0.1:8080");

    cy.get('div[id="triangle"]').click();

    cy.get('button[id="reject"]').should("be.visible");

    cy.get('button[id="reject"]').click();

    cy.get("dialog").should("not.be.visible");

    cy.get('script[src="collect.js"]').should("not.exist");

    cy.reload();

    cy.get('script[src="collect.js"]').should("not.exist");
  });
});
