//API gratuita sin key de perritos
const ApiPerritos = "https://dog.ceo/api/breeds/image/random";


// Datos para las tarjetitas
const cardInfoPerritos = [
  { nombre: "Toby", desc: "Juguetón y cariñoso" },
  { nombre: "Luna", desc: "Dulce y tranquila" },
  { nombre: "Max", desc: "Leal y guardián" },
  { nombre: "Alma", desc: "Dócil y obediente" }
];

const container = document.getElementById("cards");
for (const perrito of cardInfoPerritos) {
  fetch(ApiPerritos)
    .then(response => response.json())
    .then(data => {
      // Generar HTML con botón y card
      container.innerHTML += `
        <div class="card">
          <img src="${data.message}" alt="${perrito.nombre}">
          <h4>${perrito.nombre}</h4>
          <p>${perrito.desc}</p>
          <button class="btnAdoptar">¡Quiero adoptarlo!</button>
        </div>
      `;
      /*-----------------FAIL---------------------
      card.addEventListener("mouseenter", () => {
        card.style.backgroundColor = "###5f33d8";
      });
      card.addEventListener("mouseleave", () => {
        card.style.backgroundColor = "#c0b233";
      });
    ----------------------------------------- */
    });
}
//Falta mejorar el alert usando sweet...
const formulario = document.getElementById("formularioContacto");
formulario.addEventListener("submit", (event) => {
  event.preventDefault(); 
  alert("Gracias por sumarte 🐶. En breve nos pondremos en contanto");
});