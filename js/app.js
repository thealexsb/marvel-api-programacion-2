const marvel = {
  render: () => {
    const urlAPI = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d64bc8731bec0d3fe9c47a1dc441461b&hash=7a1276a200a25d38374fbb078498e5e3';
    const container = document.querySelector('#marvel-row');
    let contentHTML = '';

    fetch(urlAPI)
      .then(res => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML += `
            <div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${hero.name}</h3>
            </div>`;
        }
        container.innerHTML = contentHTML;
      })
  }
};
marvel.render();