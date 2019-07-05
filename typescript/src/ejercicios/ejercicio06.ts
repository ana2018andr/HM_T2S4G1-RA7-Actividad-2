(function () {
    let base = 0;
    let altura = 0;
    base = parseInt(prompt("Base: "));
    altura = parseInt(prompt("Altura: "));
    let area = base * altura;
    console.log("el area es:" + area);
    Arearectangulo(base, altura);

    function Arearectangulo(base, altura) {
        return base * altura;
    }

})();







