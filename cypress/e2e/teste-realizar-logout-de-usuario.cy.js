describe('Funcionalidade de logout de usuário', () => {
  beforeEach(() => {    
    cy.visit('https://www.saucedemo.com/')
  })
  it(`Verificar a ação de logout da conta do usuário atual logado`, () => {

    //Realiza login do usuário 'standar_user'
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce') 
    cy.get('[data-test="login-button"]').click()
    cy.get('#react-burger-menu-btn').click()
    
    // Verifica se os menu de opções estão vísiveis
    cy.contains('All Items').should('be.visible')
    cy.contains('About').should('be.visible')
    cy.contains('Logout').should('be.visible')
    cy.contains('Reset App State').should('be.visible')

    //Realiza Logout
    cy.get('[data-test="logout-sidebar-link"]').click()

    // Verifica se a URL é direcionada para página de login
    cy.url().should('include', 'https://www.saucedemo.com/')
    })
})
  
    // O emprego do ponto e vírgula (;) foi dispensado proposiotalmente para manter um padrão.