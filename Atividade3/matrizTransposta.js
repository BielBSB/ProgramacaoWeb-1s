function transporMatriz(A){
    let matrizString = '';
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[i].length; j++){
            matrizString += A[i][J] + ' ';
        }
    } 
    console.log(matrizString);

    let matrizTransportaString = '';
    for(let j = 0; j < A[0].length; j++){
        for(let i = 0; i < A.length; i++){
            matrizTransportaString += A[i][j] + ' ';
        }
        matrizTransportaString += A[i][j] + ' ';
    }
    console.log(matrizTransportaString)

}

const A = [
    [1, 2],
    [3, 4],
    [5, 6]
            ];

transporMatriz(A);
