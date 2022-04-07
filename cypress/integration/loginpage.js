describe("renders the login page", () => {
	it("renders correctly", () => {
		cy.visit("/login")
		cy.get("#email").should("exist");
		cy.get("#password").should("exist");
		cy.get("#login").should("exist");
	});
});
