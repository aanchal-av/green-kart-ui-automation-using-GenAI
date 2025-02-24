describe("greenKart", () => {
  it("tests e2e greenKart", () => {
    cy.viewport(1145, 765);
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get("div.products-wrapper > div > div:nth-of-type(1) a.increment").click();
    cy.get("div.products-wrapper > div > div:nth-of-type(1) button").click();
    cy.get("a.cart-icon > img").click();
    cy.get("div.cart button").click();
    cy.get("#root > div > div > div > div > button").click();
    cy.get("select").select("India")
    cy.get("select").type("India");
    cy.get("input").click();
    cy.get("button").click();
  });
});

//test cases written by ChatGPT, it had some locator and operational changes required which is done

describe("test the order flow", () => {
  beforeEach(() => {
    cy.viewport(1145, 765);
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  });

  it("adds an item to the cart and completes the checkout", () => {
    cy.get("div.products-wrapper > div > div:nth-of-type(1) a.increment").click();
    cy.get("div.products-wrapper > div > div:nth-of-type(1) button").click();
    cy.get("a.cart-icon > img").click();
    cy.get("div.cart button").click();
    cy.get("#root > div > div > div > div > button").click();
    cy.get("select").select("India");
    cy.get("input").click();
    cy.get("button").click();
  });

  it("verifies that the cart is empty initially", () => {
    cy.get("a.cart-icon > img").click();
    cy.get(":nth-child(1) > :nth-child(3) > strong").should('have.text','0')
  });

  it("adds multiple items to the cart", () => {
    cy.get("div.products-wrapper > div > div:nth-of-type(1) button").click();
    cy.get("div.products-wrapper > div > div:nth-of-type(2) button").click();
    cy.get("a.cart-icon > img").click();
    cy.get(".cart-preview").should("contain", "Brocolli - 1 Kg");
    cy.get(".cart-preview").should("contain", "Cauliflower - 1 Kg");
  });

  it("ensures checkout button is disabled when cart is empty", () => {
    cy.get("a.cart-icon > img").click();
    cy.get("button").contains("PROCEED TO CHECKOUT").should('have.class', 'disabled')
  });

  it("handles invalid coupon code gracefully", () => {
    cy.get("div.products-wrapper > div > div:nth-of-type(1) button").click();
    cy.get("a.cart-icon > img").click();
    cy.get("button").contains("PROCEED TO CHECKOUT").click();
    cy.get("input.promoCode").type("766fytyu");
    cy.get("button").contains("Apply").click();
    cy.get(".promoInfo",{timeout:7000}).should("contain", "Invalid code");
  });

  it("checks that the country dropdown works correctly", () => {
    cy.get("div.products-wrapper > div > div:nth-of-type(1) button").click();
    cy.get("a.cart-icon > img").click();
    cy.get("button").contains("PROCEED TO CHECKOUT").click();
    cy.get("#root > div > div > div > div > button").click();
    cy.get("select").select("India").should("have.value", "India");
  });

  it("validates that place order cannot proceed without terms agreement", () => {
    cy.get("div.products-wrapper > div > div:nth-of-type(1) button").click();
    cy.get("a.cart-icon > img").click();
    cy.get("button").contains("PROCEED TO CHECKOUT").click();
    cy.get("button").contains("Place Order").click();
    cy.get(".errorAlert").should('contain', 'Please accept Terms & Conditions - Required');
  });
});
