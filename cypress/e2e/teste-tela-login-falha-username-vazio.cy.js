
describe('Tela de login - Função de logar usuário', () => {
  beforeEach(() => {     
    cy.visit('https://www.saucedemo.com/')
  })

      it(`Verificar campo de username vazio e exibir erro:`, () => {

     
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click() 
      cy.contains('Epic sadface: Username is required').should('be.visible')
      
      })
   })

    // O emprego do ponto e vírgula (;) foi dispensado proposiotalmente para manter um padrão.