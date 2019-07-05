(function () {
    let num = 0;
    num = parseInt(prompt("Numero: "));
    digitos(num);

    function digitos(num: number) {
        let sumpar = 0;
        let sumimpar = 0;
        let i = 0;
        for (i = 0; i <= num; i++) {
            if (i % 2 == 0) {
                sumpar = sumpar + i;
            } else {
                sumimpar = sumimpar + i;
            }
        }
        console.log("La suma de los pares es:" + sumpar);
        console.log("La suma de los impares es:" + sumimpar);
    }
})();