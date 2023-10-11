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

//elementos del html
const selectPizza = document.getElementById('searchNumber');
const searchPizza = document.getElementById('searchBtn');
const renderContainer = document.getElementById('containerRender');


//validacion de formulario
const error = (pizzaValid) =>{
  isValid = true;

  if(!pizzaValid.length){
    renderContainer.innerHTML = `<h2>No seleccionaste ninguna pizza</h2>`
    return;
    }else if (pizzaValid > pizzas.length){
    renderContainer.innerHTML = `<h2>La pizza que buscas, no se encuentra en la lista</h2>`
    return
    };

    return isValid;
  };


//guardo en local storage
  const saveLocalstorage = (save) => {
    localStorage.setItem('savePizza', JSON.stringify(save))
  };


//render de pizza
  const renderCard = (selectPizza) => {
    const { nombre, ingredientes, precio, imagen } = selectPizza

    return renderContainer.innerHTML = `
    <div class="card">
      <img src='${imagen}' alt='${nombre}'>
      <h2>${nombre}</h2>
      <p>Ingredientes: ${ingredientes.join('-')}</p>
      <span>Precio: $${precio}</span>
    </div>
    `
  };

  const selection = (pizzaArr,select) =>{
    const pizzaSelection = pizzaArr.filter((pizza) => pizza.id == select);
    return pizzaSelection[0];
  }

  const pizza = () =>{
    const pizzaValue = selectPizza.value;
    renderCard.innerHTML = '';

    if(error(pizzaValue)){
      error.innerHTML = '';
      saveLocalstorage(pizzaValue);
      
      const filterPizza = selection(pizzas,pizzaValue);
      renderCard(filterPizza);
    };
  };

  const savePizza = () =>{
    const pizzaDefault = JSON.parse(localStorage.getItem('savePizza'));
    if(pizzaDefault) {
      const filterPizza = selection (pizzas, pizzaDefault);
      renderCard(filterPizza);
    }
  }


  const init = () =>{
    selectPizza.addEventListener('submit', (e) => e.preventDefault);
    document.addEventListener('DOMContentLoaded',savePizza);
    searchPizza.addEventListener('click',pizza)
  }

  init()