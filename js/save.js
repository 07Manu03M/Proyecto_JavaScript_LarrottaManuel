function getcharacters(done) {
    const results = fetch("https://68087449942707d722de4275.mockapi.io/api/v1/users");

    results.then(response => response.json())
        .then(data => {
            done(data);
        });
}

getcharacters(data => {
    data.forEach(personaje => { // No 'data.results' si ya es un array
        const article = document.createRange().createContextualFragment(`
            <div class="caja_personaje">
                <div class="peque_informacion">
                    <h2>✨${personaje.name}✨</h2>
                    <br>
                    <span>Race: ${personaje.race}</span>
                    <span>Classes: ${personaje.classes}</span>
                    <span>Gender: ${personaje.gender}</span>
                    <span>Armour: ${personaje.armour}</span>
                    <span>Weapons: ${personaje.weapons}</span>
                    <span>Fuerza: (${personaje.strong}) Destress: (${personaje.destress}) <br> Smart: (${personaje.smart}) Sabidury:(${personaje.sabidury})</span>
                    <span>Spells: ${personaje.spells}</span>
                    <span>Accesories: ${personaje.accesories}</span>
                </div>
            </div>
        `);

        const section = document.getElementById("lahoja"); // Sin el '#', solo el ID
        section.append(article);
    });
});


