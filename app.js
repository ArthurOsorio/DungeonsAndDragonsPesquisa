function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado, Você precisa digitar algo.</p>";
        return;
      } else if (/^\d+$/.test(campoPesquisa)) {
        section.innerHTML = "<p>Você digitou apenas números.</p>";
        return
      } else if (campoPesquisa.match(/[^a-zA-Z0-9 ]/g)) {
        section.innerHTML = "<p>Por favor, digite apenas letras, números e espaços.</p>";
        return
      }
      campoPesquisa=campoPesquisa.toLowerCase()
    let resultados = ""
    let titulo =""
    let descricao=""
    for(let dado of dados){
        titulo=dado.titulo.toLowerCase()
        descricao=dado.descricao.toLowerCase()
        if(titulo.includes(campoPesquisa)||descricao.includes(campoPesquisa)){
            resultados +=`
        <div class="item-resultado"> 
            <h2>
                <a href=${dado.link} target="_blank">${dado.titulo}</a>
            </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
    `
        }
        
    }
    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
    section.innerHTML=resultados
}
