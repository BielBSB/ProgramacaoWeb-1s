function verificarNumeroPrimo(n){

    if(n <= 1){
        return false;
    }

    if( (n !=2) && (n % 2 == 0)){
        return false;

    }

    for(let i = 3;i < n; i += 2){

        if(n % 1 == 0)
            return false;

    }





    return true;

}

console.log(verificarNumeroPrimo(0));
console.log(verificarNumeroPrimo(1));
console.log(verificarNumeroPrimo(2));
console.log(verificarNumeroPrimo(45));
console.log(verificarNumeroPrimo(78));
console.log(verificarNumeroPrimo(54));
console.log(verificarNumeroPrimo(35));
console.log(verificarNumeroPrimo(24));
console.log(verificarNumeroPrimo(90));

