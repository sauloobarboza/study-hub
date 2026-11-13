/* Study Hub 2.0 — expansão de currículo e simulados */
(function(){
const extra={
csa:[
["Instância, aplicação e módulo","Diferencie os três conceitos.","Instância é o ambiente provisionado. Aplicação agrupa funcionalidades relacionadas. Módulo é uma entrada de navegação que abre uma página ou funcionalidade.","Exemplo: a instância da empresa contém aplicações; uma aplicação pode conter módulos de navegação.","O nome exibido no menu não é necessariamente o nome técnico da tabela."],
["Ambientes de desenvolvimento e produção","Entenda a separação de ambientes.","Organizações podem usar ambientes de desenvolvimento, teste e produção para controlar mudanças. A promoção deve seguir processo documentado, validação e aprovação.","Uma alteração é construída em DEV, validada em TEST e promovida a PROD conforme governança.","Não teste mudanças arriscadas diretamente em produção."],
["Plugins e dependências","Saiba avaliar ativação de funcionalidades.","Plugins habilitam funcionalidades e podem possuir dependências e impactos. Verifique documentação da release, licenciamento e compatibilidade antes de ativar.","Planeje a ativação, teste em ambiente não produtivo e registre a mudança.","Não presuma que um plugin pode ser desativado sem consequências."],
["Usuários, grupos e papéis","Diferencie identidade, agrupamento e autorização.","User representa a pessoa/identidade; Group organiza usuários; Role concede capacidades. Um usuário pode pertencer a vários grupos e ter vários papéis.","Atribua a pessoa ao grupo de suporte e conceda papéis conforme a função.","Pertencer a um grupo não significa acesso irrestrito."],
["Preferências e personalização","Conheça configurações individuais de experiência.","Preferências podem alterar aspectos da experiência do usuário, enquanto configurações administrativas afetam outros escopos. O alcance depende do recurso.","Um usuário pode ajustar preferências pessoais sem alterar a configuração de todos.","Não confunda preferência pessoal com configuração global."],
["Filtros avançados","Combine condições e operadores.","Filtros podem combinar condições com AND/OR, operadores de comparação e campos relacionados. O agrupamento lógico altera o resultado.","Active=true AND Priority=1 restringe a registros ativos de prioridade 1.","Revise os agrupamentos antes de salvar um filtro complexo."],
["Ordenação, agrupamento e paginação","Explore recursos de listas.","Ordenação altera a sequência; agrupamento organiza registros por valores; paginação divide grandes resultados em páginas.","Agrupe incidentes por estado para visualizar o backlog por etapa.","Agrupamento não altera o dado armazenado."],
["Views de formulário","Apresente campos por contexto.","Views permitem apresentar layouts diferentes para contextos específicos. A configuração pode considerar tabela, usuário, papel e interface.","Uma view simplificada pode mostrar campos essenciais para uma equipe.","View não é uma tabela separada."],
["Templates e ações de formulário","Acelere preenchimento com valores padronizados.","Templates preenchem campos com valores definidos. Ações de formulário executam operações disponibilizadas conforme permissões e configuração.","Template pode sugerir categoria e grupo padrão para um tipo de registro.","Revise os valores antes de salvar; template não valida o processo inteiro."],
["Tarefas e atribuição","Entenda trabalho atribuído a usuário e grupo.","Registros de tarefa podem ter grupo responsável e pessoa atribuída. A combinação depende do processo e da tabela.","Um chamado pode estar atribuído ao grupo Service Desk e a um agente específico.","Grupo de atribuição e usuário atribuído têm papéis distintos."],
["Relatórios por agregação","Interprete contagens e agrupamentos.","Relatórios podem contar, agrupar e visualizar registros. A qualidade depende da tabela, filtros, campos e consistência dos dados.","Contagem de incidentes por prioridade mostra volume por categoria.","Correlação visual não prova causalidade."],
["Knowledge: acesso e publicação","Governança de artigos.","Bases e artigos possuem regras de acesso, revisão e publicação. O público que pode ler depende de critérios e permissões configurados.","Artigo interno pode ser visível somente a determinados grupos.","Publicado não significa público para todos."],
["Catálogo: variáveis e conjuntos","Reutilize perguntas de solicitação.","Variáveis coletam dados; Variable Sets agrupam variáveis reutilizáveis em itens de catálogo, quando aplicável.","Dados comuns de solicitante podem ser padronizados em conjunto reutilizável.","Variável de catálogo não é automaticamente coluna de tabela."],
["Flow Designer: condições e caminhos","Modele decisões em automações.","Condições e lógica direcionam o fluxo para caminhos diferentes. Teste caminhos positivos, negativos e exceções.","Se a solicitação exige aprovação, siga para aprovação; caso contrário, encaminhe ao fulfillment.","Não deixe caminhos sem tratamento para cenários esperados."],
["CMDB: classes e subclasses","Entenda a classificação de CIs.","A CMDB organiza itens por classes e relações. Classes especializadas representam tipos específicos de CI e podem herdar atributos de classes superiores.","Um servidor pode ser representado por uma classe especializada de CI.","Escolha a classe correta; não cadastre qualquer item como classe genérica sem critério."],
["CMDB: relacionamentos","Analise dependências entre CIs.","Relações descrevem como CIs se conectam e dependem uns dos outros. Relações confiáveis ajudam análise de impacto e serviços.","Uma aplicação pode depender de um servidor e de um banco de dados.","Relações incorretas comprometem análise de impacto."],
["Importação: preparação de dados","Prepare fontes antes de importar.","Revise cabeçalhos, formatos, chaves de identificação, dados obrigatórios e qualidade da fonte antes de carregar dados.","Normalize datas e identificadores antes de importar um CSV.","A transformação não corrige automaticamente todos os problemas da fonte."],
["ACL de tabela e campo","Diferencie níveis de proteção.","ACLs podem controlar operações em tabela/registro e em campos. A regra aplicável depende do recurso e da operação solicitada.","Um usuário pode ler o registro, mas não ter permissão para ler determinado campo.","Acesso à tabela não garante acesso a todos os campos."],
["Business Rule e ordem de execução","Entenda impacto das regras.","Business Rules possuem momento e ordem de execução configuráveis. Regras múltiplas podem interagir e devem evitar recursão e efeitos colaterais.","Uma regra before pode validar dados antes da gravação.","Não atualize o mesmo registro indiscriminadamente dentro de regra que dispara pela atualização."],
["Update Sets e escopo","Controle o que é transportado.","Update Sets capturam alterações de configuração suportadas. Escopo de aplicação, dependências e tipos de artefatos afetam o transporte.","Mantenha alterações relacionadas organizadas e documentadas.","Update Set não é cópia integral da instância."],
["Client Script onLoad/onChange/onSubmit","Escolha evento conforme objetivo.","onLoad roda ao carregar formulário; onChange reage à alteração de campo; onSubmit executa no envio. Use cada evento com finalidade clara.","Validar um valor alterado pode ser adequado a onChange; validação final do formulário pode usar onSubmit.","Evite consultas repetitivas e lógica pesada no navegador."],
["Script Include e GlideAjax","Reutilize lógica entre cliente e servidor com controle.","Script Include centraliza lógica server-side. GlideAjax permite chamada assíncrona a Script Includes configurados para acesso pelo cliente.","O cliente solicita um resultado específico; o servidor valida e retorna somente os dados necessários.","Nunca exponha funções ou dados sensíveis sem validação de autorização."]
],
html:[
["HTML e DOM","Relacione marcação e árvore de documentos.","O navegador interpreta HTML e constrói o DOM, uma árvore de nós que pode ser consultada e modificada por JavaScript.","document.querySelector('main') seleciona a região principal.","DOM não é sinônimo do texto-fonte HTML."],
["Atributos globais","Use id, class, lang, hidden e title.","Atributos globais podem ser usados em vários elementos. id identifica unicamente um elemento no documento; class agrupa elementos; lang declara idioma.","<section id='perfil' class='card'>","Evite IDs duplicados."],
["Semântica de landmarks","Melhore navegação assistiva.","main, nav, header, footer e outros elementos semânticos definem regiões reconhecíveis da página.","Use um main para o conteúdo principal da página.","Não escolha elementos apenas pela aparência padrão."],
["Tabelas com cabeçalhos","Associe dados e rótulos corretamente.","th identifica células de cabeçalho; scope pode indicar se o cabeçalho se aplica a linha ou coluna; caption descreve a tabela.","<th scope='col'>Nome</th>","Não use tabela para posicionar elementos da página."],
["Inputs de seleção","Use checkbox e radio adequadamente.","Checkbox permite escolhas independentes; radio agrupa opções mutuamente exclusivas quando compartilham o mesmo name.","Preferência de temas pode usar radio para uma única escolha.","O grupo radio precisa de rótulos e agrupamento acessível."],
["Atributos required, min e pattern","Aplique validação nativa.","Atributos de validação oferecem restrições no cliente. O navegador pode impedir envio quando a entrada não atende às regras.","<input required type='email'>","Validação de cliente não substitui validação no servidor."],
["Acessibilidade por teclado","Garanta interação sem mouse.","Controles nativos são normalmente operáveis por teclado. Ordem de foco deve acompanhar a ordem lógica; foco precisa ser visível.","Tab navega por controles focáveis; Enter/Space acionam controles conforme o tipo.","Não remova foco visível sem alternativa."],
["Imagens responsivas","Entregue imagem adequada ao dispositivo.","srcset e sizes permitem ao navegador selecionar recursos conforme densidade e largura; picture permite direção de arte e formatos alternativos.","Use srcset para oferecer versões da mesma imagem em diferentes resoluções.","Não use imagem maior do que o necessário sem motivo."],
["Metadados e SEO","Descreva cada documento.","title, description, idioma e estrutura semântica ajudam usuários e mecanismos a compreender a página.","Cada página deve ter título único e descritivo.","Meta keywords não substitui conteúdo útil."]
],
css:[
["Cascata em profundidade","Entenda origem, importância e ordem.","A cascata resolve conflitos considerando origem, importância, camadas, especificidade e ordem de declaração. A análise precisa considerar o conjunto de regras.","Inspecione no DevTools qual declaração está ativa e quais foram sobrescritas.","A última regra só vence quando os demais critérios permitem."],
["Seletor de atributo","Selecione por presença ou valor de atributo.","Seletores como [type='email'] e [aria-expanded='true'] selecionam elementos conforme atributos.","input[required] { border-color: red; }","Evite seletores frágeis baseados em conteúdo incidental."],
["Pseudo-elementos","Estilize partes geradas ou específicas.","::before e ::after criam pseudo-elementos; ::placeholder estiliza texto de placeholder; ::marker pode estilizar marcadores de lista.",".item::before { content:'•'; }","Conteúdo essencial não deve existir somente em pseudo-elementos."],
["Overflow e dimensionamento","Controle conteúdo que ultrapassa a caixa.","overflow define como conteúdo excedente é tratado; min-width, max-width, min-height e max-height controlam limites.","overflow:auto permite rolagem quando necessário.","overflow:hidden pode cortar conteúdo importante."],
["Flexbox: crescimento e quebra","Controle tamanho e distribuição de itens.","flex-grow, flex-shrink e flex-basis influenciam o tamanho dos itens; flex-wrap permite quebra de linha.","flex: 1 1 220px;","Entenda o eixo principal antes de ajustar alinhamento."],
["Grid: áreas e alinhamento","Nomeie regiões de layout.","grid-template-areas define áreas nomeadas; align-items e justify-items controlam alinhamento dentro das células.","grid-template-areas:'header header' 'nav main';","A grade precisa manter uma estrutura coerente entre áreas."],
["Position sticky e fixed","Escolha posicionamento de elementos persistentes.","sticky permanece no fluxo e adere a um limite de rolagem; fixed é posicionado em relação ao viewport, com nuances de contexto.","Um cabeçalho pode usar position:sticky; top:0.","Sticky depende de limites de rolagem e ancestrais."],
["Media queries de preferência","Respeite preferências do usuário.","prefers-reduced-motion, prefers-color-scheme e outras media features permitem adaptar a interface a preferências do sistema.","@media (prefers-reduced-motion: reduce) { ... }","Não force movimento quando o usuário solicitou redução."]
],
js:[
["Truthy e falsy","Entenda valores em contextos booleanos.","Valores como false, 0, '', null, undefined e NaN são falsy; objetos e arrays, inclusive vazios, são truthy.","if (lista) não verifica se lista possui itens.","Array vazio é truthy."],
["Operadores nullish e optional chaining","Trate ausência de valores com segurança.","?? usa valor alternativo apenas para null/undefined; ?. acessa propriedade ou chama função sem erro quando a referência é nullish.","usuario.perfil?.nome ?? 'Sem nome'","|| também substitui 0 e string vazia; ?? não."],
["Imutabilidade e cópias","Evite mutações inesperadas.","const impede reatribuição, mas objetos podem ser mutáveis. Spread cria cópia rasa; métodos como map/filter produzem novos arrays.","const novo={...original,ativo:false};","Objetos aninhados ainda podem compartilhar referências."],
["Métodos map, filter, find e reduce","Escolha método pela intenção.","map transforma; filter seleciona; find retorna primeiro correspondente; reduce acumula resultado.","itens.filter(x=>x.ativo).map(x=>x.nome)","Não use map quando não precisa do array transformado."],
["Event bubbling e delegation","Gerencie eventos em elementos dinâmicos.","Eventos podem propagar dos elementos filhos aos ancestrais. Delegação registra um listener no ancestral e identifica o alvo apropriado.","lista.addEventListener('click', e=>{ if(e.target.matches('button')) ... });","Use closest quando o clique pode ocorrer em elemento interno do botão."],
["Fetch API","Faça requisições HTTP.","fetch retorna Promise com Response. Verifique response.ok e converta o corpo conforme o formato, por exemplo response.json().","const r=await fetch('/dados'); if(!r.ok) throw new Error('Falha');","Erro HTTP como 404 não rejeita automaticamente a Promise fetch."],
["Tratamento de exceções assíncronas","Capture falhas em operações assíncronas.","try/catch pode capturar rejeições quando await é usado dentro do bloco. Promise chains também podem usar catch.","try { await carregar(); } catch(e) { mostrarErro(e); }","Não deixe rejeições sem tratamento."],
["XSS e inserção segura","Evite executar conteúdo não confiável.","Inserir texto não confiável via innerHTML pode permitir injeção de marcação/script. Prefira textContent e sanitização apropriada quando HTML for realmente necessário.","element.textContent = entradaDoUsuario;","Não confie em dados só porque vieram de um formulário local."]
]};
const descriptions={
csa:"Conteúdo alinhado ao blueprint CSA oficial de janeiro de 2026. A prova oficial tem 60 questões em 90 minutos; o corte não é público.",
html:"Trilha ampliada de HTML com semântica, formulários e acessibilidade.",
css:"Trilha ampliada de CSS com cascata, layout e responsividade.",
js:"Trilha ampliada de JavaScript com lógica, DOM e programação assíncrona."
};
Object.keys(extra).forEach(id=>{
 const course=courses.find(c=>c.id===id);
 extra[id].forEach((l,i)=>course.lessons.push([l[0],l[1],l[2],l[3],l[4]]));
 course.desc=descriptions[id]||course.desc;
});
/* Questões autorais; 10 por domínio CSA, sem reproduzir banco protegido. */
const bank=[
["Qual componente é a base de dados de registros relacionados a configurações?","CMDB",["Service Catalog","CMDB","Knowledge Base","Visual Task Board"],1,4],
["Qual domínio representa 20% do blueprint CSA?","Self Service & Automation",["Platform Overview","Instance Configuration","Self Service & Automation","Data Migration"],2,3],
["O que uma tabela filha herda de uma tabela pai?","Campos e comportamentos herdáveis",["Somente registros","Campos e comportamentos herdáveis","Somente ACLs globais","Apenas o nome"],1,4],
["Qual é o papel de um Reference field?","Referenciar registro de outra tabela",["Guardar apenas texto","Referenciar registro de outra tabela","Criar um relatório","Definir uma role"],1,4],
["Qual mecanismo protege acesso a campos?","ACL",["UI Policy","ACL","Favorite","Template"],1,4],
["O que significa coalesce na transformação?","Usar campo para localizar registro correspondente",["Apagar staging","Usar campo para localizar registro correspondente","Criar uma notificação","Gerar relatório"],1,4],
["Qual modelo orienta estrutura de dados de serviços?","CSDM",["HTML","CSDM","Flow Designer","Update Set"],1,4],
["Por que reconciliar fontes de dados de CI?","Reduzir conflitos e preservar qualidade",["Aumentar duplicidade","Reduzir conflitos e preservar qualidade","Desativar relações","Ocultar registros"],1,4],
["O que o Dictionary descreve?","Metadados de tabelas e campos",["Somente usuários","Metadados de tabelas e campos","Somente notificações","Apenas dashboards"],1,4],
["Qual princípio deve orientar concessão de acesso?","Menor privilégio",["Acesso total","Menor privilégio","Compartilhamento de senha","Permissão global"],1,4],
["O que diferencia uma lista de um formulário?","Lista mostra conjunto; formulário mostra um registro",["Lista mostra conjunto; formulário mostra um registro","Formulário mostra vários; lista um","São sinônimos","Lista é relatório"],0,2],
["Qual operador lógico exige ambas as condições?","AND",["OR","AND","NOT","LIKE"],1,2],
["Para que serve uma related list?","Exibir registros relacionados",["Exibir registros relacionados","Alterar o tema","Conceder papel","Criar plugin"],0,2],
["Qual recurso apresenta métricas e gráficos em uma tela?","Dashboard",["Update Set","Dashboard","ACL","Transform Map"],1,2],
["O que um template pode fazer?","Preencher campos com valores predefinidos",["Criar tabela","Preencher campos com valores predefinidos","Conceder admin","Instalar plugin"],1,2],
["Qual objeto organiza usuários em equipes?","Group",["Role","Group","ACL","Dictionary"],1,1],
["O que é uma tarefa atribuída a grupo?","Trabalho encaminhado a uma equipe",["Um tipo de campo","Trabalho encaminhado a uma equipe","Uma view","Uma tag"],1,2],
["Qual recurso permite visualização de tarefas em cartões e colunas?","Visual Task Board",["Visual Task Board","Import Set","ACL","Update Set"],0,2],
["O que uma notificação faz?","Comunica eventos segundo regras configuradas",["Comunica eventos segundo regras configuradas","Altera herança","Cria tabela","Executa CSS"],0,2],
["Qual é a função de filtros?","Restringir registros por condições",["Restringir registros por condições","Criar roles","Instalar plugins","Criar CIs"],0,2],
["Qual recurso armazena artigos de conhecimento?","Knowledge Management",["Knowledge Management","Update Sets","ACL","CMDB"],0,3],
["Qual elemento de catálogo coleta resposta do usuário?","Variable",["Variable","Business Rule","Role","Transform Map"],0,3],
["O que um Record Producer cria?","Registro em tabela de destino",["Registro em tabela de destino","Dashboard","Plugin","Grupo"],0,3],
["O que um Order Guide pode agrupar?","Itens de catálogo relacionados",["ACLs","Itens de catálogo relacionados","Update Sets","Business Rules"],1,3],
["Qual componente inicia um Flow?","Trigger",["Action","Trigger","Data pill","Role"],1,3],
["O que uma Action executa?","Uma operação no fluxo",["Uma operação no fluxo","Um relatório","Uma ACL","Uma view"],0,3],
["Para que servem Subflows?","Reutilizar automações",["Reutilizar automações","Criar campos","Importar CSV","Criar dashboard"],0,3],
["Qual ferramenta oferece atendimento conversacional?","Virtual Agent",["Virtual Agent","CMDB","Update Set","Dictionary"],0,3],
["O que pode controlar visibilidade e obrigatoriedade de campo na interface?","UI Policy",["ACL","UI Policy","Transform Map","Import Set"],1,3],
["Qual é o propósito de aprovação no catálogo?","Autorizar solicitação antes do atendimento quando exigido",["Autorizar solicitação antes do atendimento quando exigido","Substituir variáveis","Criar CI","Importar dados"],0,3],
["Qual recurso permite conversas automatizadas de autoatendimento?","Virtual Agent",["Virtual Agent","Update Set","CMDB","Dictionary"],0,3],
["Qual estrutura recebe dados antes de transformá-los?","Import Set Table",["Import Set Table","CMDB","Dashboard","Update Set"],0,4],
["Qual componente define mapeamento entre staging e destino?","Transform Map",["Business Rule","Transform Map","ACL","UI Policy"],1,4],
["O que uma ACL avalia?","Acesso a operações e dados",["Acesso a operações e dados","Somente cores","Ordem de módulos","Tamanho de imagem"],0,4],
["O que é um CI?","Item de configuração gerenciado na CMDB",["Item de configuração gerenciado na CMDB","Qualquer artigo","Um papel","Uma notificação"],0,4],
["Qual é o papel do CSDM?","Padronizar organização de dados de serviços",["Padronizar organização de dados de serviços","Criar HTML","Substituir ACL","Enviar e-mail"],0,4],
["O que é responsabilidade compartilhada em SaaS?","Cliente e provedor possuem responsabilidades diferentes",["Somente provedor responde por tudo","Cliente e provedor possuem responsabilidades diferentes","Somente cliente opera datacenter","Não existe responsabilidade"],1,4],
["Qual recurso ajuda a investigar avaliação de ACL?","Debug Security Rules",["Flow Designer","Debug Security Rules","Visual Task Board","Catalog Builder"],1,4],
["Qual tipo de campo aponta para registro em outra tabela?","Reference",["String","Reference","Integer","Boolean"],1,4],
["Qual risco existe em coalesce incorreto?","Atualização de registros errados ou duplicação",["Atualização de registros errados ou duplicação","Aumento de contraste","Melhora de navegação","Criação de dashboard"],0,4],
["Qual evento de Client Script ocorre ao carregar formulário?","onLoad",["before","onLoad","after","async"],1,5],
["Qual evento reage à mudança de campo?","onChange",["onLoad","onChange","onDisplay","onTransform"],1,5],
["Qual script executa no servidor em operações de registro?","Business Rule",["Client Script","Business Rule","CSS","HTML"],1,5],
["Qual momento de Business Rule executa antes da gravação?","before",["after","async","before","display"],2,5],
["Qual API consulta registros no servidor?","GlideRecord",["GlideRecord","document","localStorage","querySelector"],0,5],
["Qual opção descreve a função de uma view de formulário?","Apresentar um layout conforme o contexto",["Apresentar um layout conforme o contexto","Criar uma tabela filha","Executar uma Business Rule","Mapear dados de importação"],0,2],
["Para que serve Script Include?","Reutilizar lógica",["Reutilizar lógica","Criar tema","Gerar imagem","Criar tabela HTML"],0,5],
["Update Sets transportam principalmente o quê?","Alterações de configuração suportadas",["Todos os dados da empresa","Alterações de configuração suportadas","Somente anexos","Somente usuários"],1,5],
["O que revisar antes do commit de Update Set?","Preview e conflitos",["Apenas nome","Preview e conflitos","Somente favoritos","Apenas cores"],1,5],
["Qual recurso permite organizar tarefas em cartões e colunas?","Visual Task Board",["Transform Map","Visual Task Board","ACL","Update Set"],1,2],
["O que uma notificação configurada pode fazer?","Avisar destinatários sobre um evento",["Avisar destinatários sobre um evento","Alterar a classe de um CI","Criar uma ACL","Executar uma transformação"],0,2],
["Qual parte da plataforma oferece acesso a aplicações e módulos?","Unified Navigation",["Import Set","Unified Navigation","Transform Map","Business Rule"],1,0],
["O que representa uma instância ServiceNow?","Ambiente provisionado da plataforma",["Uma role","Ambiente provisionado da plataforma","Um campo","Uma notificação"],1,0],
["Qual é a função de um módulo de navegação?","Abrir uma página ou funcionalidade",["Criar uma tabela","Abrir uma página ou funcionalidade","Conceder acesso automaticamente","Importar dados"],1,0],
["Qual recurso permite localizar aplicações e módulos disponíveis?","Pesquisa da navegação",["Transform Map","Pesquisa da navegação","Update Set","ACL"],1,0],
["O que deve ser verificado antes de ativar um plugin?","Dependências, compatibilidade e impacto",["Apenas o nome","Dependências, compatibilidade e impacto","Somente os favoritos","Apenas o tema"],1,1],
["Qual objeto representa uma identidade de acesso?","User",["Group","Role","User","ACL"],2,1],
["Qual objeto organiza usuários em equipes?","Group",["Group","ACL","Transform Map","View"],0,1],
["Qual recurso habilita funcionalidades adicionais na instância?","Plugin",["Favorite","Plugin","Template","Dashboard"],1,1],
["Qual prática reduz riscos ao personalizar a instância?","Preferir configuração suportada e testar mudanças",["Alterar diretamente produção","Preferir configuração suportada e testar mudanças","Desativar ACLs","Ignorar upgrades"],1,1]
];
const questions=bank.map((q,i)=>({id:"extra-q"+i,question:q[0],options:q[2],correct:q[3],explanation:"Resposta: "+q[1]+". Esta é uma questão autoral de treino baseada nos conceitos do conteúdo. Consulte a documentação oficial para aprofundar.",domain:q[4]}));
function addSimUI(){
 const main=document.querySelector(".main");
 if(!document.getElementById("simulatorView")){
  const sec=document.createElement("section");sec.className="view";sec.id="simulatorView";sec.innerHTML='<button class="back-button" id="simBack">← Voltar</button><div id="simulatorContent"></div>';main.insertBefore(sec,main.querySelector("footer"));
 }
 const welcome=document.querySelector(".welcome-row > div");
 if(welcome&&!document.getElementById("homeSimButton")){const b=document.createElement("button");b.id="homeSimButton";b.className="primary-btn";b.textContent="Abrir simulados";b.style.marginTop="18px";b.onclick=()=>simMenu();welcome.appendChild(b);}
 const lib=document.querySelector(".page-intro");
 if(lib&&!document.getElementById("librarySimButton")){const b=document.createElement("button");b.id="librarySimButton";b.className="primary-btn";b.textContent="Simulados e exercícios";b.onclick=()=>simMenu();lib.appendChild(b);}
 document.getElementById("simBack").onclick=()=>show("home");
}
function show(view){document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===view+"View"));document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===view));window.scrollTo(0,0);}
function simMenu(){
 addSimUI();show("simulator");
 const el=document.getElementById("simulatorContent");
 el.innerHTML='<div class="page-intro"><div class="eyebrow">TREINO E AVALIAÇÃO</div><h1>Simulados</h1><p class="muted">Questões autorais para testar compreensão. Não são questões oficiais da prova.</p></div><div class="sim-menu-grid"><button class="sim-card" data-mode="20"><b>Treino rápido</b><span>20 questões · sem tempo</span></button><button class="sim-card" data-mode="40"><b>Treino intermediário</b><span>40 questões · sem tempo</span></button><button class="sim-card" data-mode="60"><b>Simulado CSA completo</b><span>60 questões · referência de 90 minutos</span></button></div><div class="source-note">O conteúdo é organizado pelos seis domínios e seus pesos oficiais: 7%, 10%, 20%, 20%, 30% e 13%. A seleção de questões é uma amostra autoral. A pontuação de corte oficial não é pública.</div>';
 el.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>start(+b.dataset.mode));
}
let quiz=null;
function start(n){
 const order=[4,6,12,12,18,8], pool=questions.filter(q=>q.domain>=0);
 const selected=[];
 for(let d=0;d<6;d++){const group=pool.filter(q=>q.domain===d);const need=Math.round(n*order[d]/60);selected.push(...group.slice(0,need));}
 const remaining=pool.filter(q=>!selected.some(x=>x.id===q.id)).sort(()=>Math.random()-.5);
 while(selected.length<n&&remaining.length)selected.push(remaining.shift());
 quiz={list:selected.slice(0,n),at:0,answers:{}};
 renderQ();
}
function renderQ(){
 const q=quiz.list[quiz.at],answer=quiz.answers[q.id],el=document.getElementById("simulatorContent");
 el.innerHTML='<div class="sim-head"><div><div class="eyebrow">SIMULADO CSA</div><h1>Questão '+(quiz.at+1)+' de '+quiz.list.length+'</h1><p class="muted">Respostas marcadas: '+Object.keys(quiz.answers).length+'</p></div></div><div class="sim-progress"><span style="width:'+((quiz.at+1)/quiz.list.length*100)+'%"></span></div><article class="quiz sim-question"><h2>'+safe(q.question)+'</h2>'+q.options.map((o,i)=>'<button class="quiz-option '+(answer===i?"selected":"")+'" data-answer="'+i+'">'+String.fromCharCode(65+i)+'. '+safe(o)+'</button>').join("")+'<div class="quiz-feedback">'+(answer!==undefined?safe(q.explanation):"")+'</div><div class="lesson-actions"><button class="secondary-btn" id="qPrev" '+(quiz.at===0?"disabled":"")+'>Anterior</button><button class="primary-btn" id="qNext">'+(quiz.at===quiz.list.length-1?"Finalizar":"Próxima")+'</button></div></article>';
 el.querySelectorAll("[data-answer]").forEach(b=>b.onclick=()=>{quiz.answers[q.id]=+b.dataset.answer;renderQ();});
 document.getElementById("qPrev").onclick=()=>{quiz.at--;renderQ();};
 document.getElementById("qNext").onclick=()=>{if(quiz.at<quiz.list.length-1){quiz.at++;renderQ();}else finish();};
}
function safe(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function finish(){
 const correct=quiz.list.filter(q=>quiz.answers[q.id]===q.correct).length,pct=Math.round(correct/quiz.list.length*100);
 document.getElementById("simulatorContent").innerHTML='<div class="result-panel"><div class="eyebrow">RESULTADO</div><h1>'+correct+' de '+quiz.list.length+'</h1><div class="result-pct">'+pct+'% de acertos</div><p class="muted">'+(pct>=80?"Bom resultado neste treino.":pct>=60?"Revise os assuntos que errou e repita o simulado.":"Volte às aulas, estude as explicações e tente novamente.")+'</p><h2>Revisão das respostas</h2>'+quiz.list.map((q,i)=>'<div class="review-item"><b>'+(i+1)+'. '+safe(q.question)+'</b><p>'+(quiz.answers[q.id]===q.correct?"✓ Correta":"✕ Incorreta ou não respondida")+' — '+safe(q.explanation)+'</p></div>').join("")+'<p class="source-note">Simulado de autoria própria, não oficial. O percentual não representa o cut score da ServiceNow nem garante aprovação.</p><button class="primary-btn" id="again">Novo simulado</button></div>';
 document.getElementById("again").onclick=simMenu;
}
addSimUI();
const home=document.querySelector(".welcome-row h1");if(home){home.innerHTML='Seu espaço<br><span>de estudos.</span>';}
const welcomeCopy=document.querySelector(".welcome-copy");if(welcomeCopy)welcomeCopy.textContent="ServiceNow CSA, HTML, CSS e JavaScript.";
const sectionTitle=document.querySelector(".section-heading h2");if(sectionTitle)sectionTitle.textContent="Meus cursos";
const libraryCopy=document.querySelector("#libraryView .page-intro p");if(libraryCopy)libraryCopy.textContent="Conteúdo, aulas e exercícios.";
const footer=document.querySelector("footer");if(footer)footer.textContent="Study Hub · Seus dados e seu progresso ficam neste dispositivo.";
const originalOpenModule=openModule;
openModule=function(id){originalOpenModule(id);const c=courses.find(x=>x.id===id);const target=document.getElementById("moduleContent");if(target&&c){const bar=document.createElement("div");bar.className="module-tools";bar.innerHTML='<button class="primary-btn" id="coursePractice">Exercícios do módulo</button>'+(id==="csa"?'<button class="secondary-btn" id="courseExam">Simulado CSA · 60 questões</button>':"");target.insertBefore(bar,target.querySelector(".lesson-list"));document.getElementById("coursePractice").onclick=()=>{if(id==="csa")simMenu();else openLesson(id,0);};const exam=document.getElementById("courseExam");if(exam)exam.onclick=simMenu;if(id==="csa"){const list=target.querySelector(".lesson-list");if(list){const rows=Array.from(list.querySelectorAll(".lesson-row"));const groups=[["Platform Overview and Navigation","7%",[0,1,6]],["Instance Configuration","10%",[7,8,9,10]],["Configuring Applications for Collaboration","20%",[2,3,11,12,13,14,15,16]],["Self Service & Automation","20%",[5,17,18,19]],["Database Management and Platform Security","30%",[4,20,21,22,23]],["Data Migration and Integration","13%",[24,25,26,27]]];const wrap=document.createElement("div");groups.forEach((g)=>{const section=document.createElement("section");section.className="domain-section";const head=document.createElement("div");head.className="domain-head";head.innerHTML="<div><span class=\"eyebrow\">DOMÍNIO · "+g[1]+"</span><h2>"+g[0]+"</h2></div><span class=\"domain-count\">"+g[2].length+" aulas</span>";const sub=document.createElement("div");sub.className="lesson-list";g[2].forEach(i=>{if(rows[i])sub.appendChild(rows[i]);});section.append(head,sub);wrap.appendChild(section);});list.replaceWith(wrap);}}}};
const originalRenderHome=renderHome;
renderHome=function(){originalRenderHome();const total=courses.reduce((n,c)=>n+c.lessons.length,0);const totalEl=document.getElementById("totalCount");if(totalEl)totalEl.textContent=total;};
renderHome();

quizFor=function(id,index){
 const course=courses.find(x=>x.id===id), lesson=course.lessons[index];
 const pool=course.lessons.filter((x,i)=>i!==index).map(x=>x[1]);
 const choices=[lesson[1],...pool.slice(0,3)].sort(()=>Math.random()-.5);
 return {q:"Qual definição corresponde a: "+lesson[0]+"?",a:choices,correct:choices.indexOf(lesson[1])};
};
const originalOpenLesson=openLesson;
openLesson=function(id,index){
 originalOpenLesson(id,index);
 const sources={
  csa:[["Blueprint oficial CSA (jan/2026)","https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0011554"],["Documentação de produto ServiceNow","https://docs.servicenow.com/"]],
  html:[["MDN — HTML","https://developer.mozilla.org/en-US/docs/Web/HTML"]],
  css:[["MDN — CSS","https://developer.mozilla.org/en-US/docs/Web/CSS"]],
  js:[["MDN — JavaScript","https://developer.mozilla.org/en-US/docs/Web/JavaScript"]]
 };
 const content=document.querySelector("#lessonContent .lesson-content");
 if(content&&!content.querySelector(".source-note")){
  const box=document.createElement("div");box.className="source-note";
  box.textContent="Fontes para aprofundamento: ";
  sources[id].forEach((s,i)=>{if(i)box.appendChild(document.createTextNode(" · "));const a=document.createElement("a");a.href=s[1];a.target="_blank";a.rel="noopener noreferrer";a.textContent=s[0];box.appendChild(a);});
  content.appendChild(box);
 }
};
const oldNav=document.querySelectorAll(".nav-item");oldNav.forEach(b=>{if(b.dataset.view==="library")b.addEventListener("click",()=>setTimeout(addSimUI,0));});
})();
