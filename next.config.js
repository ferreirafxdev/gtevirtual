// Arquivo de configuração para exportação estática do Next.js
module.exports = {
  // Configuração para exportação estática
  output: 'export',
  // Desabilitar imagens otimizadas para exportação estática
  images: {
    unoptimized: true,
  },
  // Configurações adicionais
  reactStrictMode: true,
  swcMinify: true,
}
