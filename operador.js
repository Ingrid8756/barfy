//Ciclo
for (let i = 1; i <= 100; i++) {
    
    
    let ingresarNombre = prompt("Nombre de tu gato");{
        if (i< 100){
            break
        }
    }
    
    alert(" Felicidades sos el usuario  N° "+i+" Nombre: "+ ingresarNombre);
        
}

//Declaro variables

let pesoGato = parseInt (prompt ("¿Cual es el peso actual de tu gato en gramos?"));
    
let actividadGato = prompt ("¿Cual es el nivel de actividad de tu gato? 1: sedentario/de interior 2: actividad media 3: de exterior");
    
let castradoGato = prompt ("¿Esta castrado?");
    
let edadGato = prompt ("¿Cuantos años tiene tu gato?");
    
let porcentaje1 = 0.03
let porcentaje2 = 0.035
let porcentaje3 = 0.04
let porcentaje4 = 0.045

//Resuelvo mediante function con condicionales
function multiplicar (){
    if (pesoGato >= 7000 && actividadGato == 1 && castradoGato == "si" && edadGato >=1){
        let resultado = pesoGato * porcentaje1
    return `La cantidad de vianda por dia debe ser ${resultado} gramos`;
    }
    else if(pesoGato < 7000 && actividadGato == 2 && castradoGato == "si" && edadGato>=1){
        let resultado = pesoGato * porcentaje2
    return `La cantidad de vianda por dia debe ser ${resultado} gramos`;
    }
    else if (pesoGato < 6000 && actividadGato == 3 && castradoGato == "si" && edadGato>1){
        let resultado = pesoGato * porcentaje3
    return `La cantidad de vianda por dia debe ser ${resultado} gramos`;
    }
    else if(pesoGato < 6000 && actividadGato == 3 && castradoGato == "no" && edadGato >1){
        let resultado = pesoGato * porcentaje4
        return `La cantidad de vianda por dia debe ser ${resultado} gramos`;
    }
    else if(edadGato < 1){
        return `Ver tabla gatitos en crecimiento`;
    }
    else{
        let resultado = pesoGato * porcentaje2
        return `La cantidad de vianda por dia debe ser ${resultado} gramos`;
    }

    
}
let vianda = multiplicar ()
console.log (vianda);


let gato = {
    nombre: "Benito",
    
}

