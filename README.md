# 🛡️ Dungeon and dragons - Plataforma de Generación de Personajes de Fantasía Épica

Este proyecto fue desarrollado como parte de un reto FrontEnd, donde se debía construir una plataforma de generación de personajes inspirada en el universo de *Dungeons & Dragons* (D&D). La aplicación permite a los usuarios crear personajes personalizados filtrando diferentes atributos como raza, clase, género, armas, armadura, habilidades y más.

---

## 🚀 Funcionalidades

### 🔹 Página de Inicio (Landing Page)
- Introducción visual al proyecto con información clara de lo que ofrece la plataforma.
- Estilo visual atractivo y adaptado para algunos dispositivos...

### 🔹 Filtro de Personajes
- Permite crear personajes desde cero seleccionando:
  - Nombre personalizado.
  - Raza (obtenida desde API de D&D 5e).
  - Clase (API D&D).
  - Género (Masculino, Femenino, Otro).
  - Armas y Armaduras (base ficticia o mockAPI).
  - Estadísticas (fuerza, destreza, inteligencia, sabiduría).
  - Habilidades especiales (magias o poderes).
  - Accesorios visuales.

### 🔹 Vista de Lista
- Muestra todos los personajes generados por el usuario.
- Posibilidad de guardar personajes favoritos para revisarlos después.

---

## 🧱 Tecnologías Usadas

- HTML5, CSS3 y JavaScript nativo (sin frameworks).
- Maquetación inicial proporcionada por equipo de diseño.
- API pública: [D&D 5e API](https://www.dnd5eapi.co)
- Base de datos ficticia con [MockAPI](https://mockapi.io)

---

📁 Proyecto_JavaScript_LarrottaManuel
├── 📂 css/             → hojas de estilo CSS
├── 📂 Js/              → Codigo principal de javascript
├── 📂 storage/         → Imágenes e íconos
├── 📂 views/           → Los demas index
├── 📄 index.html       → Página principal (landing)
└── 📄 README.md        → Documentación general del proyecto

## 📱 Diseño Responsivo

- Uso de media queries y estructuras flexibles.
- Adaptado para móviles, tablets y escritorios (solo pagina banner y home).
- Se respetaron principios de UI/UX como jerarquía visual, contraste, accesibilidad y legibilidad.

---

## 🔧 Cómo ejecutar el proyecto

1. Clona este repositorio:
   ```bash
   git clone https://github.com/07Manu03M/Proyecto_JavaScript_LarrottaManuel.git

2. Abre el archivo index.html en tu navegador (recomendado usar Live Server en VSCode).

3. La app se conecta automáticamente con la API de D&D para traer razas, clases y habilidades.

4. Puedes guardar personajes personalizados que se almacenan en Mockapi}


## 🧠 Lecciones Aprendidas

Manipulación eficiente del DOM.

Consumo de APIs públicas con fetch.

Mejora de experiencia de usuario (UX) con feedback visual y diseño intuitivo.

## 👨‍💻 Autor

Manuel Larrotta Meneses
Proyecto entregado para campuslands.