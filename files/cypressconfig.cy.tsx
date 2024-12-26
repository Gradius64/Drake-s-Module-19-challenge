import { Cypressconfig } 

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Change this to your application's URL
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite', // or 'webpack' if you are using webpack
    },
  },
});