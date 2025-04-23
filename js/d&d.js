const method = "GET";
const urlb = "https://www.dnd5eapi.co/api/2014/";
const headers = new Headers();
headers.set("Content-Type", "application/json");
var settings = {
  method: method,
  headers: headers,
};

async function peticionPersonas() {
    const respuesta = await fetch(urlb + "classes", settings);
    const datos = await respuesta.json();
    console.log(datos);
  }

peticionPersonas();



