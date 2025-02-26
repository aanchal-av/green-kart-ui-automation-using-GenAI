describe("greenkart-test", () => {
    beforeEach(() => {
      cy.viewport(868, 765); // Set the viewport size for responsiveness testing
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    });
  
    // Regular Flow: Add products to cart and complete the checkout process
    it("should add products to cart and complete the checkout process", () => {
      cy.get("div.products-wrapper > div > div:nth-of-type(1) button").click(); // Add first product
      cy.get("div.products-wrapper > div > div:nth-of-type(1) button").click(); // Add first product again
      cy.get("a.cart-icon > img").click(); // Open cart
      cy.get("div.cart button").click(); // Proceed to checkout
      cy.get("#root > div > div > div > div > button").click(); // Click on checkout button
      cy.get("select").select("India"); // Select country
      cy.get("#root > div > div > div > div").click(); // Click outside
      cy.get("button").click(); // Submit order
      cy.get("input").click(); // Click on input field (simulate interaction)
      cy.get("button").click(); // Final button click to confirm
    });
  
    // Edge Case 1: Test Cart is Empty Initially
    it("should show an empty cart initially", () => {
      cy.get("a.cart-icon > img").click(); // Open cart
      cy.get(".cart-item").should('have.length', 0); // Assert cart is empty
    });
  
    // Edge Case 2: Adding Same Product Multiple Times
    it("should add the same product multiple times", () => {
      cy.get("div.products-wrapper > div > div:nth-of-type(1) button").click(); // Add product
      cy.get("div.products-wrapper > div > div:nth-of-type(1) button").click(); // Add product again
      cy.get("a.cart-icon > img").click(); // Open cart
      cy.get(".cart-item .quantity").should('contain.text', '2'); // Verify product quantity is 2
    });
  
    // Edge Case 3: Checkout with No Products in Cart
    it("should show 'Cart Empty' message when no products are in cart", () => {
      cy.get("a.cart-icon > img").click(); // Open cart with no products
      cy.get(".cart-item").should('have.length', 0); // Assert cart is empty
    });
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
    })
      