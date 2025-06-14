# Instruções de Deploy - Site GTE Virtual

Este documento contém instruções detalhadas para o deploy do site do GTE Virtual, desenvolvido com Next.js, React e Tailwind CSS.

## Estrutura do Projeto

O site do GTE Virtual foi desenvolvido utilizando:
- **Next.js 13** - Framework React para renderização de páginas
- **React 18** - Biblioteca para construção de interfaces
- **Tailwind CSS** - Framework CSS para estilização
- **Date-fns** - Biblioteca para manipulação de datas (usada na agenda do presidente)
- **Framer Motion** - Biblioteca para animações

## Opções de Deploy

### 1. Deploy em Ambiente Node.js (Recomendado)

Para melhor performance e funcionalidades completas, recomendamos hospedar o site em um ambiente Node.js:

1. **Requisitos do servidor:**
   - Node.js 16.x ou superior
   - NPM 8.x ou superior
   - Pelo menos 512MB de RAM

2. **Passos para deploy:**
   ```bash
   # Instalar dependências
   npm install
   
   # Construir o projeto para produção
   npm run build
   
   # Iniciar o servidor em modo produção
   npm start
   ```

3. **Plataformas recomendadas:**
   - Vercel (integração nativa com Next.js)
   - Netlify
   - Railway
   - Render
   - AWS Amplify

### 2. Deploy como Site Estático

O projeto também pode ser exportado como um site estático para hospedagem em qualquer servidor web:

1. **Gerar arquivos estáticos:**
   ```bash
   # Instalar dependências
   npm install
   
   # Construir e exportar o projeto como site estático
   npm run build
   ```

2. **Arquivos para upload:**
   - Todo o conteúdo da pasta `out` gerada após o build

3. **Plataformas recomendadas para hospedagem estática:**
   - GitHub Pages
   - Netlify
   - Vercel
   - Amazon S3
   - Firebase Hosting

## Atualização da Agenda do Presidente

A agenda do presidente foi implementada com um componente que simula a atualização diária. Para integrar com dados reais:

1. Edite o arquivo `components/AgendaPresidente.js`
2. Substitua a função `fetchAgenda` por uma implementação que busque dados da API ou serviço desejado
3. Mantenha a estrutura de dados retornada no mesmo formato para compatibilidade com o componente

## Manutenção e Atualizações

### Atualização de Conteúdo

- **Imagens:** Adicione novas imagens na pasta `public/images/`
- **Textos:** Edite os componentes correspondentes em `components/` ou `pages/`
- **Aeronaves:** Atualize o array `aeronaves` no arquivo `pages/galeria.js`

### Atualização de Dependências

Periodicamente, é recomendável atualizar as dependências do projeto:

```bash
npm update
```

## Personalização

### Cores e Tema

- As cores principais do site estão definidas no arquivo `tailwind.config.js`
- Para alterar a paleta de cores, edite as variáveis na seção `theme.extend.colors`

### Fontes

- As fontes utilizadas são carregadas via Google Fonts
- Para alterar as fontes, edite as referências em `styles/globals.css` e `tailwind.config.js`

## Suporte

Para qualquer dúvida ou suporte adicional, entre em contato através do email: contato@gtevirtual.com.br

---

© 2025 GTE Virtual - Todos os direitos reservados
