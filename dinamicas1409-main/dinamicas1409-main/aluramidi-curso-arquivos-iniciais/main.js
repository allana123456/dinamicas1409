function tocaSom (idElementAudio) {
 document.querySelector(idElementAudio).play();
}

const listaDeTeclas =document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while(contador< listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];

   const instrumento = tecla.classList[1];

    console.log(instrumento);
    listaDeTeclas[contador].onclick = function() {
     tocaSom('#som_tecla_pom');
    }

    contador = contador + 1;

    console.log(contador);

}




    
