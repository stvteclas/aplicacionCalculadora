console.log("Pablo's calculator app");

function sumar(){
    const forma=document.getElementById('forma');
    let operandoA=forma['operandoA'];
    let operandoB=forma['operandoB'];
    let resultado=parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
    resultado='La operación no incluye números';
    document.getElementById('resultado').innerHTML=`Resultado: ${resultado}`;
    cambiarImagen.src='/js/suma.png';
    console.log('La suma fue realizada con exito');
    
}
function restar(){
    const forma=document.getElementById('forma');
    let operandoA=forma['operandoA'];
    let operandoB=forma['operandoB'];
    let resultado=parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado))
    resultado='La operación no incluye números';
    
    document.getElementById('resultado').innerHTML=`Resultado: ${resultado}`;
    cambiarImagen.src='/js/resta.png';
    console.log('La resta fue realizada con exito');
    
}
function multiplicar(){
    const forma=document.getElementById('forma');
    let operandoA=forma['operandoA'];
    let operandoB=forma['operandoB'];
    let resultado=parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado))
    resultado='La operación no incluye números';

    document.getElementById('resultado').innerHTML=`Resultado: ${resultado}`;
    cambiarImagen.src='/js/multiplicar.png';
    console.log('La multiplicación fue realizada con exito');
    
}
function dividir(){
    const forma=document.getElementById('forma');
    let operandoA=forma['operandoA'];
    let operandoB=forma['operandoB'];
    let resultado=parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado))
    resultado='La operación no incluye números';

    document.getElementById('resultado').innerHTML=`Resultado: ${resultado}`;
    cambiarImagen.src='/js/dividir.png';
    console.log('La división fue realizada con exito');
    
}