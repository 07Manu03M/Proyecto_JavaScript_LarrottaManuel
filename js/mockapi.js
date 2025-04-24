document.getElementById('userForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // evita recargar la página
  
    const username = document.getElementById("username").value;
    const razas = document.getElementById("RaceSelect").value;
    const clases = document.getElementById("ClasesSelect").value;
    const genero = document.getElementById("genderselect").value;
    const armadura = document.getElementById("armourSelect").value;
    const arma = document.getElementById("weaponSelect").value;
    const fuerza = document.getElementById("fuerza").value;
    const destreza = document.getElementById("destreza").value;
    const inteligencia = document.getElementById("inteligencia").value;
    const habilidad = document.getElementById("habilidad").value;
    const sabiduria = document.getElementById("sabiduria").value;
    const hechizos = document.getElementById("spellSelect").value;
    const accesorios = document.getElementById("accesorSelect").value;

  
    const data = {
      name: username,
      race: razas,
      classes: clases,
      gender: genero,
      armor: armadura,
      weapons: arma,
      strong: fuerza,
      skill: destreza,
      smart: inteligencia,
      hability: habilidad,
      wisdom: sabiduria,
      spells: hechizos,
      accesories: accesorios
    };
  
    try {
      const response = await fetch('https://68087449942707d722de4275.mockapi.io/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
        alert('Usuario guardado:', result);
    } catch (error) {
        alert('Error al guardar usuario:', error);
    }
  });
  