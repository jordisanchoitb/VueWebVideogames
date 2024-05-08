const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
      '/ws': {
        target: 'wss://localhost:3000', // Cambia esto a la URL de tu servidor WebSocket seguro
        ws: true,
        changeOrigin: true
      }
    }
  },
  transpileDependencies: true
})
