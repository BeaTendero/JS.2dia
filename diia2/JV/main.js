// CREAMOS UN ARRAY....

// let y1= ["x","x","o"];
// let y2= ["x","o","x"];
// let y3= ["o","x","o"];

// let matriz = [y1,y2,y3];

// for(let i = 0; i <= matriz.length; i++){

    // console.log(matriz[i]);

    // if(matriz[y3[1]]=)
//};

// console.log(matriz[2][1]);

// if(matriz[2][1]== "x"){
//     console.log("Javi es el number one");
// };


// if(matriz[2][1]=== ""){
//     console.log("Aquí se podría marcar una casilla...");
// };

////////////////////////////////////////////////////////////////////


// let videojuegos = ["lost ark","Warframe","lol","metal slug","wow"];

// let posibles = videojuegos.filter(juego => juego != "lol");

// console.log(posibles);


////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////

// let numero = parseInt (prompt("Introduce tu número de DNI (sin la letra)"));

// let letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");

// let array = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J',
//  'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//  letra = letra.toUpperCase();

//  let pos = numero % 23;
 
//  if(letra == array[pos]){
//     console.log("Es correcto")
//  } else {
//     console.log("No es correcto")
//  };

 /////////////////////////   AQUÍ CONSIGUE LETRA   /////////////////////

// let dniNumber = parseInt(prompt("introduce el dni sin letra"));

// let modulo = dniNumber % 23;

// let letter = ["T", "R", "W", "A", "G", "M", "Y", "Y", "F", "P", "D", "B", "X", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];

// let dniLetter = letter[modulo];

// console.log("la letra es " + dniLetter);

//////////////////////////////////////////////////////////////////////////////////////


// let carlos = ["Carlos",27,"Valencia","Videojuegos"];

// let alumnoCarlos={
//     nombre: "Carlos",
//     edad: 27,
//     ciudad: "Valencia",
//     hobbie: ["Videojuegos","peliculas","leer","viajar"],
//     amigos: {
//         amigo1: "Jose",
//         amigo2:"Marta",
//         amigo3:"Mara"
//     }

// };

// console.log(alumnoCarlos.ciudad);
// console.log(alumnoCarlos.amigos.amigo3);

//////////////////////////////////////////////////////////////////////

// Genera una aplicación que te pida una edad y el nombre de la película que quieres ver, 
// despues te dirá por console log si tienes la edad o no para poder verla.


let pelicula = prompt ("¿Que pelicula quieres ver?");

let edad = parseInt (prompt("¿ Qué edad tienes ?"));

let obejetoPeliculas ={
    pelicula1:{
     titulo : "el rey león",
     edad: 3

    },
    pelicula2:{
        titulo: "soy legenda",
        edad:13
    },

    pelicula3:{
        titulo:"la marca del demonio",
        edad:18
    },
    pelicula4:{
        titulo:"a todo gas",
        edad:8
    },

};

switch (pelicula) {
    case "el rey leon":
        if (edad >= objetoPeliculas.pelicula1.edad) {
            console.log("Puedes ver la película");
        } else {
            console.log("No puedes ver la película");
        }
        break;
    case "soy leyenda":
        if (edad >= objetoPeliculas.pelicula2.edad) {
            console.log("Puedes ver la película");
        } else {
            console.log("No puedes ver la película");
        }
        break;
    case "la marca del demonio":
        if (edad >= objetoPeliculas.pelicula3.edad) {
            console.log("Puedes ver la película");
        } else {
            console.log("No puedes ver la película");
        }
        break;
    case "a todo gas":
        if (edad >= objetoPeliculas.pelicula4.edad) {
            console.log("Puedes ver la película");
        } else {
            console.log("No puedes ver la película");
        }
        break;
    default:
        console.log("Esa película no está disponible");

};




