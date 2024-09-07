function buscar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value 
    console.log(campoPesquisa);

    //Se campoPesquisa for uma string sem nada
    if(!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado!</p>"
        return
    }    
    campoPesquisa=campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) 
            || tags.includes(campoPesquisa)) 
        {
        // Constrói uma nova div com as informações do dado atual
 resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">INSTAGRAM</a>
            </div>
        `;
        }
        // então faça...
        console.log(dado.titulo.includes(campoPesquisa));
        
        // Constrói uma nova div com as informações do dado atual
       
    }
    if (!resultados) {
        resultados = "<p>Desculpe, não temos esse sabor :( palavras chaves: Menta, creme ou musse</p>"
}

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}