console.log('Funciona!');
const $pelota = document.getElementById('pelota');
// element.animate(keyframes = [], option = {});
const $animation = $pelota.animate([
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

const $playButton = document.getElementById('play');
const $pauseButton = document.getElementById('pause');
const $stopButton = document.getElementById('stop');
const $reverseButton = document.getElementById('reverse');

$playButton.addEventListener('click', (event) =>{
    $animation.play();
});
$pauseButton.addEventListener('click', (event) =>{
    $animation.pause();
});
$stopButton.addEventListener('click', (event) =>{
    $animation.cancel();
});
$reverseButton.addEventListener('click', (event) =>{
    $animation.reverse();
});
