function Ejecutar(numEjercicio){
    if(numEjercicio == 1){
        listarNumeros();
    } else if(numEjercicio == 2){
        listarNumerosReversa();
    } else if(numEjercicio ==3){
        listarNumerosPares();
    } else if(numEjercicio ==4){
        listarNumerosImpares();
    }
}

function listarNumeros(){
    for(let i = 0; i <= 3; i++){
        console.log(i)
    }
}

function listarNumerosReversa(){
    for(let i = 3; i > 0; i--){
        console.log(i)
    }
}

function listarNumerosPares(){
    for(let i = 0; i < 10; i+=2){
        console.log(i)
    }
}

function listarNumerosImpares(){
    for(let i = 1; i <= 7; i+=2){
        console.log(i)
    }
}