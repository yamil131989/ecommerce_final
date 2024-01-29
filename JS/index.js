const productosVenta = document.getElementById("productosVenta")
const verCompra = document.getElementById("verCompra")
const listasComprar = document.getElementById("listasComprar")


let llenar_carrito = JSON.parse(localStorage.getItem('carrito'))|| [];

//----- prudctos a la venta

productos.forEach((producto)=>{
    let tarjetas = document.createElement("div")
    tarjetas.className = "tarjeta"
    tarjetas.innerHTML = `
    <img class="imagenProducto" src="${producto.imagen}">
    <h3 class="nombreProducto">${producto.nombre}</h3>
    <p class="precioProducto">$ ${producto.precio}</p>
    <button class="idProducto" id= "${producto.id}">Agregar</button>`;


    productosVenta.append(tarjetas);

    let btnComprar = document.createElement("button");
    btnComprar.innerText = "Comprar";
    btnComprar.className = "btnComprar"

    tarjetas.append(btnComprar);

    btnComprar.addEventListener("click", ()=>{
        Toastify({
            text: "Su producto fue agregado al carrito",
            gravity: "top", // `top` or `bottom`
            position: "right", 
            stopOnFocus: true, 
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onclick:
            llenar_carrito.push({
                id : producto.id,
                imagen : producto.imagen,
                nombre : producto.nombre,
                precio : producto.precio
                
            })
        }).showToast();
        
    });

});


//API

const dolarhoy = document.querySelector(".contenedorApi")

fetch("https://dolarapi.com/v1/dolares/mayorista")
  .then(response => response.json())
  .then(data => mostrarApi(data) )
  .catch(error =>console.log("surgio un error"))
  

function mostrarApi(data){ 

    const div = document.createElement("div")
    div.className = "dolarHoy"
    div.innerHTML = `
    <h3> Dolar oficial $ ${data.compra}</h3>`
    dolarhoy.append(div)
}

fetch("https://dolarapi.com/v1/dolares/blue")
.then(response => response.json())
.then(data => mostrarApi(data) )
.catch(error =>console.log("surgio un error"))


function mostrarApi(data){ 

  const div = document.createElement("div")
  div.className = "dolarHoy"
  div.innerHTML = `
  <h3> Dolar Blue $ ${data.compra}</h3>`
  dolarhoy.append(div)}
