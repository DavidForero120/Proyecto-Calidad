const cara = document.getElementById('button-addon1');
var i = 0;
var e = 0;
var juegos = i + e;
cara.addEventListener('click', ()=>{
      var valor = document.getElementById('inp__').value;
      if(valor > 1999){
            var rando =  Math.random()*2 + 1;
            var moneda = rando.toPrecision(1);  
            if(moneda == 1){
                  console.log("gano")
                  e= e+1
                  console.log(e)
            }else{
                  console.log("perdio")
                  e= e+1
                  console.log(e)
            }
      }else{
            Swal.fire({title:"Por favor ingrese un cantidad de dinero mayor o igual a 2000!!"});
      }
      console.log(juegos)
})

const sello = document.getElementById('button-addon2');
sello.addEventListener('click', ()=>{
      var valor = document.getElementById('inp__').value;
      if(valor > 1999){
            var rando =  Math.random()*2 + 1;
            var moneda = rando.toPrecision(1); 
            if(moneda==2){
                  console.log("gano")
                  i =i+1
                  console.log(i)
            }else{
                  console.log("perdio")
                  i =i+1
                  console.log(i)
            } 
      }else{
            Swal.fire({title:"Por favor ingrese un cantidad de dinero mayor o igual a 2000!!"});
      }
      console.log(juegos)
})
