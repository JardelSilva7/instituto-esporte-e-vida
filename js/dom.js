import { homeTemplate, projetosTemplate, cadastroTemplate } from './templates.js';

export function carregarPagina(pagina) {
  const conteudo = document.getElementById('conteudo');

  conteudo.innerHTML = '';

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



