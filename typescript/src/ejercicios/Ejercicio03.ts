(function () {
    let edad = 0;
    let etapa;
    edad = parseInt(prompt("edad: "));
    persona(edad);

    function persona(edad: number) {

        if (edad >= 0 && edad <= 2) {
            console.log("etapa bebe");
        }
        if (edad >= 3 && edad < 5) {
            console.log("etapa niño");
        }
        if (edad >= 6 && edad <= 12) {
            console.log("etapa pubertad");
        }
        if (edad >= 13 && edad <= 18) {
            console.log("etapa adolecente");
        }
        if (edad >= 19 && edad <= 25) {
            console.log("etapa joven");
        }
        if (edad >= 26 && edad <= 60) {
            console.log("etapa adulto");
        }
        if (edad >= 60 && edad <= 100) {
            console.log("etapa joven");
        }
    }

})();