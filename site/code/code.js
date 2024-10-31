/*.pagina-completa {
    background-color: lightblue; /* Cor de fundo da seção 
    color: darkblue; /* Cor do texto 
    width: 100%; /* Largura total 
    height: 100%; /* Altura total 
    display: flex; /* Usando flexbox para centraliar texto 
    justify-content: center; /* Centraliza horizontalmente
    align-items: center; /* Centraliza verticalmente 
    font-size: 2em; /* Tamanho do texto 
    position:absolute;
    top: 50%;
    left: 50%;
}*/

window.onscroll = function() {
    const menu = document.getElementById("menu");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        menu.classList.add("scrolled");
    } else {
        menu.classList.remove("scrolled");
    }
};

/*imagens infraestrutura */
document.querySelectorAll('.gallery').forEach(gallery => {
    const images = gallery.querySelectorAll('.image-container img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    gallery.querySelector('#nextButton').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    gallery.querySelector('#prevButton').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    // Inicializa a primeira imagem
    showImage(currentIndex);
});

