import { carregarPagina } from './dom.js';
import { inicializarEventos } from './events.js';

document.addEventListener('DOMContentLoaded', () => {
  carregarPagina('home');
  inicializarEventos();
});
