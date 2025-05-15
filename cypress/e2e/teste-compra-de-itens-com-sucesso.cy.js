describe('Tela de Inventário - Compra de itens', () => {
  beforeEach(() => {    
    cy.visit('https://www.saucedemo.com/')
  })
  it(`Verificar se usuário é capaz de realizar compras de produtos com sucesso`, () => {
    //Realiza login do usuário 'standar_user'
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce') 
    cy.get('[data-test="login-button"]').click()
    cy.get('#react-burger-menu-btn').click()

    //Seleciona os itens para compra e verifica se a quantidade do carrinho e incrementado
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '2')
   
    // Verifica se os itens selecionados anteriormente estão visiveis na página
    cy.get('[data-test="shopping-cart-badge"]').click()
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible')

    //Prenche o formulário de Checkout  
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', '/checkout-step-one.html')     
    cy.get('[data-test="firstName"]').type('Rodrigo')
    cy.get('[data-test="lastName"]').type('Barbosa')
    cy.get('[data-test="postalCode"]').type('69000000')
    cy.get('[data-test="continue"]').click()

     // Verifica se os itens selecionados anteriormente estão visiveis na página
    //cy.get('[data-test="shopping-cart-badge"]').click()
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible')
    

    //Confirma pedido
    cy.get('[data-test="finish"]').click()
    cy.url().should('include', '/checkout-complete.html') 
    cy.contains('Thank you for your order!').should('be.visible')
    cy.contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!').should('be.visible')

    //Retorna para tela inicial
    cy.get('[data-test="back-to-products"]').click()
    cy.url().should('include', '/inventory.html')   
    })
})
  
    // O emprego do ponto e vírgula (;) foi dispensado proposiotalmente para manter um padrão.