function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
  let secao = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("input__pesquisa").value;

  let pesquisa = campoPesquisa.toLowerCase();

  if ((!pesquisa) || (pesquisa == " ") || (pesquisa == "  ")) {
    secao.innerHTML = `<p style="color: #dddddd;">Campo pesquisa vazio. Nada encontrado.</p>`;
    return
  }
  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultado = "";
  let tituloLivro = "";
  let sinopseLivro = "";
  // Itera sobre cada livro no array `livrosAsimov`
  for (let livro of livrosAsimov) {
    tituloLivro = livro.titulo.toLowerCase();
    sinopseLivro = livro.sinopse.toLowerCase();

    if ((tituloLivro.includes(pesquisa)) || (sinopseLivro.includes(pesquisa))) {
      // Constrói o HTML para cada livro, formatando as informações
      resultado += `
        <div class="item-resultado">
          <h2><a href="#" target="_blank">${livro.titulo}</a></h2>
          <p class="descricao-meta">${livro.sinopse}</p>
          <p class="descricao-meta">Ano de lançamento: ${livro.anoDeLancamento}</p>
          <a href="${livro.linkAmazon}" target="_blank">Saiba mais</a>
        </div>
      `;
    }
  }

  if(!resultado){
    resultado = `<p style="color: #dddddd;">Nada encontrado.</p>`
  }

  // Atribui o HTML gerado para a seção, substituindo o conteúdo anterior
  secao.innerHTML = resultado;
}