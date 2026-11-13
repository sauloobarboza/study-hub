STUDY HUB — PRIMEIRA VERSÃO
===========================

Conteúdo:
- index.html: interface do aplicativo
- styles.css: visual responsivo, tema claro/escuro e animações
- app.js: módulos, lições, quizzes e progresso
- manifest.json: configuração PWA
- sw.js: cache/offline
- icon.svg: ícone

COMO PUBLICAR
1. Ative GitHub Pages nas configurações do repositório.
2. Em Settings > Pages, selecione Deploy from a branch.
3. Escolha a branch main e a pasta /(root), depois salve.
4. Abra o endereço HTTPS no Chrome do Android.
5. No menu ⋮, escolha Instalar app ou Adicionar à tela inicial.

IMPORTANTE
- O progresso é salvo localmente no navegador usando IndexedDB.
- O aplicativo não exige login, backend, API externa ou conta de terceiros.
- Limpar os dados do site/navegador pode apagar o progresso.
- O material CSA é introdutório e original, não é banco de questões oficial nem reproduz questões reais de prova.
- Consulte docs.servicenow.com e o blueprint vigente do exame para validar o conteúdo.
- PWA exige HTTPS (exceto localhost). Abrir index.html diretamente não ativa instalação/offline.
