// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayNombresAmigos=[]


function agregarAmigo(){

    let nombreAmigo = document.getElementById("amigo" ).value;
    console.log(nombreAmigo,nombreAmigo.length);
    if(nombreAmigo.length==0){
        alert("Por favor, inserte un nombre.")}

    else{
        arrayNombresAmigos.push(nombreAmigo);
        console.log(arrayNombresAmigos);
        document.querySelector("#amigo").value="";
    }


}