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
                    <h2>${personaje.name}</h2>
                    <span>${personaje.gender}</span>
                    <p>${personaje.race}</p>
                </div>
                <button id="paravermas" class="botonsito">Ver mas</button>
            </div>
        `);

        const section = document.getElementById("lahoja"); // Sin el '#', solo el ID
        section.append(article);
    });
});


let paraver = document.getElementById("#paravermas")


paraver.addEventListener("click",()=>{
    alert("te amo breyner")
})
