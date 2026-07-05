# Thataflix 🍊

> Tema para Jellyfin inspirado em [thalitaneres.com.br](https://www.thalitaneres.com.br/) — acentos laranja sobre fundo bege quente.

![Preview do Tema](preview.png)

## Características

- **Modo claro e quente** — fundo `#f7f5ee` (bege) com acento laranja `#fb610f`
- **Fonte personalizada** — inclui a fonte "Thata Regular" (handwritten display)
- **Cards suaves** — `0.3em` de borda arredondada para um visual moderno e limpo
- **Paleta completa** — tema MUI + sobrescrita de variáveis CSS
- **Navegação escura** — header `#202020` com texto branco, igual ao site original

## Cores

| Variável | Valor | Uso |
|----------|-------|-----|
| `#f7f5ee` | Fundo | Fundo principal (bege claro) |
| `#ffffff` | Superfície | Cards, sidebar, paper |
| `#fb610f` | Acento | Botões, seleção, progresso |
| `#202020` | Texto | Cor primária do texto |
| `#000000` | Título | Cor dos títulos |
| `#e0deca` | Bege | Elementos secundários |
| `#f2b01e` | Estrela | Avaliações |

## Instalação

### Opção 1: CSS Personalizado (Rápido)

Cole no **Painel → Geral → CSS Personalizado**:

```css
:root {
  --main-bgcolor: #f7f5ee;
  --sidebarbg: #ffffff;
  --accent: #fb610f;
  --accent-hover: #d04e00;
  --text-primary: #202020;
  --text-secondary: rgba(32, 32, 32, 0.65);
  --card-bg: #ffffff;
  --card-radius: 0.3em;
  --header-bg: #202020;
}

.navMenuOption-selected {
  background: #fb610f !important;
  color: #fff !important;
}

.button-submit {
  background: #fb610f !important;
  color: #fff !important;
}
.button-submit:hover {
  background: #d04e00 !important;
}

.itemProgressBarForeground {
  background: #fb610f !important;
}

.emby-checkbox:checked + span + .checkboxOutline {
  background: #fb610f !important;
  border-color: #fb610f !important;
}

::-webkit-scrollbar-thumb {
  background: #fb610f !important;
}
```

### Opção 2: Build Completo

```bash
# Clone o jellyfin-web e instale dependências
git clone https://github.com/jellyfin/jellyfin-web.git
cd jellyfin-web
npm install

# Clone o tema Thataflix dentro dos temas
git clone https://github.com/Beltzac/thataflix.git src/themes/thataflix

# Registre o tema em src/themes/index.ts:
# import thataflix from './thataflix';
# colorSchemes: { ... thataflix, }

# Build
npm run build:production

# Copie dist/ para a raiz web do seu Jellyfin
```

## Preview Local

```bash
cd thataflix
caddy file-server --listen :8080 --root .
# Abra http://localhost:8080/preview.html
```

## Licença

MIT
