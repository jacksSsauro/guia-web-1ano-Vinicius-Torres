// Banco de dados falso com músicas
const musicas = [
    {
        titulo: "Shape of You",
        artista: "Ed Sheeran",
        capaUrl: "https://via.placeholder.com/200?text=Shape+of+You"
    },
    {
        titulo: "Blinding Lights",
        artista: "The Weeknd",
        capaUrl: "https://via.placeholder.com/200?text=Blinding+Lights"
    },
    {
        titulo: "Dance Monkey",
        artista: "Tones and I",
        capaUrl: "https://via.placeholder.com/200?text=Dance+Monkey"
    },
    {
        titulo: "Don't Start Now",
        artista: "Dua Lipa",
        capaUrl: "https://via.placeholder.com/200?text=Dont+Start+Now"
    },
    {
        titulo: "Watermelon Sugar",
        artista: "Harry Styles",
        capaUrl: "https://via.placeholder.com/200?text=Watermelon+Sugar"
    }
];

// Estado do player
let musicaAtualIndex = -1;
let isPlaying = false;

// Elementos do DOM
const listaDeMusicas = document.getElementById('lista-de-musicas');
const btnPlay = document.getElementById('btn-play');
const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');
const volumeControl = document.getElementById('volume-control');
const capaAtual = document.getElementById('capa-atual');
const tituloAtual = document.getElementById('titulo-atual');
const artistaAtual = document.getElementById('artista-atual');

// Função para renderizar as músicas na lista
function renderizarMusicas() {
    listaDeMusicas.innerHTML = musicas.map((musica, index) => `
        <article class="musica-card" onclick="tocarMusica(${index})">
            <img src="${musica.capaUrl}" alt="Capa de ${musica.titulo}">
            <h3>${musica.titulo}</h3>
            <p>${musica.artista}</p>
        </article>
    `).join('');
}

// Função para atualizar o player
function atualizarPlayer() {
    if (musicaAtualIndex >= 0) {
        const musica = musicas[musicaAtualIndex];
        capaAtual.src = musica.capaUrl;
        tituloAtual.textContent = musica.titulo;
        artistaAtual.textContent = musica.artista;
        btnPlay.textContent = isPlaying ? "⏸️" : "▶️";
    }
}

// Função para tocar música
function tocarMusica(index) {
    if (musicaAtualIndex === index) {
        // Toggle play/pause se for a mesma música
        isPlaying = !isPlaying;
    } else {
        // Trocar de música
        musicaAtualIndex = index;
        isPlaying = true;
    }
    atualizarPlayer();
}

// Event Listeners
btnPlay.addEventListener('click', () => {
    if (musicaAtualIndex >= 0) {
        isPlaying = !isPlaying;
        atualizarPlayer();
    }
});

btnAnterior.addEventListener('click', () => {
    if (musicaAtualIndex > 0) {
        musicaAtualIndex--;
        isPlaying = true;
        atualizarPlayer();
    }
});

btnProximo.addEventListener('click', () => {
    if (musicaAtualIndex < musicas.length - 1) {
        musicaAtualIndex++;
        isPlaying = true;
        atualizarPlayer();
    }
});

volumeControl.addEventListener('input', (e) => {
    const volume = e.target.value;
    // Em um player real, aqui ajustaríamos o volume do áudio
    console.log(`Volume ajustado para: ${volume}%`);
});

// Inicializar a aplicação
renderizarMusicas();
