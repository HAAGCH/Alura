// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigoSecreto = [];

function agregarAmigo() {

let nombreAmigo = document.querySelector("input").value;   
        if (nombreAmigo == "") {

            alert("Ingrese un nombre, por favor")
            }  else {
            
            listaAmigoSecreto.push(nombreAmigo);
            console.log(listaAmigoSecreto);
            listaNombres();
            }

            limpiarCampo();
}


function limpiarCampo() {
    
    nombreAmigo = document.querySelector("input");
    nombreAmigo.value = "";

}

function listaNombres() {

    let listaAmigo = document.getElementById("listaAmigos").innerHTML;
    listaAmigo += "<li>"+listaAmigoSecreto[listaAmigoSecreto.length-1]+"</li>";
    document.getElementById("listaAmigos").innerHTML = listaAmigo;

}

function sortearAmigo() {

    let tamanoLista = listaAmigoSecreto.length;
    let sorteoNumero = Math.floor(Math.random() * tamanoLista);
    let amigoSorteado = listaAmigoSecreto[sorteoNumero];
    console.log(tamanoLista);
    console.log(sorteoNumero);
    console.log(amigoSorteado);

    if (listaAmigoSecreto == "") {

            alert("Ningun nombre agregado")
            } else {

                let resultadoSorteo = document.getElementById("resultado").innerHTML;
                resultadoSorteo = "<li>"+"El amigo sorteado es: "+amigoSorteado+"</li>";
                document.getElementById("resultado").innerHTML = resultadoSorteo;
                document.getElementById("listaAmigos").innerHTML =""
                listaAmigoSecreto = []

                            }
}

