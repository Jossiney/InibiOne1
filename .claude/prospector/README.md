# Prospector de Sites (adaptado para Claude Code)

Origem: https://github.com/ArrecheNeto/gemini-prospector (plugin para Google Antigravity).

- Skills: `.claude/skills/{prospector-setup,prospeccao-maps,redesign-premium,proposta-gmail,deploy-hostgator,dashboard-leads,contrato-servico}`
- MCP (em `/.mcp.json`): `prospector-crm` (este `prospector-mcp.py`, banco em `prospector/prospector.db`) e `playwright`.
- Requer: `pip install "mcp[cli]"` e Node/npx (para o Playwright MCP).
- O plugin "Google Maps Platform" do Antigravity não existe aqui; a skill `prospeccao-maps` usa o modo navegador (Playwright) como alternativa.
