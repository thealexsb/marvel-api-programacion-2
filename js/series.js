const series = {};

series.render = () => {
    const urlAPI = 'https://gateway.marvel.com/v1/public/series?ts=1&apikey=d64bc8731bec0d3fe9c47a1dc441461b&hash=7a1276a200a25d38374fbb078498e5e3';
    const container = document.querySelector('#series');
    let contentHTML = '';

    fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            for (const serie of json.data.results) {
                contentHTML += `
                    <div class="col-md-4">
                        <a href="${serie.urls[0].url}" target="_blank">
                            <img src="${serie.thumbnail.path}.${serie.thumbnail.extension}" alt="${serie.title}" class="img-thumbnail">
                        </a>
                        <h3 class="title">${serie.title}</h3>
                    </div>
                `
            }
            container.innerHTML = contentHTML;
        })
}

series.render();