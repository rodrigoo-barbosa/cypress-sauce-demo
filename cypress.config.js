const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',

      setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          // Desativa pop-up de senha
          launchOptions.args.push('--disable-save-password-bubble')

          // Outras flags úteis (opcional)
          launchOptions.args.push('--disable-extensions')
          launchOptions.args.push('--disable-popup-blocking')
        }

        return launchOptions
      })
    }
  }
});
