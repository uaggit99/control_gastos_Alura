let listaNombreGasto = [];
let listaValorGasto = [];
let listaDescripcion = [];
let indice;



function clickBoton(){
    
    let nombreGasto = document.getElementById("nombreGasto").value;
    let descripcionGasto = document.getElementById("descripcionGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;
       
    
    listaNombreGasto.push(nombreGasto);
    listaValorGasto.push(valorGasto);
    listaDescripcion.push(descripcionGasto);

    console.log(nombreGasto);
    console.log(typeof(valorGasto));
    console.log(listaNombreGasto);
    console.log(listaValorGasto)
    console.log(listaDescripcion);
    actualizarListaGastos();

}

function actualizarListaGastos(){
    const listaElementos = document.getElementById("listaDeGastos");
    const  totalValor = document.getElementById("totalGastos");
   

    let htmlista='';
    let totalGastos = 0;
    listaNombreGasto.forEach((elemento, posicion) =>{
        const valor= Number(listaValorGasto[posicion]);
        let descripcion = listaDescripcion[posicion];
        htmlista+= `<li>${elemento} - ${descripcion} - USD ${valor.toFixed(2)}
        <button  onclick="modificarGasto(${posicion});">Modificar</button>
        <button  onclick="eliminarGasto(${posicion});">Elimnar</button>
        </li>`;
        totalGastos+=valor;
        if(totalGastos>150){
            alert(" !! El total de gastos es mayor a USD 150  !!")
        }
        console.log(totalGastos);

    });
    listaElementos.innerHTML = htmlista;
    totalValor.innerHTML =totalGastos.toFixed(2);
    limpiar();

}

function limpiar(){
    document.getElementById("nombreGasto").value= '';
    document.getElementById("valorGasto").value= '';
    document.getElementById("descripcionGasto").value='';

}
function eliminarGasto(posicion){
    listaNombreGasto.splice(posicion,1);
    listaValorGasto.splice(posicion,1);
    listaDescripcion.splice(posicion,1);
    actualizarListaGastos();

}
function modificarGasto(posicion){
    //console.log(posicion);
    indice=posicion;
    //console.log(indice);
    
    document.getElementById("nombreGasto").value= listaNombreGasto[posicion];
    document.getElementById("descripcionGasto").value= listaDescripcion[posicion];
    document.getElementById("valorGasto").value= listaValorGasto[posicion];


    
    
}
function clickBoton2(){
    //console.log(indice);
    let nombreGasto2 = document.getElementById("nombreGasto").value;
    let descripcionGasto2 = document.getElementById("descripcionGasto").value;
    let valorGasto2 = document.getElementById("valorGasto").value;

    listaNombreGasto.splice(indice,1,nombreGasto2);
    listaValorGasto.splice(indice,1,valorGasto2);
    listaDescripcion.splice(indice,1,descripcionGasto2);

    actualizarListaGastos();
    


}
