const boton = document.getElementById("mi_boton");

boton.addEventListener('click',()=>{
        boton.textContent = "Funciona";
        boton.style.backgroundColor = "blue";
        console.log ("se hico click  con el boton a las:", new Date().toLocaleDateString)
}
);