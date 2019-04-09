//TIPOS DE DATOS
const OPCIONES = 'TODAS'; // INICIALIZADAS EN EL MOMENTO QUE SON CREADAS

let nombreC:string = 'juan';
let numero:number;
let booleano:boolean;
let hoy:Date = new Date();
hoy = new Date('2010-01-01');
let cualquiera:any;
let spiderman = {
    nombre:"Peter",
    edad:20
}



// Define template literal
let nombreP:string ="JUAN";
let apellido:string="PEREZ";
let edad:number = 32;
let texto=`HOLA, ${nombreP} ${apellido} (${edad})`

//${} Permite definir una expresion javascript
let texto2:string = `${1+2}`;

function getNombre(){
    return nombreP;
}

let texto3:string = `${getNombre()}`


//Parametros obligatorio,por defecto, opcional
function activar( quien:string , objeto:string = "bati señal", momento?:string ){
    let mensaje:string;
    
    if(momento)
        mensaje = `${quien}, activó ${objeto}`;
    else
        mensaje = "ERROR;"
}
activar(nombreP);


//Funciones de flecha
//Ventaja apunta al mismo objeto donde se define
let miFuncion = function(a:string){
    return a;
}

let miFuncionF = (a:any)=> a;

let miFuncion2 = function(a:number,b:number){
    return a +b;
}

let miFuncion2F = (a:number,b:number)=>a+b;
alert(miFuncion2F(5,5));

let miFuncion3 = function(nombre:string){
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFuncion3F = (nombre:string) => {
    nombre = nombre.toUpperCase();
    return nombre;
}

let hulk ={
    nombre:"Bruce",
    smash(){
        setTimeout(() => {
            console.log(this.nombre + " smash!!"); 
        }, 1500);   
    }
}

hulk.smash();


//DESTRUCTURACION DE OBJETOS Y ARREGLOS
let avenger ={
    nombre : "Tony Stark",
    clave  :"Iron man",
    poder : "la ciencia"
}

let {nombre:nombreA, clave, poder} = avenger;

/*let nombre = avenger.nombre;
let clave = avenger.clave;
let poder = avenger.poder;*/

console.log(nombreA, clave, poder);

// arreglos son secuenciales.
let avengers:string[] = ["Iron man","Cap","Thor"];
let [iroman, capi, thor] = avengers;
console.log(thor,capi,iroman);
let [iroman1, ,] = avengers;
console.log(iroman1);


//PROMESAS ES6 -> Ejcutar  una tarea cuando un proceso asincrono es terminada
let prom1 = new Promise(function(resolve:any, reject:any){
    setTimeout( ()=>{
        resolve();
        reject();
    },1500); 
});


console.log("PASO 1");
prom1.then(function (){
        console.log("TODO BIEN");
    },function (){
        console.info("TODA SALE MAL");
    }
)

console.log("PASO 2");


//interface;

//Interfaces TypeScript
interface SuperHero{
    nombre:string;
    poder:string;
}

let familia:SuperHero ={
    nombre :"JUAN",
    poder :"PROGRAMAR"
}

// Clase 
class Persona{
    nombre : string = "";
    apellido: string = "";
    edad:number = 0;

    constructor (nombre:string){
        this.nombre = nombre;
    }

    imprimir(){
        console.log(`Primera CLASE en TypeScript, nombre= ${this.nombre} apellido = ${this.apellido}` )
    }
}

let persona:Persona = new Persona("JUAN"); 
persona.imprimir();