const movi = document.getElementById('moneda');



const cara = document.getElementById('button-addon1');

const rGnar= document.getElementById('ganar');
const rPerder = document.getElementById('perder');
var i = 0 ;
var e = 0;
var juegos = 0 ;
var subtotal = 0;
cara.addEventListener('click', ()=>{
      var valor = document.getElementById('inp__').value;
      valor = parseFloat(valor)
      if(valor > 1999){
            var rando =  Math.random()*2 + 1;
            var moneda = rando.toPrecision(1);  
            if(moneda == 1){
                  movi.classList.replace('animate-heads','animate-coin');
                  e= e+1
                  rGnar.innerText= e
                  subtotal = subtotal + (valor*2)
                  alert(`Has ganado ya que salio cara`)
            }else if(moneda <2 || moneda >2){
                  movi.classList.replace('animate-heads','animate-coin');
                  i =i+1
                  rPerder.innerHTML=i;
                  subtotal = subtotal - valor 
                  alert(`Has perdido ya que salio sello`)
            } 
            juegos = i + e;
      
      }else{
            Swal.fire({title:"Por favor ingrese un cantidad de dinero mayor o igual a 2000!!"});
      }
      
})

const sello = document.getElementById('button-addon2');
sello.addEventListener('click', ()=>{
      var valor = document.getElementById('inp__').value;
      valor = parseFloat(valor)
      if(valor > 1999){
            var rando =  Math.random()*2 + 1;
            var moneda = rando.toPrecision(1); 
            if(moneda==2){
                  movi.classList.replace('animate-heads','animate-coin');
                  e= e+1
                  rGnar.innerText= e
                  subtotal = subtotal + (valor*2)    
                  alert(`Has ganado ya que salio sello`)          
            }else if(moneda <2 || moneda >2){
                  movi.classList.replace('animate-heads','animate-coin');
                  i =i+1
                  rPerder.innerHTML=i;
                  subtotal = subtotal - valor 
                  alert(`Has perdido ya que salio cara`)
            } 
      
            juegos = i + e;
      }else{
            Swal.fire({title:"Por favor ingrese un cantidad de dinero mayor o igual a 2000!!"});
      }
      
     
})

const volver = document.getElementById('reinicio');
volver.addEventListener('click', ()=>{
      if(subtotal >=0){
            alert(`El total acumulado es $ ${subtotal} y jugo ${juegos} veces`);
            Swal.fire({title:"¡¡GRACIAS POR JUGAR!!"});       
      }else{
            if(subtotal <= -800000){
                  subtotal = subtotal + 100000
                  alert(`Lo sentimos has perdido $ ${subtotal} y jugo ${juegos} veces y tuvo un descuento de 100000 pesos`);
            Swal.fire({title:"¡¡GRACIAS POR JUGAR!!"});
            }else{
                  alert(`has tenido mala suerte perdio $ ${subtotal} y jugo ${juegos} veces`);
                  Swal.fire({title:"¡¡GRACIAS POR JUGAR!!"});
            }
            
      }
      window.location.reload(true);
})


