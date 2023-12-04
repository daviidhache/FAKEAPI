window.onload=inicio;
var tabla = document.getElementById("tabla1");
function inicio(){
 let btn=document.getElementById("listar1");
 btn.onclick=function(){
   fetch('https://fakestoreapi.com/products')
   .then(response => response.json())
  .then(datos =>{
    console.table(datos);
    
    cargarTabla(datos);
  } );
 }
}
function cargarTabla(datos){
  var fila = document.createElement("tr");
 

    // Cargar cabecera
    var cabecera = Object.keys(datos[0]);
    for(let i = 0; i < cabecera.length;i++){
      let columna = document.createElement("th");
      columna.textContent = cabecera[i];
      fila.appendChild(columna);
    }

    tabla.appendChild(fila);

      // Cargar datos en tabla
      for(let i = 0; datos.length;i++){
        let fila = document.createElement("tr");
          for(let b = 0; b < cabecera.length;b++){
            let columna = document.createElement("td");
            if([cabecera[b]] == "image" ){
              let imagen = document.createElement("img");
              imagen.src = datos[i][cabecera[b]];
              imagen.style.width = "100px";
              imagen.style.height ="90px";
              columna.appendChild(imagen);
              fila.appendChild(columna);
          }else{
              columna.textContent = datos[i][cabecera[b]];
              fila.appendChild(columna);
          }
           
        
          }

          tabla.appendChild(fila);
         
      }
}