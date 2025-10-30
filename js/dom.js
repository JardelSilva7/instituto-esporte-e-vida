import { homeTemplate, projetosTemplate, cadastroTemplate } from './templates.js';

export function carregarPagina(pagina) {
  const conteudo = document.getElementById('conteudo');

  // Limpa o conteúdo antigo
  conteudo.innerHTML = '';

  // Insere o conteúdo da página desejada
  switch(pagina) {
    case 'home':
      conteudo.innerHTML = homeTemplate;
      break;

    case 'cadastro':
      conteudo.innerHTML = cadastroTemplate;
      break;

    case 'projetos':
      conteudo.innerHTML = projetosTemplate;
      break;

    default:
      conteudo.innerHTML = `<p>Página não encontrada.</p>`;
  }
}



