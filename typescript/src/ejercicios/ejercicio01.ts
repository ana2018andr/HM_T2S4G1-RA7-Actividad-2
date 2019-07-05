(function () {
    let area = 0;
    let perimetro = 0;
    let lado;
    lado = parseInt(prompt("lado: "));

    cuadrado(lado);

    function cuadrado(lado: number) {
    let l;
    let area;
    perimetro = 4 * lado;
    area = lado * lado;
    perimetro = lado * 4;
    lado += 1;
    console.log("Area: " + area);
    console.log("Perimetro" + perimetro);
   }
    
})();
