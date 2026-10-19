//Estructura de una función base
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

//Estructura con flecha
const restar = (numero1, numero2) => { return numero1 - numero2;
}

//Tipos de datos Primitivos

const texto = "Hola Mundo";
const numero = 10;
const booleano = true;
const nulo = null;

// Arrelgos o lista

const personas = ["Juan", "Pedro", "Maria", "Jose"];

//Objetos literales - Diccionarios en python
const persona = {
    nombre: "Juan",
    email: "juan@email.com",
    edad: 30,
    activo: true    
};

// Variables
// Const: Variables con que no van a a ser reasignados
// Let: Variables cuyo valor cambiará en el tiempo

//.Uso.
console.log(persona);
console.log("Numero:", numero);
console.log("Texto:", texto);
console.log("Booleano:", booleano);
console.log("Nulo:", nulo);
console.log("Sumar:", sumar(5, 3));
console.log("Restar:", restar(10, 5));

const parrafo0=document.getElementsByTagName("p");
console.log("parrafo0:", parrafo0);
const parrafo2=document.getElementById("parrafo2");
console.log("parrafo2:", parrafo2.textContent);

const parrafo1=document.getElementsByName("parrafo1");
console.log("parrafo1:", parrafo1.textContent);
parrafo1.textContent="Jaja modificado desde javascript";