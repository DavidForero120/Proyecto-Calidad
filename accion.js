const boton = document.getElementById('button-addon2');
var opcion = 0; 
var i = 1;
boton.addEventListener('click', ()=>{
      var valor = document.getElementById('inp__').value;
      if(valor > 1){
            var confir = true;
                  while(confir == true){
                        var rando =  Math.random()*2 + 1;
                        var moneda = rando.toPrecision(1);
                        parseInt(opcion);  
                         opcion = prompt("Eliga: \n 1.cara \n 2.sello");  
                        if(moneda == opcion){         
                              window.alert("usted ha ganado");
                        }else{
                              window.alert("usted perdio");
                        }
                        i++
                        confir = window.confirm("desea Continuar");     
                  }
            window.alert(`Usted jugo ${i} veces y le quedo ${valor}`)
      }else{
            window.alert("por favor ingrese un cantidad de dinero a apostar!!")
      }

})
