import { carregarPagina } from './dom.js';
import { validarFormulario } from './validation.js';

export function inicializarEventos() {
  document.querySelectorAll('nav a[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pagina = link.getAttribute('data-page');

     document.querySelectorAll('nav a[data-page]').forEach(l => l.classList.remove('ativo'));

     link.classList.add('ativo');

      carregarPagina(pagina);

      if (pagina === 'cadastro') {
        const form = document.getElementById('formCadastro');
        if (form && !form.dataset.listener) {
          form.addEventListener('submit', (ev) => {
            ev.preventDefault();
            validarFormulario(form);
          });
          form.dataset.listener = "true"; 
        }
      }
    });
  });
}




