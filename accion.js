const boton = document.getElementById('button-addon2');

const confirm = true;
var opcion = 0; 
var i = 1;


boton.addEventListener('click', ()=>{
      var valor = document.getElementById('inp__').value;
     
      while(confirm == true){
            var rando =  Math.random()*2 + 1;
            var moneda = rando.toPrecision(1);
            parseInt(opcion);  
            opcion = prompt("Eliga: \n 1.cara \n 2.sello");  
            if(moneda == opcion){         
                  console.log("usted gano");
            }else{
                  console.log("usted perdio");
            }
            console.log(`${moneda}  ${i}`);
            i++
            confirm == true; 

      }

})
