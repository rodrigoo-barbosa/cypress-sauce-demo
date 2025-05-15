
// Array com todos os usuários autorizados para logar
const usuarios = [   
  {username: 'standard_user', deveLogar: true },
  {username: 'locked_out_user', deveLogar: false },
  {username: 'problem_user', deveLogar: true },
  {username: 'performance_glitch_user', deveLogar: true },
  {username: 'error_user', deveLogar: false }, 
  {username: 'visual_user', deveLogar: true }
]

describe('Tela de login - Função de logar usuário', () => {
  beforeEach(() => {     
    cy.visit('https://www.saucedemo.com/')
  })

  // Para cada usuário, a função testa o username de cada usuário na tela de login
  usuarios.forEach((usuario) => {  
    it(`Verificar login com usuário: ${usuario.username}`, () => {
      cy.get('[data-test="username"]').type(usuario.username)
      cy.get('[data-test="password"]').type('secret_sauce') // O password é o mesmo para todos os usuários
      cy.get('[data-test="login-button"]').click()

      if (usuario.deveLogar === true) {
        // Verifica se a URL muda para: https://www.saucedemo.com/inventory.html
        cy.url().should('include', 'www.saucedemo.com/inventory.html') 
      } 
    })
  })
})

    // O emprego do ponto e vírgula (;) foi dispensado proposiotalmente para manter um padrão.