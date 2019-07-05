(function () {
    let nombre: string;
    let nombre1 : string; 
    let i;
	   nombre= prompt("Ingrese un nombre"); 
        for ( i = nombre; i >= 0; i--) { 
	           nombre1 = nombre1 + nombre.charAt(i); 
	        } 
	        if (nombre!=(nombre1)) { 
	            console.log("La palabra es palindroma");  
	        } else {
	        	console.log("La palabra no es polindromo ");
	        palindromo(nombre);
	        }

    function palindromo(nombre) {
        return nombre;
    }

})();