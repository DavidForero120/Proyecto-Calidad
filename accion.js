const cara = document.getElementById('button-addon1');
var i = 0;

cara.addEventListener('click', ()=>{
      var valor = document.getElementById('inp__').value;
      if(valor > 1999){
            var rando =  Math.random()*2 + 1;
            var moneda = rando.toPrecision(1);       
      }else{
            Swal.fire({title:"Por favor ingrese un cantidad de dinero mayor o igual a 2000!!"});
      }
})

const sello = document.getElementById('button-addon2');
sello.addEventListener('click', ()=>{
      var valor = document.getElementById('inp__').value;
      if(valor > 1999){
            var rando =  Math.random()*2 + 1;
            var moneda = rando.toPrecision(1);       
      }else{
            Swal.fire({title:"Por favor ingrese un cantidad de dinero mayor o igual a 2000!!"});
      }
})