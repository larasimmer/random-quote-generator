//VARIÁVEIS

const button = $("#btn");
let currentLyrics = $(".lyrics").text();
let songTitle = $("#song").text();
let band = $("#band").text();

//CHAMANDO FUNÇÕES

button.on("click", changeLyrics);

//DECLARANDO FUNÇÕES

function changeLyrics() {
    $.get("http://127.0.0.1:5500/random-quote-generator/lyrics.json", generateRandomLyrics);
}

function generateRandomLyrics(data) {
    let randomLyrics = Math.floor(Math.random() * data.length);

    while (randomLyrics == currentLyrics) {
        randomLyrics = Math.floor(Math.random() * data.length);
    }
    currentLyrics = $(".lyrics").text(data[randomLyrics].lyrics);
    songTitle = $("#song").text(data[randomLyrics].song);
    band = $("#band").text(data[randomLyrics].band);

    currentLyrics = randomLyrics;
}