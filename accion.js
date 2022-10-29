const boton = document.getElementById('button-addon2');
var opcion = 0; 
var i = 0;
var total=0;
boton.addEventListener('click', ()=>{
      var valor = document.getElementById('inp__').value;
      if(valor > 1999){
            var confir = true;
                  while(confir == true){
                        i++
                        var rando =  Math.random()*2 + 1;
                        var moneda = rando.toPrecision(1);
                        parseInt(opcion);  
                         opcion = prompt("Eliga: \n 1.Cara \n 2.sello");  
                        if(moneda == opcion){      
                              total = valor * 2   
                              window.alert(`¡¡Usted ha ganado!!`);
                        }else{
                              total = valor - valor 
                              window.alert(`¡¡Usted ha perdido!!`);
                        }
                        console.log(`${total}`)
                        
                        confir = window.confirm("¿desea Continuar?");     
                  }          
            if(total >0){
                  window.alert(`Usted jugo ${i} vece(s) y le quedo ${total}`);
                  window.alert(`Gracias por jugar`);
            }else{
                  window.alert(`haz tenido mala suerte perdiste ${valor} pesos`);
                  window.alert(`Gracias por jugar`);
            }
      }else{
            window.alert("Por favor ingrese un cantidad de dinero mayor o igual a 2000!!");
      }
})
