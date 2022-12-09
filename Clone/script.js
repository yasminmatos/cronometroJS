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

let contagemInicial;


function passaSegundos(numero) {
    s = s + numero;
    segundos.innerHTML = s;
    console.log(s);

    //zera o valor dos segundos caso passar de um minuto
    if (s >= 60) {
        s = 0;
        s = s + numero;
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

}

function passarMinutos(numero) {
    m = m + numero;
    minutos.innerHTML = m;

    //se tiver 1 algarismo
    if (m < 10) {
        //coloca "0"
        minutos.innerHTML = `0${m}`;
    } else {
        //tira o "0"
        minutos.innerHTML = m;
    }
}

function passarHoras(numero) {
    h = h + numero;
    horas.innerHTML = h;

    //se tiver 1 algarismo
    if (h < 10) {
        //coloca "0"
        horas.innerHTML = `0${h}`;
    } else {
        //tira o "0"
        horas.innerHTML = h;
    }

}

function pararContagem() {
    clearInterval(contagemInicial);
}

let aux = 0; //vai ajudar a verificar se é a primeira vez que ele clica em start

start.addEventListener('click', function () {
    //quando clicar em "start", a aux recebe 1, indicando que foi
    //clicado pelo menos uma vez
    aux ++;
    //vai impedir que ele "adicione" o parametro sempre que clicar na função, não mudando a
    //contagem
    if(!(aux > 1)){
        contagemInicial = setInterval(passaSegundos, 1000, 1);
        setInterval(passarMinutos, 60000, 1);
        setInterval(passarHoras, 3600000, 1)
    } 
});

parar.addEventListener('click', pararContagem);

reset.addEventListener('click', function () {
    pararContagem();
    s = 0;
    m = 0;
    h = 0;
    segundos.innerHTML = `0${s}`;
    minutos.innerHTML = `0${m}`;
    horas.innerHTML = `0${h}`;
});