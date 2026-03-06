const nameEl = document.getElementById('name');
const detailsEl = document.getElementById('details');

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (!id) {
    nameEl.textContent = "No character ID provided!";
} else {
    fetch(`https://www.swapi.tech/api/people/${id}`)
        .then(res => res.json())
        .then(data => {
    const person = data.result.properties;

    nameEl.textContent = person.name;

            detailsEl.innerHTML = `
                
                <p><strong>Gender:</strong> ${person.gender}</p>                                
                <p><strong>Skin Color:</strong> ${person.skin_color}</p>
                <p><strong>Hair Color:</strong> ${person.hair_color}</p>
                <p><strong>Height:</strong> ${person.height}</p>
                <p><strong>Eye Color:</strong> ${person.eye_color}</p>
                <p><strong>Mass:</strong> ${person.mass}</p>
                <p><strong>Birth Year:</strong> ${person.birth_year}</p>    
                <h3>Films:</h3>
                <div id="film-container"></div>
            `;
const filmContainer = document.getElementById("film-container");

Promise.all(
    person.films.map(url =>
        fetch(url).then(res => res.json())
    )
)
.then(filmResults => {
    filmResults.forEach(filmData => {
        const film = filmData.result.properties;

        const filmItem = document.createElement("div");
        filmItem.className = "film-item";

        filmItem.innerHTML = `
            <p><strong>${film.title}</strong></p>
            <p>Episode ${film.episode_id}</p>
            <p>Director: ${film.director}</p>
            <p>Released: ${film.release_date}</p>
        `;

        filmContainer.appendChild(filmItem);
    });
})
.catch(err => console.error("Film fetch error:", err));


})
}