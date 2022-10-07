
////  DIA 07/10  ////

// BUCLE FOR SIMPLE //

// for(let i =1; i <= 10; i++){

// console.log(i);

// };

/// BUCLE FOR OF

// let videojuegos = ["dota 2","quake","doom"];

// por cada joc de videojuegos... el bucle da una vuelta

// for(let joc of videojuegos){
//     console.log(joc);
// };

// let videojuegos= ["wow","diablo II","overwatch"];

// for (let indice in videojuegos){
//     console.log(indice);
// };


// ////  ESTO ES LO MISMO QUE LO DE ARRIBA////
// for(let i= 0; i <videojuegos.length; i++){
//     console.log()
// }

// let videojuegos =["fifa 98","cod", "buscaminas"];
// videojuegos.forEach(xoc=> console.log(xoc));
///////////////////////////////////////////////////////

// let jose= {
//     edad:21,
//     nacionalidad:"Española",
//     nombre: "Jose",
//     residencia: "Nazaret",
//     hobbie:{
//     hobbie1:"anime",
//     hobbie2:"lol",
//     hobbie3:"mascotas",
//     hobbie4:"programar",
//     }
// };


/////////////////               CLASES                       ///////////////

class figther {
    //Propiedades
// DENTRO DEL CONSTRUCCTOR VIENEN DESDE LA INSTANCIA

    constructor(nombre,ataque,defensa,suerte,agilidad){
        ////CUALQUIER PROPIEDAD DE LA CLASE ,VIENE REFERIDA CON EL THIS.

     this.vida = 100;
     this.stamina = 100;
     this.nombre = nombre;
     this.ataque = ataque;
     this.defensa = defensa;
     this.suerte = suerte;
     this.agilidad = agilidad;

    }

    //Metodos

    golpear(enemigo){

        enemigo.vida = (this.ataque - enemigo.defensa) / enemigo.suerte;

    };

    correr(){

    };

    defenderse(){

    };
};

let luchador1 = new figther ("Rey Misterio",60,40,9,80);
let luchador2 = new figther ("Joan Macarra",100,20,9,90);
let luchador3 = new figther ("Goku",80,35,10,60);
let luchador4 = new figther ("Manuel Calavera",10,100,10,15);

// console.log(luchador1);
// console.log(luchador2);
// console.log(luchador3);
// console.log(luchador4);

luchador1.golpear(luchador2);

luchador2.golpear(luchador1);

console.log(luchador1);
console.log(luchador2);