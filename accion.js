import Swal from 'sweetalert2';

const boton = document.getElementById('button-addon2');
var opcion = 0; 
var i = 0;

boton.addEventListener('click', ()=>{
      var valor = document.getElementById('inp__').value;
      var total= valor;
      if(valor > 1999){
            var confir = true;
            
                  while(confir == true){
                        i++
                        var rando =  Math.random()*2 + 1;
                        var moneda = rando.toPrecision(1);
                        parseInt(opcion); 
                        total = parseInt(total);
                        valor = parseInt(valor);
                        opcion = prompt(`Eliga: \n 1. Cara \n 2. Sello`);  
                        if(moneda == opcion){       
                              total = total + valor;  
                              window.alert(`¡¡Usted ha ganado!!`);
                        }else{
                              total = total - valor 
                              window.alert(`¡¡Usted ha perdido!!`);
                        }
                        console.log(`${total}`);
                        
                        confir = window.confirm("¿Desea Continuar?");     
                  }          
            if(total >0){
                  window.alert(`Usted jugo ${i} vece(s) y le quedo ${total}$ pesos`);
                  window.alert(`GRACIAS POR JUGAR!!`);
            }else if(total < 0){
                  window.alert(`Haz tenido mala suerte perdiste ${total}$ pesos y haz jugado ${i}`);
                  window.alert(`GRACIAS POR JUGAR!!`);
            }
      }else{
            Swal.fire({title:"Por favor ingrese un cantidad de dinero mayor o igual a 2000!!"});
      }
})
