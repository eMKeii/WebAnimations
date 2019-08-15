console.log('Funciona!');
const $pelota = document.getElementById('pelota');
// element.animate(keyframes = [], option = {});
$pelota.animate([
    //from
    {
        transform: 'translateX(0)'
    },
    //to
    {
        transform:'translateX(500px)'
    }
],{
    duration: 1000, //OJO! En este caso las animaciones se ejecutan en milisegundos 
    delay: 1000,                           
    direction: 'normal',
    easing: 'linear',
    iterations: Infinity, //iteration-count in CSS, se debe llamar el infinito de js Infinity
    fill: 'forwards',
    iterationStart: .5, //posicion en porcentaje desde donde quiero que empiece mi animacion
    // endDelay:
});