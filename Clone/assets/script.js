let horas = document.querySelector('.horas');
let minutos = document.querySelector('.pMinutos');
let segundos = document.querySelector('.segundos');

//auxiliares que vão se alterando
let s = 0; //segundos
let m = 0; //minutos
let h = 0; //horas

let start = document.querySelector('.start');
let parar = document.querySelector('.stop');
let reset = document.querySelector('.reset');

let contagemS, contagemM, contagemH;

let timerS, timerM, timerH;

function passaSegundos() {

    timerS = setInterval(function () {
        s++;
        segundos.innerHTML = s;

        //zera o valor dos segundos caso passar de um minuto
        if (s >= 60) {
            s = 0;
            segundos.innerHTML = `0${s}`;
            console.log(s);
        } else {
            //se tiver 1 algarismo
            if (s < 10) {
                //coloca "0"
                segundos.innerHTML = `0${s}`;
            } else {
                //tira o "0"
                segundos.innerHTML = s;
            }
        }

    }, 1000)
}

function passarMinutos() {

    timerM = setInterval(function () {
        m++;
        minutos.innerHTML = m;
        if (m >= 60) {
            m = 0;
            minutos.innerHTML = `0${m}`;
            console.log(m);
        } else {
            //se tiver 1 algarismo
            if (m < 10) {
                //coloca "0"
                minutos.innerHTML = `0${m}`;
            } else {
                //tira o "0"
                minutos.innerHTML = m;
            }
        }

    }, 60000) //59990

}

function passarHoras() {
    timerH = setInterval(function () {
        h++;
        horas.innerHTML = h;

        if (h >= 23) {
            clearInterval(timerS);
            clearInterval(timerM);
            clearInterval(timerH);
        } else {
            //se tiver 1 algarismo
            if (h < 10) {
                //coloca "0"
                horas.innerHTML = `0${h}`;
            } else {
                //tira o "0"
                horas.innerHTML = h;
            }
        }

    }, 360000) //359990

}

start.addEventListener('click', function (){
    passaSegundos();
    passarMinutos();
    passarHoras();
});

parar.addEventListener('click', function (){
    clearInterval(timerS);
    clearInterval(timerM);
    clearInterval(timerH);
});

reset.addEventListener('click', function (){
    clearInterval(timerS);
    clearInterval(timerM);
    clearInterval(timerH);
    s = 0;
    m = 0;
    h = 0;
    segundos.innerHTML = `0${s}`;
    minutos.innerHTML = `0${m}`;
    horas.innerHTML = `0${h}`;

});