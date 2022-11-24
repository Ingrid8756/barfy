//Ciclo
// for (let i = 1; i <= 100; i++) {
    
    
//     let ingresarNombre = prompt("Nombre de tu gato");{
//         if (i< 100){
//             break
//         }
//     }
    
//     alert(" Felicidades sos el usuario  N° "+i+" Nombre: "+ ingresarNombre);
        
// }

//Declaro variables

// let pesoGato = parseInt (prompt ("¿Cual es el peso actual de tu gato en gramos?"));
    
// let actividadGato = prompt ("¿Cual es el nivel de actividad de tu gato? 1: sedentario/de interior 2: actividad media 3: de exterior");
    
// let castradoGato = prompt ("¿Esta castrado?");
    
// let edadGato = prompt ("¿Cuantos años tiene tu gato?");
    
// let porcentaje1 = 0.03
// let porcentaje2 = 0.035
// let porcentaje3 = 0.04
// let porcentaje4 = 0.045

// //Resuelvo mediante function con condicionales
// function multiplicar (){
//     if (pesoGato >= 7000 && actividadGato == 1 && castradoGato == "si" && edadGato >=1){
//         let resultado = pesoGato * porcentaje1
//     return `La cantidad de vianda por dia debe ser ${resultado} gramos`;
//     }
//     else if(pesoGato < 7000 && actividadGato == 2 && castradoGato == "si" && edadGato>=1){
//         let resultado = pesoGato * porcentaje2
//     return `La cantidad de vianda por dia debe ser ${resultado} gramos`;
//     }
//     else if (pesoGato < 6000 && actividadGato == 3 && castradoGato == "si" && edadGato>1){
//         let resultado = pesoGato * porcentaje3
//     return `La cantidad de vianda por dia debe ser ${resultado} gramos`;
//     }
//     else if(pesoGato < 6000 && actividadGato == 3 && castradoGato == "no" && edadGato >1){
//         let resultado = pesoGato * porcentaje4
//         return `La cantidad de vianda por dia debe ser ${resultado} gramos`;
//     }
//     else if(edadGato < 1){
//         return `Ver tabla gatitos en crecimiento`;
//     }
//     else{
//         let resultado = pesoGato * porcentaje2
//         return `La cantidad de vianda por dia debe ser ${resultado} gramos`;
//     }

    
// }
// let vianda = multiplicar ()
// console.log (vianda);


//OBJETOS//
class Producto {
    constructor (nombre, cantidad, precio){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}
const producto1 = new Producto ("Dieta completa Pollo", "1 kg", 1150);
const producto2 = new Producto ("Dieta completa Vacuna", 1, 1300);
const producto3 = new Producto ("Huesos Carnosos", 1, 550);
const producto4 = new Producto ("Higado Pollo", 0.250, 200);
const producto5 = new Producto ("Caldo Huesos", 1, 800);

//OPERADOR IN//
if ("stock" in producto3){
    console.log (producto3.stock)
}
else{
    console.log ("No disponemos de stock para este producto por el momento")
}

//OPERADOR FOR.. IN// Recorre todas las propiedades del objeto//
for (const propiedad in producto4){
    console.log (propiedad)
}


// //ARRAYS

const baseProductos = [producto1, producto2, producto3, producto4, producto5];

// baseProductos.forEach ((el) => {
//     console.log (el.precio)
// });

let shopContent = document.getElementById ("shopContent");

baseProductos.forEach ((product) =>{
    let content = document.createElement ("div")
    content.className = "row row-cols-1 row-cols-md-3 g-4"

    shopContent.append (content)

    let col = document.createElement ("col")
    col.className = "col"

    content.append (col)

    let card = document.createElement ("card")
    card.className = "card"
    // card.innerHTML = `
    // <h5>${product.nombre}</h5>
    // <p>${product.cantidad}</p>
    // <p>${product.precio}</p>
    // `;
    
    content.append (card)

    let cardBody = document.createElement ("cardBody")
    cardBody.className = "card-body"
    cardBody.innerHTML = `
    <h5>${product.nombre}</h5>
    <p>${product.cantidad}</p>
    <p>${product.precio}</p>
    `;

    content.append (cardBody)

    let agregar = document.createElement ("button")
    agregar.className = "btn btn-primary"
    agregar.innerText = "Agregar al Carrito"

    cardBody.append (agregar);

} )  
// agregar.addEventListener ("click", () => {

// }
// )

// let boton2 = document.getElementById ("boton2")
// boton2.addEventListener ("click", llamarboton2)

// function llamarboton2 (){
//     Swal.fire({
//           title: 'Agregado!',
//           text: 'Producto agregado al carrito',
//           icon: 'success',
//           confirmButtonText: 'Ok'
//         })

// }



// // let carrito = [];

// // let agregarProducto = prompt ("Ingresá el num de producto: 0- Dieta Completa Pollo / 1- Dieta Completa Vacuna / 2- Huesos Carnosos / 3- Higado Pollo / 4- Caldo Huesos")

// // function comprar (producto){
// //     carrito.push (baseProductos [producto]);
// // }

// // comprar (agregarProducto);
// // console.log (carrito);

// //DOM//

// let lista = document.createElement ("ul");
// lista.classList.add("lista");

// for (producto of baseProductos){
//     lista.innerHTML += //`<li class = "lista-item"> ${producto}</li>`//
// }
// contenido.append(lista);

