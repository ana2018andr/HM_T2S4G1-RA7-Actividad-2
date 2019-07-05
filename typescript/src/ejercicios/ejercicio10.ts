(function () {
    let i ;
    let j ;
    let matriza: number[][]= Array();
    for (i = 0; i < 2; i++) {
        matriza[i]= new Array(2);
    }
    let matrizb: number[][]= Array();
    for (i = 0; i < 2; i++) {
        matrizb[i]= new Array(2);
    }
    let matrizc: number[][]= Array();
    for (i = 0; i < 2; i++) {
        matrizc[i]= new Array(2);
    }
    console.log("Arreglo A: ");
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++) {
            matriza[i][j] = parseInt(prompt("Numero: " ));

        }
    }
    console.log("Arreglo B: ");
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++) {
            matrizb[i][j] = parseInt(prompt("Numero " ));

        }
    }
    for (i = 0; i <= 1; i++) {
        for (j = 0; j <= 1; j++)
            matrizc[i][j] = matriza[i][j] * matrizb[i][j];
    }
    console.log("Areglo C: ");
    console.log("==========: ");
    console.log("Numero (0 , 0) : " + matrizc[0][0]);
    console.log("Numero (0 , 1) : " + matrizc[0][1]);
    console.log("Numero (1 , 0) : " + matrizc[1][0]);
    console.log("Numero (1 , 1) : " + matrizc[1][1]);
    matriz(i, j);


    function matriz(i, j) {
        return;
    }
})();

