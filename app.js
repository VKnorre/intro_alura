function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos pelo seu ID.
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo_pesquisa").value.toUpperCase().trim();
    
    if (!campoPesquisa) {
        section.innerHTML = "<p>Sem pesquisa para realizar</p>";
        return;
    }
    let nome = "";
    let desc = "";
    let tags = "";

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    
    // Itera sobre cada elemento do array 'dados' (não mostrado no código).
    // Para cada elemento, cria um novo elemento HTML 'div' com as informações do dado.
    for (let dado of dados) {
        nome = dado.nome.toUpperCase();
        desc = dado.descricao.toUpperCase();
        tags = dado.tags.toUpperCase();

        if (nome.includes(campoPesquisa) || desc.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `<div class="item-resultado"><h2><a href="#" target="_blank" rel="noopener noreferrer">${dado.nome}</a></h2><p class="descricao-meta">${dado.descricao}</p><a href="${dado.link}">Exemplo</a></div>`;
        }
    }

    if (!resultados) {
        resultados = "<p>Informação não encontrada</p>";
    }

    // Atribui o conteúdo HTML gerado à seção de resultados.
    section.innerHTML = resultados;
}