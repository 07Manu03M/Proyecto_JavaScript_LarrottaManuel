function getraces(done){
  const results = fetch("https://www.dnd5eapi.co/api/2014/races");

  results
  .then(response => response.json())
  .then(data => {
    done(data)
  })
}

getraces(data => {
  // Crear un solo <select> al inicio
  const select = document.createElement("select");
  select.id = "RaceSelect";

  // Opción por defecto
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Ej. Human";
  select.appendChild(defaultOption);

  // Agregar <option> por cada personaje
  data.results.forEach(personaje => {
    const option = document.createElement("option");
    option.value = personaje.index;
    option.textContent = personaje.name;
    select.appendChild(option);
  });

  // Agregar el select completo al <main>
  const container = document.querySelector(".razas_div");
  container.appendChild(select);
});

// CLASES
function getClasses(done){
  const results = fetch("https://www.dnd5eapi.co/api/2014/classes");

  results
  .then(response => response.json())
  .then(data => {
    done(data)
  })
}

getClasses(data => {
  // Crear un solo <select> al inicio
  const select = document.createElement("select");
  select.id = "ClasesSelect";

  // Opción por defecto
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Ej. Barbarian";
  select.appendChild(defaultOption);

  // Agregar <option> por cada personaje
  data.results.forEach(personaje => {
    const option = document.createElement("option");
    option.value = personaje.index;
    option.textContent = personaje.name;
    select.appendChild(option);
  });

  // Agregar el select completo al <main>
  const container = document.querySelector(".clases_div");
  container.appendChild(select);
});

// GENERO

const clases = ["Hombre", "Mujer", "Otro"];
const select = document.getElementById("genderselect");

// Crear opción por defecto tipo placeholder
const defaultOption = document.createElement("option");
defaultOption.textContent = "Ej. Hombre";
select.appendChild(defaultOption);

// Agregar tus opciones manuales
clases.forEach(clase => {
  const option = document.createElement("option");
  option.value = clase.toLowerCase(); // o el valor que quieras
  option.textContent = clase;
  select.appendChild(option);
});

// armaduras

function getarmours(done) {
  fetch("https://67d2f8228bca322cc268a8cc.mockapi.io/api/v1/Armour")
    .then(response => response.json())
    .then(data => {
      done(data);
    })
    .catch(error => console.error("Error al obtener armaduras:", error));
}

getarmours(data => {
  // Crear un solo <select> al inicio
  const select = document.createElement("select");
  select.id = "armourSelect";

  // Opción por defecto
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Ej. Basic armour";
  select.appendChild(defaultOption);

  // Agregar <option> por cada armadura
  data.forEach(armour => {
    const option = document.createElement("option");
    option.value = armour.name;  // Usar el ID como valor
    option.textContent = armour.name;  // El nombre de la armadura
    select.appendChild(option);
  });

  // Agregar el select completo al <main>
  const container = document.querySelector(".armour_div");
  container.appendChild(select);
});

// ARMAS

function getweapons(done) {
  fetch("https://67d2f8228bca322cc268a8cc.mockapi.io/api/v1/weapons")
    .then(response => response.json())
    .then(data => {
      done(data);
    })
    .catch(error => console.error("Error al obtener armaduras:", error));
}

getweapons(data => {
  // Crear un solo <select> al inicio
  const select = document.createElement("select");
  select.id = "weaponSelect";

  // Opción por defecto
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Ej. Longsword";
  select.appendChild(defaultOption);

  // Agregar <option> por cada armadura
  data.forEach(weapons => {
    const option = document.createElement("option");
    option.value = weapons.name;  // Usar el ID como valor
    option.textContent = weapons.name;  // El nombre de la armadura
    select.appendChild(option);
  });

  // Agregar el select completo al <main>
  const container = document.querySelector(".weapon_div");
  container.appendChild(select);
});

// ECHIZOS

function getspells(done){
  const results = fetch("https://www.dnd5eapi.co/api/2014/spells");

  results
  .then(response => response.json())
  .then(data => {
    done(data)
  })
}

getspells(data => {
  // Crear un solo <select> al inicio
  const select = document.createElement("select");
  select.id = "spellSelect";

  // Opción por defecto
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Ej. Arcana eye";
  select.appendChild(defaultOption);

  // Agregar <option> por cada personaje
  data.results.forEach(personaje => {
    const option = document.createElement("option");
    option.value = personaje.index;
    option.textContent = personaje.name;
    select.appendChild(option);
  });

  // Agregar el select completo al <main>
  const container = document.querySelector(".spell_div");
  container.appendChild(select);
});

// ACCESORIOS


function getacce(done) {
  fetch("https://68087449942707d722de4275.mockapi.io/api/v1/accesories")
    .then(response => response.json())
    .then(data => {
      done(data);
    })
    .catch(error => console.error("Error al obtener armaduras:", error));
}

getacce(data => {
  // Crear un solo <select> al inicio
  const select = document.createElement("select");
  select.id = "accesorSelect";

  // Opción por defecto
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Ej. Longsword";
  select.appendChild(defaultOption);

  // Agregar <option> por cada armadura
  data.forEach(weapons => {
    const option = document.createElement("option");
    option.value = weapons.name;  // Usar el ID como valor
    option.textContent = weapons.name;  // El nombre de la armadura
    select.appendChild(option);
  });

  // Agregar el select completo al <main>
  const container = document.querySelector(".accesor_div");
  container.appendChild(select);
});





