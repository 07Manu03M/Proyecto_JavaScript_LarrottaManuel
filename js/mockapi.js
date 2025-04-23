document.getElementById('userForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // evita recargar la página
  
    const username = document.getElementById('username').value;
    const clases = document.getElementById('claseSelect').value;
    const monster = document.getElementById('claseSelect').value;
  
    const data = {
      name: username,
      clase: clases,
      monsters: monster
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
      console.log('Usuario guardado:', result);
    } catch (error) {
      console.error('Error al guardar usuario:', error);
    }
  });
  