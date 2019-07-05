(function () {
    let numero: number;
    let inverso = 0;
    let cifra: number;
    numero = parseInt(prompt("Introduce un número para invertir: "));
    while (numero != 0) {
        cifra = numero % 10;
        inverso = (inverso * 10) + cifra;
        numero /= 10;
        console.log("inverso:" + inverso);
        invertir(numero);
        }
      

        function invertir(numero:number) {
            return inverso;
        }

})();