function getCharacters(done){
  const results = fetch("https://www.dnd5eapi.co/api/2014/classes");

  results
  .then(response => response.json())
  .then(data => {
    done(data)
  })
}

getCharacters(data => {
  // Crear un solo <select> al inicio
  const select = document.createElement("select");
  select.id = "claseSelect";

  // Opción por defecto
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Seleccione una clase";
  select.appendChild(defaultOption);

  // Agregar <option> por cada personaje
  data.results.forEach(personaje => {
    const option = document.createElement("option");
    option.value = personaje.index;
    option.textContent = personaje.name;
    select.appendChild(option);
  });

  // Agregar el select completo al <main>
  const main = document.querySelector("main");
  main.appendChild(select);
});


function getfeatures(done){
  const results = fetch("https://www.dnd5eapi.co/api/2014/features");

  results
  .then(response => response.json())
  .then(data => {
    done(data)
  })
}

getfeatures(data => {
  // Crear un solo <select> al inicio
  const select = document.createElement("select");
  select.id = "claseSelect";

  // Opción por defecto
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Seleccione una caracteristica";
  select.appendChild(defaultOption);

  // Agregar <option> por cada personaje
  data.results.forEach(personaje => {
    const option = document.createElement("option");
    option.value = personaje.index;
    option.textContent = personaje.name;
    select.appendChild(option);
  });

  // Agregar el select completo al <main>
  const main = document.querySelector("main");
  main.appendChild(select);
});


function getmonsters(done){
  const results = fetch("https://www.dnd5eapi.co/api/2014/monsters");

  results
  .then(response => response.json())
  .then(data => {
    done(data)
  })
}

getmonsters(data => {
  // Crear un solo <select> al inicio
  const select = document.createElement("select");
  select.id = "claseSelect";

  // Opción por defecto
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Seleccione una monstruo";
  select.appendChild(defaultOption);

  // Agregar <option> por cada personaje
  data.results.forEach(personaje => {
    const option = document.createElement("option");
    option.value = personaje.index;
    option.textContent = personaje.name;
    select.appendChild(option);
  });

  // Agregar el select completo al <main>
  const main = document.querySelector("main");
  main.appendChild(select);
});


function getspell(done){
  const results = fetch("https://www.dnd5eapi.co/api/2014/spells");

  results
  .then(response => response.json())
  .then(data => {
    done(data)
  })
}

getspell(data => {
  // Crear un solo <select> al inicio
  const select = document.createElement("select");
  select.id = "claseSelect";

  // Opción por defecto
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Seleccione un hechizo";
  select.appendChild(defaultOption);

  // Agregar <option> por cada personaje
  data.results.forEach(personaje => {
    const option = document.createElement("option");
    option.value = personaje.index;
    option.textContent = personaje.name;
    select.appendChild(option);
  });

  // Agregar el select completo al <main>
  const main = document.querySelector("main");
  main.appendChild(select);
});



