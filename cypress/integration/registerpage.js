describe("renders the register page", () => {
	it("renders correctly", () => {
		cy.visit("/register")
		cy.get("#firstName").should("exist");
		cy.get("#lastName").should("exist");
		cy.get("#email").should("exist");
		cy.get("#password").should("exist");
		cy.get("#register").should("exist");
	});
});