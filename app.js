// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const htmAmigo = document.getElementById("amigo") ;
const listaAmigos = [];
const htmListaAmigos = document.getElementById("listaAmigos")
const htmResultado = document.getElementById("resultado")


function agregarAmigo(){
    if(!htmAmigo.value){
        alert("Ocupas escribir un nombre")
    }

    listaAmigos.push(htmAmigo.value);
    htmListaAmigos.innerHTML += `<li>${htmAmigo.value}<li>`
}

function sortearAmigo(){
    const alazar = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[alazar];
    htmResultado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto} <liv>`
} 
