
const content = document.getElementById('content');
const loading = document.getElementById('loading');
const message = document.getElementById('message');

fetch("https://www.swapi.tech/api/people/")
    .then(res => res.json())
    .then(data => {
        loading.style.display = 'none';

        const people = data.results;

        if (people.length === 0) {
            message.textContent = "No characters found!";
            return;
        }

        people.forEach(person => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <h2>${person.name}</h2>
                <p>UID: ${person.uid}</p>
                <a href="${person.url}" target="_blank">View Details</a>
            `;

            content.appendChild(card);
        });
    })
    .catch(err => {
        loading.style.display = 'none';
        message.textContent = "Failed to load data!";
        console.error(err);
    });