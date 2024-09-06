function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let secao = document.getElementById("resultados-pesquisa");
    console.log(secao); // Usado para depuração, verifica se a seção foi encontrada
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultado = "";
  
    // Itera sobre cada livro no array `livrosAsimov`
    for (let livro of livrosAsimov) {
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
  
    // Atribui o HTML gerado para a seção, substituindo o conteúdo anterior
    secao.innerHTML = resultado;
  }