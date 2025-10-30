export function validarFormulario(form) {
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = document.getElementById('mensagemErro');

  if(!nome || !email) {
    mensagem.textContent = "Por favor, preencha todos os campos!";
    mensagem.style.color = "red";
    return false;
  }

  if(!email.includes("@")) {
    mensagem.textContent = "Email inválido!";
    mensagem.style.color = "red";
    return false;
  }

  mensagem.textContent = "Cadastro enviado com sucesso!";
  mensagem.style.color = "green";

  return true;
}
