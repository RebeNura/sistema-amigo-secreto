// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayNombresAmigos = []


function agregarAmigo() {

    let nombreAmigo = document.getElementById("amigo").value;
    console.log(nombreAmigo, nombreAmigo.length);
    if (nombreAmigo.length == 0) {
        alert("Por favor, inserte un nombre.")
    }

    else {
        arrayNombresAmigos.push(nombreAmigo);
        console.log(arrayNombresAmigos);
        document.querySelector("#amigo").value = "";
        actualizarListaAmigos();


    }

    return;


}


function actualizarListaAmigos() {

    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""


    for (let elemento in arrayNombresAmigos) {

        console.log(arrayNombresAmigos[elemento]);
        const li = document.createElement('li');
        li.textContent = arrayNombresAmigos[elemento];
        lista.appendChild(li);
    }




    return;
}


function sortearAmigo(){


    console.log(arrayNombresAmigos.length)
    if (arrayNombresAmigos.length == 0) {
        alert("Por favor, inserte un nombre.")
    }

    else{

        let indiceAleatorio=Math.floor((Math.random() * arrayNombresAmigos.length-1)) + 1;
        console.log(arrayNombresAmigos[indiceAleatorio])

        let lista = document.querySelector("#listaAmigos");
        lista.innerHTML = "";

        let listaSorteo=document.querySelector("#resultado" )
        listaSorteo.innerHTML=arrayNombresAmigos[indiceAleatorio]
        


    }


}

