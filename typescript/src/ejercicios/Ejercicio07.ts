(function () {
    let p: string;
    let d: string;
    let m: number ;
    let ds=0;
    let x="";
   m=parseInt(prompt("ingrse monto:  "));
   p=prompt("ingrse plazo recargo:  ");
   d= prompt("ingrse contado decuento:  ");
   ingrese(m);
        switch(p){
        case'G':
              switch(d){
        case'C':
              ds=(m*15)/100;
              x="15% de descuento";
              break;
        }
       
        }
        switch(p)
        {
        case'G':
              switch(d){
        case'P':
              ds=(m*10)/100;
              x="10% de descuento";
              break;
        }
       
        }
        switch(p)
        {
        case'A':
              switch(d){
        case'c':
              ds=(m*20)/100;
              x="20% de descuento";
              break;
        }
       
        }
        switch(p)
        {
        case'A':
              switch(d){
        case'P':
              ds=(m*5)/100;
              x="5% de descuento";
              break;
        }
       
        }
      console.log("plazos recargo: " + x);
      console.log(" contado descuento :" + ds);

       function ingrese(m: number) {
        return;			
}

})();

