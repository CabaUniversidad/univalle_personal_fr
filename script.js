document.addEventListener('DOMContentLoaded', () => { 
    const mensajeElemento = document.getElementById('mensaje-js');
    mensajeElemento.textContent = "¡El JavaScript se está ejecutando!   El sitio es completamente funcional.";
 
    const boton = document.getElementById('cambiar-color');
    boton.addEventListener('click', () => { 
        const colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
         
        document.body.style.backgroundColor = colorAleatorio;
        
        mensajeElemento.textContent = `¡Fondo cambiado a ${colorAleatorio}!`;
    });
});