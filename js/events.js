import { carregarPagina } from './dom.js';
import { validarFormulario } from './validation.js';

export function inicializarEventos() {
  document.querySelectorAll('nav a[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pagina = link.getAttribute('data-page');

      // Carrega a página clicada, mesmo que seja "home"
      // Remove a classe "ativo" de todos os links
     document.querySelectorAll('nav a[data-page]').forEach(l => l.classList.remove('ativo'));

     link.classList.add('ativo');

      carregarPagina(pagina);

      // Adiciona listener do formulário só na página de cadastro
      if (pagina === 'cadastro') {
        const form = document.getElementById('formCadastro');
        if (form && !form.dataset.listener) {
          form.addEventListener('submit', (ev) => {
            ev.preventDefault();
            validarFormulario(form);
          });
          form.dataset.listener = "true"; // marca que o listener já foi adicionado
        }
      }
    });
  });
}




