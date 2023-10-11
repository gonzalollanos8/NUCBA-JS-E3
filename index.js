const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];
//html
let searchNumber = document.getElementById('searchNumber');
let searchBtn = document.getElementById('searchBtn');
let containerRender = document.getElementById('containerRender');

//funciones 

//1 template
const templateCard = ({id,nombre,precio,ingredientes,imagen}) =>{
  return `<img src='${imagen}' alt='${nombre}'/>
          <h2>${nombre}</h2>
          <p>${ingredientes}</p>
          <span>${precio}</span>
          <p class='number-id'>${id}</p>
          `
}
//2 render
const renderCard = () => {
  containerRender.innerHTML = pizzas.map((pizza)=> templateCard(pizza)).join('');
};

//render error
const renderError = () => {containerRender.innerHTML = '<h2>No encontramos ninguna pizza con ese ID</h2>'};

//3 validacion de render

const validId = () =>{

  if(searchNumber == pizzas.id){
    renderCard();
  }else{
    renderError()
  }
}





//funcion inicial
function init(){
  // let mostrarPizzas = () => console.log(pizzas);
  // mostrarPizzas();
  validId()
  console.log(searchNumber)
  // renderCard()
}

init()