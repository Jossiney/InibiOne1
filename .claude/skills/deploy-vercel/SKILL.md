---
name: deploy-vercel
description: Publica as páginas redesenhadas dos clientes na Vercel (integrada ao GitHub deste repositório). Use no lugar da skill deploy-hostgator quando prospector/prospector-config.json tiver hospedagem.tipo = "vercel". Acione quando o usuário disser "publicar", "subir o site", "colocar no ar", "deploy" ou "vercel".
---

# Deploy na Vercel (via GitHub)

Este repositório é um app Vite. Tudo que está em `public/` é copiado para a raiz do site no build, e a Vercel faz o build a cada push no GitHub.

Configuração: bloco `hospedagem` de `prospector/prospector-config.json` (`pastaLocal`, `pastaBase`, `branchProducao`, `dominio`).

## Passos

1. Copie a página do cliente para `public/clientes/[slug]/index.html` e a capa da proposta para `public/clientes/[slug]/proposta.html`. Imagens e assets vão na mesma pasta, com caminhos relativos.
2. Adicione `<meta name="robots" content="noindex">` nas páginas de clientes que ainda não fecharam.
3. Rode `npm run build` e confira se `dist/clientes/[slug]/index.html` existe.
4. Faça commit e push. Na branch de trabalho, a Vercel gera uma URL de *preview*; o endereço oficial (`https://[dominio]/clientes/[slug]/`) só atualiza quando a mudança chega na `branchProducao` (merge do PR). Não faça merge sem o usuário pedir.
5. Verificação obrigatória: abra `https://[dominio]/clientes/[slug]/` e `.../proposta.html` pelo navegador (Playwright) e confirme conteúdo e HTTPS. A Vercel já serve HTTPS; link `http://` nunca vai para cliente.
6. Atualize o CRM: `status='publicado'`, `urlNova` com a URL final (skill dashboard-leads).

Se `dominio` estiver vazio, pergunte ao usuário o domínio do projeto na Vercel (ex.: `inibi-one1.vercel.app`) e grave no config.
