# README

## Confirmação de Colagem

Uma extensão de navegador que exibe uma confirmação antes de colar conteúdo em qualquer site, permitindo que você tenha controle sobre a ação de colar. Compatível com Google Chrome e Mozilla Firefox usando o `manifest_version: 3`.

---

## Sumário

- [Descrição](#descrição)
- [Arquivos do Projeto](#arquivos-do-projeto)
- [Instalação](#instalação)
  - [Google Chrome](#google-chrome)
  - [Mozilla Firefox](#mozilla-firefox)
- [Passo a Passo para Injetar a Extensão nos Navegadores](#passo-a-passo-para-injetar-a-extensão-nos-navegadores)
  - [Google Chrome](#google-chrome-1)
  - [Mozilla Firefox](#mozilla-firefox-1)
- [Licença](#licença)

---

## Descrição

Esta extensão intercepta o evento de colagem (`paste`) em qualquer site e exibe uma confirmação ao usuário. Se o usuário confirmar, a colagem ocorre normalmente. Caso contrário, a colagem é cancelada.

---

## Arquivos do Projeto

- `manifest.json`: Arquivo de manifesto da extensão, define as configurações e permissões.
- `content.js`: Script de conteúdo que intercepta o evento de colagem e exibe a confirmação.

---

## Instalação

### Google Chrome

1. **Baixe ou clone este repositório** em seu computador.

2. **Abra o Google Chrome**.

3. Na barra de endereços, digite `chrome://extensions/` e pressione **Enter**.

4. **Ative o Modo do Desenvolvedor** no canto superior direito.

5. Clique em **Carregar sem compactação**.

6. **Selecione a pasta** onde você salvou os arquivos da extensão.

7. A extensão será carregada e aparecerá na lista de extensões instaladas.

### Mozilla Firefox

1. **Baixe ou clone este repositório** em seu computador.

2. **Abra o Mozilla Firefox**.

3. Na barra de endereços, digite `about:debugging` e pressione **Enter**.

4. No menu lateral, clique em **Esta Instância do Firefox** (ou **This Firefox**).

5. Clique em **Carregar Extensão Temporária**.

6. **Selecione o arquivo `manifest.json`** na pasta onde você salvou os arquivos da extensão.

7. A extensão será carregada temporariamente no Firefox. Lembre-se de que ela será removida quando o navegador for reiniciado.

---

## Como Funciona

1. **Ao tentar colar conteúdo** em qualquer site (usando `Ctrl + V` ou clicando com o botão direito e selecionando "Colar"), a extensão intercepta o evento de colagem.

2. **Uma caixa de diálogo** aparecerá perguntando: **"Você deseja colar o conteúdo da área de transferência?"**

   - **Se clicar em "OK"**, o conteúdo será colado normalmente.
   - **Se clicar em "Cancelar"**, a colagem será cancelada.

---

## Considerações

- **Compatibilidade do Manifest V3:**

  - O `manifest_version: 3` é totalmente suportado pelo Google Chrome.
  - No Mozilla Firefox, o suporte ao Manifest V3 ainda está em desenvolvimento. Caso enfrente problemas, pode ser necessário modificar o `manifest.json` para usar `manifest_version: 2`.

- **Permissões:**

  - A extensão não requer permissões especiais, tornando-a mais segura e menos invasiva.

- **Limitações:**

  - A extensão permite que todos os tipos de conteúdo sejam colados (texto, imagens, arquivos, etc.), desde que o navegador e o site suportem esses tipos.

---

## Licença

Este projeto é distribuído sob a [Licença MIT](LICENSE).
