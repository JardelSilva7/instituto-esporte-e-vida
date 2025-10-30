export const homeTemplate = `
  <section class="home">
    <h2>Bem-vindo ao Instituto Esporte é Vida</h2>
    <p>Promovemos a inclusão social por meio do esporte e da solidariedade.</p>
    <img src="Imagens/Esporte nas escolas.jpeg" alt="Esporte nas escolas">
  </section>
`;

export const projetosArray = [
  {
    titulo: "Projetos Comunitários",
    descricao: "Iniciativas esportivas que fortalecem a comunidade local.",
    imagem: "Imagens/Projetos Comunitarios.jpg"
  },
  {
    titulo: "Campanhas de Doação",
    descricao: "Recolhemos materiais esportivos e roupas para quem precisa.",
    imagem: "Imagens/Doação 1.jpg"
  },
  {
    titulo: "Esporte nas Escolas",
    descricao: "Programas esportivos para crianças em idade escolar.",
    imagem: "Imagens/Esporte nas escolas.jpeg"
  }
];

export const projetosTemplate = `
  <section class="projetos">
    <h2>Nossos Projetos</h2>
    <div class="lista-projetos">
      ${projetosArray.map(proj => `
        <article class="card-projeto">
          <img src="${proj.imagem}" alt="${proj.titulo}">
          <h3>${proj.titulo}</h3>
          <p>${proj.descricao}</p>
        </article>
      `).join('')}
    </div>
  </section>
`;


export const cadastroTemplate = `
  <section class="cadastro">
    <h2>Cadastro</h2>
    <form id="formCadastro">
      
      <label for="nome">Nome completo:</label>
      <input type="text" id="nome" name="nome" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="telefone">Telefone:</label>
      <input type="tel" id="telefone" name="telefone" required>

      <label for="idade">Idade:</label>
      <input type="number" id="idade" name="idade" min="1" required>

      <label for="endereco">Endereço:</label>
      <input type="text" id="endereco" name="endereco" required>

      <label for="genero">Gênero:</label>
      <select id="genero" name="genero" required>
        <option value="">Selecione</option>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
        <option value="outro">Outro</option>
        <option value="prefiro_nao_informar">Prefiro não informar</option>
      </select>

      <label for="tipoCadastro">Tipo de cadastro:</label>
      <select id="tipoCadastro" name="tipoCadastro" required>
        <option value="">Selecione</option>
        <option value="voluntario">Voluntário</option>
        <option value="doador">Doador</option>
        <option value="investidor">Investidor</option>
        <option value="beneficiario">Beneficiário</option>
      </select>

      <button type="submit">Enviar</button>
    </form>

    <div id="mensagemErro" style="color:red; margin-top:10px;"></div>
    <div id="mensagemSucesso" style="color:green; margin-top:10px;"></div>
  </section>

`;


