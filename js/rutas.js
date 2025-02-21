const path = {};

path.render = () => {
    const urlPath = 'https://gateway.marvel.com/docs/public';
    const container = document.querySelector('#path');
    let contentHTML = '';


    fetch(urlPath)
    .then(res => res.json())
    .then(json => {
        for(const api of json.apis){
            contentHTML += `
                <div class="ruta">
                    <h2> Metodo: ${api.operations[0].httpMethod}</h2>
                    <h3>https://gateway.marvel.com${api.path}</h3>
                    <p>Descripcion: ${api.description}</p>
                </div>

                `
            container.innerHTML = contentHTML;
        }
    })

}

path.render();